import type { Language, OverviewSection, SectionId } from "../data/resume";
import { LanguageToggle } from "./LanguageToggle";

interface NavbarProps {
  contactLabel: string;
  cvHref: string;
  downloadLabel: string;
  language: Language;
  languageLabel: string;
  name: string;
  navLabel: string;
  sections: OverviewSection[];
  onLanguageChange: (language: Language) => void;
  onOpenSection: (section: SectionId) => void;
}

export function Navbar({
  contactLabel,
  cvHref,
  downloadLabel,
  language,
  languageLabel,
  name,
  navLabel,
  sections,
  onLanguageChange,
  onOpenSection,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/60 backdrop-blur-2xl">
      <nav
        aria-label={navLabel}
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
          href="#top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-900/20">
            YL
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold text-slate-950">{name}</span>
            <span className="block text-xs text-slate-500">Interactive Resume</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {sections.map((section) => (
            <button
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/80 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              key={section.id}
              onClick={() => onOpenSection(section.id)}
              type="button"
            >
              {section.title[language]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} label={languageLabel} onChange={onLanguageChange} />
          <button
            className="hidden rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 transition hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 sm:inline-flex"
            onClick={() => onOpenSection("contact")}
            type="button"
          >
            {contactLabel}
          </button>
          <a
            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 md:inline-flex"
            download
            href={cvHref}
          >
            {downloadLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
