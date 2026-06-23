import { useState } from "react";
import { motion } from "framer-motion";

interface BrandCardProps {
  label: string;
  text: string;
  words: string[];
  className?: string;
  photoAlt?: string;
  photoSrc?: string;
}

export function BrandCard({ label, text, words, className = "", photoAlt, photoSrc }: BrandCardProps) {
  const [hasPhotoError, setHasPhotoError] = useState(false);
  const resolvedPhotoSrc = photoSrc?.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${photoSrc}`
    : photoSrc;
  const shouldShowPhoto = Boolean(resolvedPhotoSrc && !hasPhotoError);

  return (
    <motion.div
      className={`rounded-[2rem] border border-white/60 bg-white/55 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-800 to-rose-900 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100/80">{label}</p>
        {shouldShowPhoto ? (
          <div className="mt-8 inline-flex rounded-3xl border border-white/20 bg-white/10 p-2 shadow-xl shadow-rose-950/30 backdrop-blur-sm">
            <img
              alt={photoAlt ?? label}
              className="block h-auto w-20 rounded-2xl object-contain shadow-lg shadow-slate-950/30 sm:w-24 lg:w-[112px]"
              onError={() => setHasPhotoError(true)}
              src={resolvedPhotoSrc}
            />
          </div>
        ) : null}
        <div className={`${shouldShowPhoto ? "mt-8" : "mt-14"} space-y-6`}>
          <div>
            {words.map((word, index) => (
              <p
                className={`text-2xl font-black leading-tight sm:text-3xl lg:text-[2.1rem] ${index === 1 ? "text-rose-200" : ""}`}
                key={word}
              >
                {word}
              </p>
            ))}
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-200">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
