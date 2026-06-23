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
  keepSentenceOnDesktop?: boolean;
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
  keepSentenceOnDesktop = false,
  onContactClick,
}: HeroProps) {
  const [hasPhotoError, setHasPhotoError] = useState(false);
  const resolvedPhotoSrc = profilePhotoSrc.startsWith("/")
    ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${profilePhotoSrc}`
    : profilePhotoSrc;
  const fallbackMark = name === "Yanrui Li" ? "YL" : name.slice(0, 1);
  const keywordColors = ["#6F5F8C", "#C75C7E", "#3B73B9"];

  return (
    <section className="relative isolate overflow-hidden px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pb-14 lg:pt-20">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute right-4 top-36 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1500px] overflow-hidden rounded-[2.5rem] bg-[linear-gradient(90deg,_rgba(255,255,255,0)_0%,_rgba(251,231,239,0.55)_42%,_rgba(251,231,239,0.82)_58%,_rgba(220,238,255,0.96)_100%)] p-3 shadow-2xl shadow-slate-900/10 lg:min-h-[620px] lg:grid-cols-[0.46fr_0.54fr] lg:p-4">
        <motion.div
          className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[520px] lg:min-h-full"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute inset-0 transition duration-300 hover:scale-[1.01]">
            {!hasPhotoError ? (
              <img
                alt={name}
                className="h-full w-full object-cover object-center"
                onError={() => setHasPhotoError(true)}
                src={resolvedPhotoSrc}
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-rose-100 via-white to-sky-100 p-8 text-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
                    {heroDeckLabel}
                  </p>
                  <p className="mt-6 text-5xl font-black text-[#071126]">{fallbackMark}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative px-6 py-10 text-center font-['Inter','Helvetica_Neue',Arial,sans-serif] sm:px-10 lg:flex lg:-translate-x-20 lg:flex-col lg:items-end lg:justify-center lg:py-16 lg:pl-10 lg:pr-[4.5vw] lg:text-right xl:-translate-x-24 xl:pr-[5vw]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
        >
          <div className="absolute right-12 top-12 hidden h-20 w-20 rounded-full bg-white/35 blur-xl lg:block" />
          <span className="relative inline-flex rounded-full border border-[rgba(255,255,255,0.65)] bg-[rgba(255,255,255,0.72)] px-4 py-2 text-sm font-semibold text-[#475569] shadow-[0_10px_30px_rgba(7,17,38,0.06)] backdrop-blur-xl">
            {location}
          </span>
          <h1 className="relative mt-6 text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-[#071126] sm:text-6xl lg:text-7xl">
            {name}
          </h1>
          <div className="relative mt-8 space-y-1.5">
            {heroDeckWords.map((word, index) => (
              <p
                key={word}
                className="text-2xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-3xl lg:text-[2.05rem]"
                style={{ color: keywordColors[index % keywordColors.length] }}
              >
                {word}
              </p>
            ))}
          </div>
          <p
            className={`relative mx-auto mt-7 max-w-2xl text-base leading-8 text-[#475569] sm:text-lg lg:mx-0 lg:max-w-[540px] lg:text-right ${
              keepSentenceOnDesktop ? "lg:max-w-none lg:whitespace-nowrap lg:text-[0.95rem] xl:text-[0.98rem]" : ""
            }`}
          >
            {heroDeckText}
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
            <button
              className="rounded-full bg-[#071126] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_45px_rgba(7,17,38,0.16)] transition hover:-translate-y-1 hover:bg-[#13213A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C75C7E]"
              onClick={onContactClick}
              type="button"
            >
              {contactLabel}
            </button>
            <button
              aria-describedby="hero-download-note"
              className="rounded-full border border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.76)] px-6 py-3 text-base font-semibold text-[#13213A] shadow-[0_12px_32px_rgba(7,17,38,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C75C7E]"
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
