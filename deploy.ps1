# Builds the site and deploys it to Azure App Service (Linux, .NET 10): the API
# with the built web app in its wwwroot, zipped and uploaded. Run from anywhere:
#
#   .\deploy.ps1
#
# Needs the Azure CLI, signed in (az login). The one-time setup of the plan,
# app and settings is in COMMANDS.txt under DOCKER AND AZURE.
#
#   .\deploy.ps1 -BuildOnly
#
# Builds artifacts\site without deploying, for uploading another way (the VS
# Code Azure App Service extension: right-click the folder, Deploy to Web App).
param(
    [string]$ResourceGroup = "openvalence-rg",
    [string]$App = "openvalence",
    [switch]$BuildOnly
)

# No $ErrorActionPreference = "Stop": Windows PowerShell would treat npm's and
# dotnet's ordinary stderr output as a failure. Each step checks its exit code.
$root = $PSScriptRoot
$site = Join-Path $root "artifacts\site"
$zip = Join-Path $root "artifacts\site.zip"

if (-not $BuildOnly -and -not (Get-Command az -ErrorAction SilentlyContinue)) {
    throw "The Azure CLI isn't installed: winget install -e --id Microsoft.AzureCLI, then az login"
}

function Invoke-Step([string]$name, [scriptblock]$step) {
    Write-Host "==> $name"
    $global:LASTEXITCODE = 0
    & $step
    if ($LASTEXITCODE -ne 0) { throw "$name failed (exit code $LASTEXITCODE)" }
}

Remove-Item $site, $zip -Recurse -Force -ErrorAction SilentlyContinue

Push-Location (Join-Path $root "web")
try {
    Invoke-Step "Build the web app" { npm run build }
} finally {
    Pop-Location
}

Invoke-Step "Publish the API" { dotnet publish (Join-Path $root "api") -c Release -o $site }
Copy-Item (Join-Path $root "web\dist") (Join-Path $site "wwwroot") -Recurse -ErrorAction Stop

# tar, not Compress-Archive: Windows PowerShell's Compress-Archive can write
# backslashes into entry names, which Linux unpacks as flat file names.
Invoke-Step "Zip the site" { tar -a -c -f $zip -C $site . }

if ($BuildOnly) {
    Write-Host "==> Built: $site (and $zip)"
    return
}

Invoke-Step "Deploy to $App" { az webapp deploy -n $App -g $ResourceGroup --src-path $zip --type zip }

$hostName = az webapp show -n $App -g $ResourceGroup --query defaultHostName -o tsv
Write-Host "==> Deployed: https://$hostName"
