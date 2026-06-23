import { useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { DetailPanel } from "./components/DetailPanel";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OverviewCard } from "./components/OverviewCard";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCloud } from "./components/SkillCloud";
import { Timeline } from "./components/Timeline";
import { type Language, type SectionId, resume } from "./data/resume";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const displayName = resume.profile.name[language];
  const cvHref = `${import.meta.env.BASE_URL}${
    language === "zh" ? "cv/Yanrui_Li_CV_CN.pdf" : "cv/Yanrui_Li_CV_EN.pdf"
  }`;

  const selectedSection = activeSection
    ? resume.overviewSections.find((section) => section.id === activeSection)
    : undefined;

  const renderDetailContent = () => {
    switch (activeSection) {
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
                imageUrl={project.imageUrl}
                key={project.title.en}
                language={language}
                pdfUrl={project.pdfUrl}
                title={project.title[language]}
                websiteUrl={project.websiteUrl}
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
        cvHref={cvHref}
        downloadLabel={resume.ui.downloadButton[language]}
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
          cvHref={cvHref}
          downloadLabel={resume.ui.downloadButton[language]}
          heroDeckLabel={resume.ui.heroDeckLabel[language]}
          heroDeckText={resume.ui.heroDeckText[language]}
          heroDeckWords={resume.ui.heroDeckWords[language]}
          location={resume.profile.heroLocation[language]}
          name={displayName}
          onContactClick={() => setActiveSection("contact")}
          profilePhotoSrc={resume.profile.profilePhoto}
          keepSentenceOnDesktop={language === "zh"}
        />

        <section className="px-4 pb-16 pt-2 sm:px-6 lg:px-8" id="about-summary">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-[1060px]">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-rose-700">
                {resume.ui.aboutHeading[language]}
              </p>
              <div className="mt-6 space-y-4 text-lg leading-9 text-slate-600 sm:text-xl">
                {resume.profile.summaryLines[language].map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8" id="overview">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose-700">
                {resume.ui.overviewHeading[language]}
              </p>
              <p className="mt-4 max-w-2xl text-[16px] font-medium leading-[1.5] text-[#475569] sm:text-xl">
                {resume.ui.overviewIntro[language]}
              </p>
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
