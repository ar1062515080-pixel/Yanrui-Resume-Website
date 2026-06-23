import { motion } from "framer-motion";

interface OverviewCardProps {
  eyebrow: string;
  index: number;
  openLabel: string;
  summary: string;
  title: string;
  onOpen: () => void;
}

export function OverviewCard({ eyebrow, index, openLabel, summary, title, onOpen }: OverviewCardProps) {
  return (
    <motion.button
      className="group h-full rounded-[1.75rem] border border-white/60 bg-white/55 p-6 text-left shadow-xl shadow-slate-900/5 backdrop-blur-2xl transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
      initial={{ opacity: 0, y: 24 }}
      onClick={onOpen}
      type="button"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.01 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" }}
    >
      <span className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-rose-100/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
          {eyebrow}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-sm font-black text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </span>
      <h3 className="mt-8 text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
        {openLabel}
        <span aria-hidden="true" className="transition group-hover:translate-x-1">
          -&gt;
        </span>
      </span>
    </motion.button>
  );
}
