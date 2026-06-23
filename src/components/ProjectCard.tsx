interface ProjectCardProps {
  description: string;
  highlights: string[];
  highlightsLabel: string;
  title: string;
}

export function ProjectCard({ description, highlights, highlightsLabel, title }: ProjectCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/60 bg-white/60 p-6 shadow-sm shadow-slate-900/5">
      <h3 className="text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
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
