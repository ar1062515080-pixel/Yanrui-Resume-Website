import { motion } from "framer-motion";

interface ProfilePlaceholderProps {
  initials: string;
  label: string;
  className?: string;
}

export function ProfilePlaceholder({ initials, label, className = "" }: ProfilePlaceholderProps) {
  return (
    <motion.div
      className={`group relative mx-auto w-full max-w-[320px] rounded-[2rem] border border-white/60 bg-white/55 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:max-w-[360px] ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-rose-100 via-white to-sky-100 p-6">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-300/30 blur-2xl" />
        <div className="absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-sky-300/35 blur-2xl" />
        <div className="relative flex aspect-[4/5] flex-col items-center justify-center rounded-[1.25rem] border border-white/70 bg-white/45 p-6 text-center shadow-inner">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-slate-950 text-4xl font-black text-white shadow-xl shadow-slate-900/20 sm:h-32 sm:w-32 sm:text-5xl">
            {initials}
          </div>
          <p className="mt-8 max-w-48 text-base font-bold leading-7 text-slate-700">{label}</p>
          <div className="mt-6 flex gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-rose-400" />
            <span className="h-2 w-8 rounded-full bg-slate-300" />
            <span className="h-2 w-2 rounded-full bg-sky-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
