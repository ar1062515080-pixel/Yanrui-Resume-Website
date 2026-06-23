import { useState } from "react";
import type { Language, TimelineItem } from "../data/resume";

interface TimelineProps {
  detailLabel: string;
  items: TimelineItem[];
  language: Language;
}

export function Timeline({ detailLabel, items, language }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article className="relative rounded-[1.5rem] border border-white/60 bg-white/60 p-6 shadow-sm shadow-slate-900/5" key={`${item.organization.en}-${item.period.en}`}>
          <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-rose-500 shadow-[0_0_0_6px_rgba(244,63,94,0.12)]" />
          <div className="pl-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex min-w-0 items-start justify-between gap-4 md:block">
                <div>
                  <h3 className="text-xl font-black text-slate-950">{item.title[language]}</h3>
                  <p className="mt-1 font-semibold text-rose-700">{item.organization[language]}</p>
                </div>
                {item.logo ? (
                  <div className="md:hidden">
                    <TimelineLogo fallback={item.logo.fallback} src={item.logo.src} />
                  </div>
                ) : null}
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="text-left text-sm font-semibold text-slate-500 md:text-right">
                  <p>{item.period[language]}</p>
                  <p>{item.location[language]}</p>
                </div>
                {item.logo ? (
                  <div className="hidden md:block">
                    <TimelineLogo fallback={item.logo.fallback} src={item.logo.src} />
                  </div>
                ) : null}
              </div>
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{detailLabel}</p>
            <ul className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
              {item.details[language].map((detail) => (
                <li className="rounded-2xl bg-white/70 p-4" key={detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function TimelineLogo({ fallback, src }: { fallback: string; src: string }) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = src.startsWith("/") ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${src}` : src;

  return (
    <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-white/70 bg-white/75 p-2 text-xs font-black text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl sm:h-16 sm:w-16">
      {!hasError ? (
        <img
          alt=""
          className="max-h-full max-w-full object-contain"
          onError={() => setHasError(true)}
          src={resolvedSrc}
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}
