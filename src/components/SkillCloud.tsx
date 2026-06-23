import type { Language, SkillGroup } from "../data/resume";

interface SkillCloudProps {
  groups: SkillGroup[];
  intro: string;
  language: Language;
}

export function SkillCloud({ groups, intro, language }: SkillCloudProps) {
  return (
    <div>
      <p className="max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {groups.map((group) => (
          <section className="rounded-[1.5rem] border border-white/60 bg-white/60 p-5 shadow-sm shadow-slate-900/5" key={group.title.en}>
            <h3 className="text-lg font-black text-slate-950">{group.title[language]}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills[language].map((skill) => (
                <span
                  className="rounded-full bg-slate-950/90 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
