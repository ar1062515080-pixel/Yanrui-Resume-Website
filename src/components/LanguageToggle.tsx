import type { Language } from "../data/resume";

interface LanguageToggleProps {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}

const options: Array<{ value: Language; label: string }> = [
  { value: "en", label: "EN" },
  { value: "zh", label: "中文" },
];

export function LanguageToggle({ language, label, onChange }: LanguageToggleProps) {
  return (
    <div
      aria-label={label}
      className="inline-flex rounded-full border border-white/50 bg-white/55 p-1 shadow-sm shadow-slate-900/5 backdrop-blur-xl"
      role="group"
    >
      {options.map((option) => (
        <button
          aria-pressed={language === option.value}
          className={`rounded-full px-3 py-1.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 ${
            language === option.value
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-600 hover:bg-white/80 hover:text-slate-950"
          }`}
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
