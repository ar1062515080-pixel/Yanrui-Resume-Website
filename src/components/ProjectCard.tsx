import { useState } from "react";
import type { Language } from "../data/resume";

interface ProjectCardProps {
  description: string;
  highlights: string[];
  highlightsLabel: string;
  imageUrl: string;
  language: Language;
  pdfUrl?: string;
  title: string;
  websiteUrl?: string;
}

const actionLabels = {
  website: {
    en: "View Website",
    zh: "查看项目网站",
  },
  pdf: {
    en: "View PDF",
    zh: "查看 PDF",
  },
  visual: {
    en: "Open project",
    zh: "打开项目",
  },
} satisfies Record<string, Record<Language, string>>;

function resolveHref(href: string) {
  return href.startsWith("/") ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${href}` : href;
}

export function ProjectCard({
  description,
  highlights,
  highlightsLabel,
  imageUrl,
  language,
  pdfUrl,
  title,
  websiteUrl,
}: ProjectCardProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const primaryHref = websiteUrl ?? pdfUrl;
  const resolvedImageUrl = resolveHref(imageUrl);

  const visual = (
    <div className="group relative h-56 overflow-hidden rounded-[1.25rem] bg-white/70 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/10 sm:h-64">
      {!hasImageError ? (
        <img
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          onError={() => setHasImageError(true)}
          src={resolvedImageUrl}
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-white/70 p-6 text-center">
          <div>
            <p className="text-sm font-black text-slate-950">{title}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {actionLabels.visual[language]}
            </p>
          </div>
        </div>
      )}
      {primaryHref ? (
        <span className="absolute bottom-4 right-4 rounded-full bg-white/85 px-4 py-2 text-xs font-bold text-slate-700 shadow-sm shadow-slate-900/10 backdrop-blur-md transition group-hover:bg-white">
          {actionLabels.visual[language]}
        </span>
      ) : null}
    </div>
  );

  return (
    <article className="rounded-[1.5rem] border border-white/60 bg-white/60 p-6 shadow-sm shadow-slate-900/5">
      {primaryHref ? (
        <a
          aria-label={`${actionLabels.visual[language]}: ${title}`}
          href={resolveHref(primaryHref)}
          rel="noopener noreferrer"
          target="_blank"
        >
          {visual}
        </a>
      ) : (
        visual
      )}
      <h3 className="mt-6 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      {(websiteUrl || pdfUrl) ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {websiteUrl ? (
            <a
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              href={resolveHref(websiteUrl)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {actionLabels.website[language]}
            </a>
          ) : null}
          {pdfUrl ? (
            <a
              className="rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              href={resolveHref(pdfUrl)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {actionLabels.pdf[language]}
            </a>
          ) : null}
        </div>
      ) : null}
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{highlightsLabel}</p>
      <ul className="mt-3 space-y-3">
        {highlights.map((highlight) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-600" key={highlight}>
            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-rose-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
