import { motion } from "framer-motion";

interface BrandCardProps {
  label: string;
  text: string;
  words: string[];
  className?: string;
}

export function BrandCard({ label, text, words, className = "" }: BrandCardProps) {
  return (
    <motion.div
      className={`rounded-[2rem] border border-white/60 bg-white/55 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl ${className}`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-800 to-rose-900 p-8 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-100/80">{label}</p>
        <div className="mt-14 space-y-6">
          <div>
            {words.map((word, index) => (
              <p className={`text-4xl font-black ${index === 1 ? "text-rose-200" : ""}`} key={word}>
                {word}
              </p>
            ))}
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-200">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
