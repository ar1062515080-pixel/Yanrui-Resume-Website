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
  const fallbackMark = name === "Yanrui Li" ? "YL" : name.slice(0, 1);

  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute right-4 top-36 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(115deg,_#fff7f7_0%,_#fce7f3_38%,_#e0f2fe_100%)] shadow-2xl shadow-slate-900/10 lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          className="relative flex items-end justify-center px-6 pt-8 sm:px-10 lg:px-12 lg:pt-12"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-r from-transparent to-rose-50/70 lg:block" />
          <div className="relative w-full max-w-sm transition duration-300 hover:-translate-y-1 sm:max-w-md lg:max-w-[500px]">
            {!hasPhotoError ? (
              <img
                alt={name}
                className="block h-auto max-h-[560px] w-full rounded-[2rem] object-contain shadow-2xl shadow-slate-900/15"
                onError={() => setHasPhotoError(true)}
                src={resolvedPhotoSrc}
              />
            ) : (
              <div className="grid aspect-[4/5] place-items-center rounded-[2rem] bg-gradient-to-br from-rose-100 via-white to-sky-100 p-8 text-center shadow-2xl shadow-slate-900/15">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
                    {heroDeckLabel}
                  </p>
                  <p className="mt-6 text-5xl font-black text-slate-950">{fallbackMark}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative px-6 py-10 text-center sm:px-10 lg:flex lg:flex-col lg:items-end lg:justify-center lg:px-14 lg:py-16 lg:text-right"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
        >
          <div className="absolute right-12 top-12 hidden h-20 w-20 rounded-full bg-white/35 blur-xl lg:block" />
          <span className="relative inline-flex rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
            {location}
          </span>
          <h1 className="relative mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {name}
          </h1>
          <div className="relative mt-8 space-y-2">
            {heroDeckWords.map((word) => (
              <p className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl" key={word}>
                {word}
              </p>
            ))}
          </div>
          <p className="relative mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            {heroDeckText}
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
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
