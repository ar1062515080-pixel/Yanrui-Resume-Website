import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { DetailPanel } from "./components/DetailPanel";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OverviewCard } from "./components/OverviewCard";
import { BrandCard } from "./components/BrandCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCloud } from "./components/SkillCloud";
import { Timeline } from "./components/Timeline";
import { type Language, type SectionId, resume } from "./data/resume";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const displayName = resume.profile.name[language];

  const selectedSection = activeSection
    ? resume.overviewSections.find((section) => section.id === activeSection)
    : undefined;

  const renderDetailContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <BrandCard
                className="lg:max-w-[420px]"
                label={resume.ui.heroDeckLabel[language]}
                text={resume.ui.heroDeckText[language]}
                words={resume.ui.heroDeckWords[language]}
              />
            </div>
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 to-rose-900 p-8 text-white shadow-xl shadow-slate-900/15">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-100/80">
                {resume.profile.location[language]}
              </p>
              <h3 className="mt-8 text-4xl font-black">{displayName}</h3>
              <p className="mt-4 text-lg font-semibold text-rose-100">{resume.profile.tagline[language]}</p>
              <div className="mt-8 rounded-[1.25rem] border border-white/15 bg-white/10 p-5">
                <p className="text-lg leading-9 text-slate-100">{resume.profile.summary[language]}</p>
              </div>
            </div>
          </div>
        );
      case "education":
        return (
          <Timeline
            detailLabel={resume.ui.coursework[language]}
            items={resume.education}
            language={language}
          />
        );
      case "experience":
        return (
          <Timeline
            detailLabel={resume.ui.responsibilities[language]}
            items={resume.experience}
            language={language}
          />
        );
      case "projects":
        return (
          <div className="grid gap-5 lg:grid-cols-2">
            {resume.projects.map((project) => (
              <ProjectCard
                description={project.description[language]}
                highlights={project.highlights[language]}
                highlightsLabel={resume.ui.highlights[language]}
                key={project.title.en}
                title={project.title[language]}
              />
            ))}
          </div>
        );
      case "skills":
        return (
          <SkillCloud
            groups={resume.skillGroups}
            intro={resume.ui.skillsIntro[language]}
            language={language}
          />
        );
      case "contact":
        return (
          <ContactSection
            contacts={resume.contacts}
            intro={resume.ui.contactIntro[language]}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_#ffe4e6,_transparent_32%),linear-gradient(135deg,_#f8fafc_0%,_#fdf2f8_42%,_#e0f2fe_100%)] text-slate-900">
      <Navbar
        contactLabel={resume.ui.contactButton[language]}
        downloadLabel={resume.ui.downloadButton[language]}
        downloadNote={resume.ui.downloadNote[language]}
        language={language}
        languageLabel={resume.ui.languageLabel[language]}
        name={displayName}
        navLabel={resume.ui.navLabel[language]}
        onLanguageChange={setLanguage}
        onOpenSection={setActiveSection}
        sections={resume.overviewSections}
      />

      <main>
        <Hero
          contactLabel={resume.ui.contactButton[language]}
          downloadLabel={resume.ui.downloadButton[language]}
          downloadNote={resume.ui.downloadNote[language]}
          heroDeckLabel={resume.ui.heroDeckLabel[language]}
          heroDeckText={resume.ui.heroDeckText[language]}
          heroDeckWords={resume.ui.heroDeckWords[language]}
          location={resume.profile.location[language]}
          name={displayName}
          onContactClick={() => setActiveSection("contact")}
          profilePhotoSrc={resume.profile.profilePhoto}
          keepSentenceOnDesktop={language === "zh"}
        />

        <section className="px-4 pb-14 sm:px-6 lg:px-8" id="about-summary">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-white/60 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-2xl sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-700">
                {resume.ui.aboutHeading[language]}
              </p>
              <p className="mt-5 max-w-5xl text-lg leading-9 text-slate-600">
                {resume.profile.summary[language]}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8" id="overview">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-700">
                {resume.ui.overviewHeading[language]}
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {resume.ui.overviewIntro[language]}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {resume.overviewSections.map((section, index) => (
                <OverviewCard
                  eyebrow={section.eyebrow[language]}
                  index={index}
                  key={section.id}
                  onOpen={() => setActiveSection(section.id)}
                  openLabel={resume.ui.openDetails[language]}
                  summary={section.summary[language]}
                  title={section.title[language]}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <DetailPanel
        closeLabel={resume.ui.closeDetails[language]}
        isOpen={Boolean(activeSection)}
        onClose={() => setActiveSection(null)}
        title={selectedSection?.title[language] ?? ""}
      >
        {renderDetailContent()}
      </DetailPanel>
    </div>
  );
}

export default App;
