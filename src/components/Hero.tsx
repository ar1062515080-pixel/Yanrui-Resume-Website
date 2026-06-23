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
  summary: string;
  tagline: string;
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
  summary,
  tagline,
  onContactClick,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute right-4 top-36 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
            {location}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-rose-700 sm:text-2xl">
            {tagline}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{summary}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
        >
          <div className="rounded-[2rem] border border-white/60 bg-white/55 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-800 to-rose-900 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100/80">
                {heroDeckLabel}
              </p>
              <div className="mt-14 space-y-6">
                <div>
                  {heroDeckWords.map((word, index) => (
                    <p className={`text-4xl font-black ${index === 1 ? "text-rose-200" : ""}`} key={word}>
                      {word}
                    </p>
                  ))}
                </div>
                <p className="max-w-sm text-sm leading-6 text-slate-200">
                  {heroDeckText}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
