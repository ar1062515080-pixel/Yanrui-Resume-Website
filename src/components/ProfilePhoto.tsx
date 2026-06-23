import { useState } from "react";
import { motion } from "framer-motion";

interface ProfilePhotoProps {
  alt: string;
  className?: string;
  fallbackLabel: string;
  fallbackWords: string[];
  src: string;
}

export function ProfilePhoto({ alt, className = "", fallbackLabel, fallbackWords, src }: ProfilePhotoProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const resolvedSrc = src.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${src}`
    : src;

  return (
    <motion.div
      className={`group relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:max-w-[380px] lg:max-w-[400px] ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {!hasImageError ? (
        <img
          alt={alt}
          className="block h-auto w-full rounded-[1.45rem] object-contain shadow-inner transition duration-500 group-hover:scale-[1.01]"
          onError={() => setHasImageError(true)}
          src={resolvedSrc}
        />
      ) : (
        <div className="aspect-[4/5] rounded-[1.45rem] bg-gradient-to-br from-slate-950 via-slate-800 to-rose-900 p-8 text-white">
          <div className="flex h-full flex-col justify-between">
            <div className="h-20 w-20 rounded-full bg-white/15 shadow-inner" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100/80">
                {fallbackLabel}
              </p>
              <div className="mt-5 space-y-1">
                {fallbackWords.map((word, index) => (
                  <p className={`text-4xl font-black ${index === 1 ? "text-rose-200" : ""}`} key={word}>
                    {word}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
