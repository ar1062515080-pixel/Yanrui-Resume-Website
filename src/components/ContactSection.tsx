import type { ContactItem, Language } from "../data/resume";

interface ContactSectionProps {
  contacts: ContactItem[];
  intro: string;
  language: Language;
}

export function ContactSection({ contacts, intro, language }: ContactSectionProps) {
  return (
    <div>
      <p className="max-w-3xl text-base leading-8 text-slate-600">{intro}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {contacts.map((contact) => {
          const content = (
            <>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                {contact.label[language]}
              </span>
              <span className="mt-2 block break-words text-lg font-black text-slate-950">{contact.value}</span>
            </>
          );

          return contact.href ? (
            <a
              className="rounded-[1.5rem] border border-white/60 bg-white/60 p-5 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
              href={contact.href}
              key={contact.value}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
            >
              {content}
            </a>
          ) : (
            <div className="rounded-[1.5rem] border border-white/60 bg-white/60 p-5 shadow-sm shadow-slate-900/5" key={contact.value}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
