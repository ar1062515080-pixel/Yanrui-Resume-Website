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
  const isChinese = name !== "Yanrui Li";
  const keywordColors = ["#6F5F8C", "#C75C7E", "#3B73B9"];

  return (
    <section
      className={`relative isolate overflow-hidden pb-10 pt-14 lg:pb-14 lg:pt-20 ${
        isChinese ? "px-5 sm:px-6 lg:px-8" : "px-6 sm:px-10 lg:px-16 xl:px-20"
      }`}
    >
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="absolute right-4 top-36 -z-10 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div
        className={`mx-auto grid w-full overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,_#F8EEF3_0%,_#F6F1F7_45%,_#EDF4FF_100%)] shadow-2xl shadow-slate-900/10 lg:h-[620px] lg:grid-cols-[46%_54%] ${
          isChinese ? "max-w-7xl" : "max-w-[1200px] 2xl:max-w-[1240px]"
        }`}
      >
        <motion.div
          className="relative min-h-[430px] overflow-hidden rounded-[36px] shadow-[0_20px_50px_rgba(7,17,38,0.08)] sm:min-h-[540px] lg:h-full lg:min-h-0"
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
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[#F8EEF3] via-white to-[#EDF4FF] p-8 text-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C75C7E]">
                    {heroDeckLabel}
                  </p>
                  <p className="mt-6 text-5xl font-black text-[#071126]">{fallbackMark}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="relative bg-[linear-gradient(135deg,_#F8EEF3_0%,_#F6F1F7_45%,_#EDF4FF_100%)] px-6 py-10 text-center font-['Inter','Helvetica_Neue',Arial,'Noto_Sans_SC','PingFang_SC','Microsoft_YaHei',sans-serif] sm:px-10 lg:flex lg:h-full lg:items-center lg:justify-end lg:px-0 lg:py-0 lg:text-right"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
        >
          <div className="absolute right-12 top-12 hidden h-20 w-20 rounded-full bg-white/35 blur-xl lg:block" />
          <div className="mx-auto w-full max-w-[620px] lg:ml-auto lg:mr-[6vw] lg:max-w-[620px] xl:mr-[7vw]">
            <span className="relative inline-flex rounded-full border border-[rgba(255,255,255,0.65)] bg-[rgba(255,255,255,0.72)] px-5 py-2.5 text-[18px] font-semibold text-[#475569] shadow-[0_10px_30px_rgba(7,17,38,0.06)] backdrop-blur-xl">
              {location}
            </span>
            <h1
              className={`relative mt-7 font-extrabold leading-[1.05] tracking-[-0.045em] text-[#071126] ${
                isChinese ? "text-[72px] sm:text-[88px]" : "text-[56px] sm:text-[72px]"
              }`}
            >
              {name}
            </h1>
            {isChinese ? (
              <div className="relative mt-8 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[30px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-[36px] lg:justify-end lg:whitespace-nowrap">
                {heroDeckWords.map((word, index) => (
                  <span className="inline-flex items-center gap-x-3" key={word}>
                    {index > 0 ? (
                      <span className="text-[#94A3B8]" aria-hidden="true">
                        &middot;
                      </span>
                    ) : null}
                    <span style={{ color: keywordColors[index % keywordColors.length] }}>{word}</span>
                  </span>
                ))}
              </div>
            ) : (
              <div className="relative mt-8 space-y-2">
                {heroDeckWords.map((word, index) => (
                  <p
                    key={word}
                    className="text-[26px] font-bold leading-[1.25] tracking-[-0.015em] sm:text-[30px]"
                    style={{ color: keywordColors[index % keywordColors.length] }}
                  >
                    {word}
                  </p>
                ))}
              </div>
            )}
            <p
              className={`relative mt-8 font-medium leading-[1.7] text-[#475569] ${
                isChinese ? "text-[18px] sm:text-[21px]" : "text-[16px] sm:text-[18px]"
              } ${keepSentenceOnDesktop && !isChinese ? "lg:whitespace-nowrap lg:text-[17px] xl:text-[18px]" : ""}`}
            >
              {heroDeckText}
            </p>

            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
              <button
                className="h-14 rounded-full bg-[#071126] px-7 text-[18px] font-bold text-white shadow-[0_18px_45px_rgba(7,17,38,0.16)] transition hover:-translate-y-1 hover:bg-[#13213A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C75C7E]"
                onClick={onContactClick}
                type="button"
              >
                {contactLabel}
              </button>
              <button
                aria-describedby="hero-download-note"
                className="h-14 rounded-full border border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.85)] px-7 text-[18px] font-bold text-[#13213A] shadow-[0_12px_32px_rgba(7,17,38,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C75C7E]"
                type="button"
              >
                {downloadLabel}
              </button>
              <span className="sr-only" id="hero-download-note">
                {downloadNote}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
