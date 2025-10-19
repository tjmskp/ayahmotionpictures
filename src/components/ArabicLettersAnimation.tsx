import { useEffect, useState } from "react";

const arabicLetters = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", 
  "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", 
  "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"
];

export const ArabicLettersAnimation = () => {
  const [visibleLetters, setVisibleLetters] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= arabicLetters.length) {
          return 0; // Reset animation
        }
        return prev + 1;
      });
    }, 150); // Reveal one letter every 150ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-8 top-20 z-10 flex flex-col gap-2 pointer-events-none">
      {arabicLetters.map((letter, index) => (
        <div
          key={index}
          className={`text-4xl font-bold text-white/80 transition-all duration-500 ${
            index < visibleLetters
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
            transitionDelay: `${index * 50}ms`,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
