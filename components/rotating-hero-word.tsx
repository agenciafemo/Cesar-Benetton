"use client";

import { useEffect, useState } from "react";

const HERO_WORDS = [
  "movimento",
  "bem-estar",
  "autonomia",
  "liberdade",
  "confiança",
  "esperança",
  "felicidade",
];

const WORD_CHANGE_INTERVAL = 2200;

export function RotatingHeroWord() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setWordIndex((currentIndex) =>
        currentIndex === HERO_WORDS.length - 1 ? 0 : currentIndex + 1,
      );
    }, WORD_CHANGE_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <span className="sr-only">movimento</span>
      <span
        key={HERO_WORDS[wordIndex]}
        aria-hidden="true"
        className="hero-rotating-word inline-block"
      >
        {HERO_WORDS[wordIndex]}
      </span>
    </>
  );
}
