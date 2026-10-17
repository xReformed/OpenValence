# One image for the whole site: the API (api/) serves the built web app (web/)
# from wwwroot, so it runs as a single container on Azure Container Apps or App
# Service. Build from the repo root:
#
#   docker build -t openvalence .
#   docker run --rm -p 8080:8080 -e DATABASE_URL=... openvalence
#
# Settings come from environment variables (DATABASE_URL, ANTHROPIC_API_KEY);
# .env files are kept out of the image (see .dockerignore).

# --- Web app ------------------------------------------------------------------
FROM node:24-alpine AS web
WORKDIR /src/web
COPY web/package.json web/package-lock.json ./
RUN npm ci
COPY web/ ./
# Section pages import the corpus from ../sources at build time
# (web/src/lib/sectionText.ts).
COPY sources/openstax/ /src/sources/openstax/
RUN npm run build

# --- API ----------------------------------------------------------------------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS api
WORKDIR /src
COPY core/core.csproj core/
COPY api/api.csproj api/
RUN dotnet restore api/api.csproj
COPY core/ core/
COPY api/ api/
RUN dotnet publish api/api.csproj -c Release -o /app --no-restore

# --- Runtime ------------------------------------------------------------------
FROM mcr.microsoft.com/dotnet/aspnet:10.0
# Npgsql probes for GSSAPI (Kerberos) on its first connection and logs an
# error when the library is missing, though Neon never uses it.
RUN apt-get update \
    && apt-get install -y --no-install-recommends libgssapi-krb5-2 \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=api /app ./
COPY --from=web /src/web/dist ./wwwroot/
# Azure ends TLS at its front end and passes the original scheme in
# X-Forwarded-Proto; this lets the app see those requests as https.
ENV ASPNETCORE_FORWARDEDHEADERS_ENABLED=true
# The base image listens on 8080 (ASPNETCORE_HTTP_PORTS) and defines a non-root user.
EXPOSE 8080
USER $APP_UID
ENTRYPOINT ["dotnet", "api.dll"]
