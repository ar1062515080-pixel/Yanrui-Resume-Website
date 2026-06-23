import { useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  contactLabel: string;
  downloadLabel: string;
  downloadNote: string;
  heroDeckLabel: string;
  heroDeckText: string;
  heroDeckWords: string[];
  location: string;
  name: string;
  profilePhotoSrc: string;
  onContactClick: () => void;
}

export function Hero({
  contactLabel,
  downloadLabel,
  downloadNote,
  heroDeckLabel,
  heroDeckText,
  heroDeckWords,
  location,
  name,
  profilePhotoSrc,
  onContactClick,
}: HeroProps) {
  const [hasPhotoError, setHasPhotoError] = useState(false);
  const resolvedPhotoSrc = profilePhotoSrc.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${profilePhotoSrc}`
    : profilePhotoSrc;

  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute right-4 top-36 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2.5rem] border border-white/60 bg-white/45 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <motion.div
          className="mx-auto w-full max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/55 p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-xl transition hover:-translate-y-1">
            {!hasPhotoError ? (
              <img
                alt={name}
                className="block h-auto max-h-[520px] w-full rounded-[1.6rem] object-contain shadow-xl shadow-slate-900/15"
                onError={() => setHasPhotoError(true)}
                src={resolvedPhotoSrc}
              />
            ) : (
              <div className="grid aspect-[4/5] place-items-center rounded-[1.6rem] bg-gradient-to-br from-slate-950 via-slate-800 to-rose-900 p-8 text-center text-white shadow-xl shadow-slate-900/15">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100/80">
                    {heroDeckLabel}
                  </p>
                  <p className="mt-6 text-5xl font-black">YL</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="px-2 py-4 text-center sm:px-4 lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-white/60 bg-white/65 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
            {location}
          </span>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {name}
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {heroDeckWords.map((word) => (
              <span
                className="rounded-full border border-white/70 bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/10 sm:text-base"
                key={word}
              >
                {word}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            {heroDeckText}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              className="rounded-full bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-1 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
              onClick={onContactClick}
              type="button"
            >
              {contactLabel}
            </button>
            <button
              aria-describedby="hero-download-note"
              className="rounded-full border border-white/70 bg-white/70 px-6 py-3 text-base font-semibold text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
              type="button"
            >
              {downloadLabel}
            </button>
            <span className="sr-only" id="hero-download-note">
              {downloadNote}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
