import DecryptedText from "./components/DecryptedText";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-michroma text-3xl tracking-widest sm:text-5xl">
        <DecryptedText
          text="OpenValence"
          animateOn="load"
          sequential
          speed={70}
          revealDirection="start"
          className="text-black"
          encryptedClassName="text-neutral-400"
        />
      </h1>

      <p className="max-w-xl font-michroma text-[0.65rem] leading-loose sm:text-xs">
        <DecryptedText
          text="Grounded chemistry Q&A, backed by real sources."
          animateOn="load"
          sequential
          speed={22}
          delay={900}
          className="text-neutral-700"
          encryptedClassName="text-neutral-300"
        />
      </p>
    </main>
  );
}

export default App;
