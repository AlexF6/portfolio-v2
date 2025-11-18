// src/components/Typewriter.jsx
import { useState, useEffect } from "react";

export default function Typewriter({
  words = ["Software Developer", "Designer", "Problem Solver"],
  typingSpeed = 45,
  deletingSpeed = 35,
  pauseTime = 2400,
  className = "",
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");

    if (mq?.matches) {
      setText(words[0] ?? "");
    }
  }, [words]);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    if (!currentWord) return;

    if (isPaused) {
      const pauseTimeout = setTimeout(() => setIsPaused(false), pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    const wordDone = !isDeleting && text === currentWord;
    const wordCleared = isDeleting && text === "";

    if (wordDone) {
      setIsPaused(true);
      setIsDeleting(true);
      return;
    }

    if (wordCleared) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    isPaused,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span
      className={`ml-2 text-[#9acd32] font-medium inline-flex items-baseline ${className}`}
    >
      <span aria-live="polite">{text}</span>
      <span
        className="ml-1 inline-block w-[1ch] border-r border-[#9acd32] animate-pulse"
        aria-hidden="true"
      />
    </span>
  );
}
