import React from "react";
import Reveal from "./Reveal";

export default function Hero({ contactRef }) {
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const phrases = [
    "studying Computer Engineering",
    "a student at UNSW",
    "feeling cool :)",
  ];
  const [currPhraseIdx, setCurrPhraseIdx] = React.useState(0);
  const [currPhrase, setCurrPhrase] = React.useState("");

  React.useEffect(() => {
    const sleepTime = 100;
    const loopPhrases = async () => {
      const phrase = phrases[currPhraseIdx];
      for (let i = 0; i < phrase.length; i++) {
        setCurrPhrase(phrase.substring(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = phrase.length; i > 0; i--) {
        setCurrPhrase(phrase.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);
      setCurrPhraseIdx((i) => (i + 1) % phrases.length);
    };
    loopPhrases();
  }, [currPhraseIdx]);

  const handleScroll = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-4 pt-32">
      <Reveal>
        <div className="flex">
          <h1 className="text-4xl font-thin tracking-wide md:text-8xl">
            Hey, I'm Vincent
            <span className="text-primary">.</span>
          </h1>
        </div>
      </Reveal>
      <h2 className="h-20 text-2xl sm:h-fit">
        I'm
        <span className="ml-2 font-bold text-primary">{currPhrase}</span>
        <span className="animate-blink text-secondary">|</span>
      </h2>
      <p>
        I'm all about
        {" AI and Frontend Development ".split("").map((child, i) => (
          <span
            className="highlight-nearby transition-all duration-75 hover:font-bold hover:text-content"
            key={i}
          >
            {child}
          </span>
        ))}
        😎 <br />I like gaming and going to the gym 🎮
      </p>
      <button
        className="w-fit rounded bg-primary px-6 py-2 font-medium shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        onClick={handleScroll}
      >
        Contact me
      </button>
    </section>
  );
}
