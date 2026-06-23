import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DetailPanelProps {
  children: ReactNode;
  closeLabel: string;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export function DetailPanel({ children, closeLabel, isOpen, title, onClose }: DetailPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-labelledby="detail-panel-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/40 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-6"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl sm:p-8"
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            exit={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl" id="detail-panel-title">
                {title}
              </h2>
              <button
                className="grid h-11 w-11 flex-none place-items-center rounded-full bg-slate-950 text-xl font-semibold leading-none text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <span className="sr-only">{closeLabel}</span>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
