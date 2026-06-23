export type Language = "en" | "zh";

export type Localized<T = string> = Record<Language, T>;

export type SectionId =
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export interface OverviewSection {
  id: SectionId;
  title: Localized;
  eyebrow: Localized;
  summary: Localized;
}

export interface TimelineItem {
  title: Localized;
  organization: Localized;
  period: Localized;
  location: Localized;
  details: Localized<string[]>;
  logo?: {
    src: string;
    fallback: string;
  };
}

export interface Project {
  title: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  websiteUrl?: string;
  pdfUrl?: string;
}

export interface SkillGroup {
  title: Localized;
  skills: Localized<string[]>;
}

export interface ContactItem {
  label: Localized;
  value: string;
  href?: string;
}

export const resume = {
  profile: {
    name: {
      en: "Yanrui Li",
      zh: "李沿睿",
    },
    profilePhoto: "/images/profile.JPG?v=hero2",
    location: {
      en: "Adelaide, South Australia",
      zh: "澳大利亚南澳州阿德莱德",
    },
    heroLocation: {
      en: "Adelaide, South Australia",
      zh: "南澳大利亚州阿德莱德",
    },
    tagline: {
      en: "Strategic Communication · Social Media Operations · Bilingual Content Marketing",
      zh: "战略传播 · 社交媒体运营 · 双语内容营销",
    },
    summary: {
      en: "Master of Communication from Adelaide University, specialising in Strategic Communication. Experienced in WeChat Official Account, RedNote/Xiaohongshu, WeChat Video Account, Weibo, bilingual copywriting, short-form video production, content planning, social media operations, PR campaign execution, and digital marketing. Native Mandarin speaker with professional English communication ability.",
      zh: "阿德莱德大学传播学硕士，主修战略传播。具备微信公众号、小红书、微信视频号、微博等平台运营经验，熟悉双语文案、短视频制作、内容策划、社交媒体运营、公关活动执行与数字营销。普通话为母语，具备专业英语沟通能力。",
    },
    summaryLines: {
      en: [
        "Master of Communication from Adelaide University, specialising in Strategic Communication.",
        "Experienced in WeChat Official Account, RedNote/Xiaohongshu, WeChat Video Account, Weibo, bilingual copywriting, short-form video production, content planning, social media operations, PR campaign execution, and digital marketing.",
        "Native Mandarin speaker with professional English communication ability.",
      ],
      zh: [
        "阿德莱德大学传播学硕士，主修战略传播。",
        "具备微信公众号、小红书、微信视频号、微博等平台运营经验，熟悉双语文案、短视频制作、内容策划、社交媒体运营、公关活动执行与数字营销。",
        "普通话为母语，具备专业英语沟通能力。",
      ],
    },
  },
  ui: {
    navLabel: {
      en: "Primary navigation",
      zh: "主导航",
    },
    languageLabel: {
      en: "Switch language",
      zh: "切换语言",
    },
    contactButton: {
      en: "Contact Me",
      zh: "联系我",
    },
    downloadButton: {
      en: "Download CV",
      zh: "下载简历",
    },
    downloadNote: {
      en: "PDF coming soon",
      zh: "PDF 即将添加",
    },
    heroDeckLabel: {
      en: "Personal Brand",
      zh: "个人品牌",
    },
    heroDeckWords: {
      en: ["Strategic Thinking", "Bilingual Communication", "Digital Operations"],
      zh: ["策略思维", "双语传播", "数字运营"],
    },
    heroDeckText: {
      en: "Communication-focused portfolio spanning social platforms, public relations, short-form video, and digital campaign execution.",
      zh: "以传播为核心，覆盖社交平台运营、公共关系、短视频内容与数字营销执行。",
    },
    aboutHeading: {
      en: "About Me",
      zh: "关于我",
    },
    openDetails: {
      en: "Open details",
      zh: "查看详情",
    },
    closeDetails: {
      en: "Close details",
      zh: "关闭详情",
    },
    overviewHeading: {
      en: "Explore My Background",
      zh: "浏览简历内容",
    },
    overviewIntro: {
      en: "Select a card to explore more details.",
      zh: "点击卡片查看详情",
    },
    current: {
      en: "Current",
      zh: "当前",
    },
    coursework: {
      en: "Relevant coursework",
      zh: "相关课程",
    },
    responsibilities: {
      en: "Responsibilities",
      zh: "工作内容",
    },
    highlights: {
      en: "Highlights",
      zh: "项目亮点",
    },
    skillsIntro: {
      en: "A practical toolkit spanning communication strategy, content production, digital marketing, analytics, and platform operations.",
      zh: "技能覆盖传播策略、内容生产、数字营销、数据分析与平台运营，能够支持从策划到执行的完整工作流程。",
    },
    contactIntro: {
      en: "Open to communication, marketing, PR, social media, and bilingual content opportunities.",
      zh: "期待沟通传播、市场营销、公关、社交媒体及双语内容相关机会。",
    },
  },
  overviewSections: [
    {
      id: "education",
      title: {
        en: "Education",
        zh: "教育背景",
      },
      eyebrow: {
        en: "Academic foundation",
        zh: "学术基础",
      },
      summary: {
        en: "Master-level communication training supported by a management and e-commerce background.",
        zh: "传播学硕士学习与管理学、电商背景相结合，兼具策略与商业视角。",
      },
    },
    {
      id: "experience",
      title: {
        en: "Work Experience",
        zh: "工作经历",
      },
      eyebrow: {
        en: "Professional practice",
        zh: "职业实践",
      },
      summary: {
        en: "Experience in social media operations, PR campaigns, B2B digital marketing, and bilingual copywriting.",
        zh: "覆盖社交媒体运营、公关活动、B2B 数字营销与双语文案等实践方向。",
      },
    },
    {
      id: "projects",
      title: {
        en: "Selected Projects",
        zh: "精选项目",
      },
      eyebrow: {
        en: "Campaigns and proposals",
        zh: "活动与方案",
      },
      summary: {
        en: "Selected campaign execution and strategic communication proposal work.",
        zh: "精选整合营销活动执行与战略传播方案项目。",
      },
    },
    {
      id: "skills",
      title: {
        en: "Skills",
        zh: "专业技能",
      },
      eyebrow: {
        en: "Tools and strengths",
        zh: "工具与能力",
      },
      summary: {
        en: "Content strategy, analytics, platform operations, design tools, and bilingual communication.",
        zh: "内容策略、数据分析、平台运营、设计工具与双语沟通能力。",
      },
    },
    {
      id: "contact",
      title: {
        en: "Contact",
        zh: "联系方式",
      },
      eyebrow: {
        en: "Let's connect",
        zh: "欢迎联系",
      },
      summary: {
        en: "Email, phone, and LinkedIn details for opportunities and conversations.",
        zh: "通过邮箱、电话或 LinkedIn 交流相关机会。",
      },
    },
  ] satisfies OverviewSection[],
  education: [
    {
      title: {
        en: "Master of Communication, Strategic Communication",
        zh: "传播学硕士，战略传播方向",
      },
      organization: {
        en: "Adelaide University",
        zh: "阿德莱德大学",
      },
      period: {
        en: "Mar 2025 - Mar 2027",
        zh: "2025 年 3 月 - 2027 年 3 月",
      },
      location: {
        en: "Adelaide, Australia",
        zh: "澳大利亚阿德莱德",
      },
      details: {
        en: [
          "Strategic Communication",
          "Public Relations",
          "Social Media Management",
          "Digital Storytelling",
          "Global Workforce Management",
        ],
        zh: ["战略传播", "公共关系", "社交媒体管理", "数字叙事", "全球劳动力管理"],
      },
      logo: {
        src: "/logos/adelaide-university.jpg",
        fallback: "UA",
      },
    },
    {
      title: {
        en: "Bachelor of Management, E-Commerce",
        zh: "管理学学士，电子商务专业",
      },
      organization: {
        en: "Chengdu University of Information Technology",
        zh: "成都信息工程大学",
      },
      period: {
        en: "Sep 2018 - Jul 2022",
        zh: "2018 年 9 月 - 2022 年 7 月",
      },
      location: {
        en: "Chengdu, China",
        zh: "中国成都",
      },
      details: {
        en: [
          "Online Marketing",
          "Marketing",
          "Consumer Behaviour",
          "Python Programming",
          "Database Principles",
        ],
        zh: ["网络营销", "市场营销", "消费者行为学", "Python 程序设计", "数据库原理"],
      },
      logo: {
        src: "/logos/cuit.jpg",
        fallback: "CUIT",
      },
    },
  ] satisfies TimelineItem[],
  experience: [
    {
      title: {
        en: "Marketing & Operations Intern",
        zh: "市场与运营实习生",
      },
      organization: {
        en: "Kingway International Education & Migration Services",
        zh: "Kingway International Education & Migration Services",
      },
      period: {
        en: "Jun 2025 - Present",
        zh: "2025 年 6 月 - 至今",
      },
      location: {
        en: "Adelaide, Australia",
        zh: "澳大利亚阿德莱德",
      },
      details: {
        en: [
          "Managed the WeChat Official Account end-to-end, including topic ideation, content planning, Chinese copywriting, Canva visual design, and scheduling.",
          "Produced bilingual articles on migration services, study abroad opportunities, and industry updates.",
          "Planned, filmed, edited, and published short-form video content for WeChat Video Account.",
          "Wrote and updated English website copy for kingwayint.com.au.",
        ],
        zh: [
          "负责微信公众号全流程运营，包括选题构思、内容规划、中文文案撰写、Canva 视觉设计与排期发布。",
          "围绕移民服务、留学机会与行业动态撰写双语文章。",
          "策划、拍摄、剪辑并发布微信视频号短视频内容。",
          "撰写并更新 kingwayint.com.au 英文网站文案。",
        ],
      },
    },
    {
      title: {
        en: "Public Relations Intern",
        zh: "公共关系实习生",
      },
      organization: {
        en: "FleishmanHillard",
        zh: "福莱国际传播咨询（FleishmanHillard）",
      },
      period: {
        en: "Oct 2025 - Jan 2026",
        zh: "2025 年 10 月 - 2026 年 1 月",
      },
      location: {
        en: "Shanghai, China",
        zh: "中国上海",
      },
      details: {
        en: [
          "Supported luxury brand client Guerlain in the Chinese New Year “Winner Party” integrated marketing campaign.",
          "Covered project planning, KOL communication, media coordination, event execution, and on-site support.",
          "Campaign hashtag #娇兰你好事做尽# ranked No.1 on Weibo Hot Search.",
          "Conducted daily media monitoring and public opinion tracking across 30+ fashion, beauty, and lifestyle media outlets.",
          "Prepared competitor and media analysis reports.",
          "Assisted in drafting 8 press releases, KOL briefs, and event-related materials.",
          "Coordinated product sample delivery to 50+ media journalists and celebrity teams.",
          "Participated in two offline brand events.",
        ],
        zh: [
          "支持奢侈品牌客户娇兰春节“好运赢家派对”整合营销活动。",
          "参与项目规划、KOL 沟通、媒体协调、活动执行与现场支持。",
          "活动话题 #娇兰你好事做尽# 登上微博热搜榜第 1 位。",
          "每日追踪 30+ 时尚、美妆与生活方式媒体，进行媒体监测与舆情跟踪。",
          "整理竞品与媒体分析报告。",
          "协助撰写 8 篇新闻稿、KOL brief 与活动相关材料。",
          "协调向 50+ 媒体记者及明星团队寄送产品样品。",
          "参与两场线下品牌活动执行。",
        ],
      },
    },
    {
      title: {
        en: "Digital Marketing & Operations Assistant",
        zh: "数字营销与运营助理",
      },
      organization: {
        en: "Suzhou Kada Network Technology Co., Ltd.",
        zh: "苏州卡达网络科技有限公司",
      },
      period: {
        en: "Mar 2023 - Jul 2023",
        zh: "2023 年 3 月 - 2023 年 7 月",
      },
      location: {
        en: "Suzhou, China",
        zh: "中国苏州",
      },
      details: {
        en: [
          "Supported B2B SaaS client acquisition projects for overseas markets.",
          "Managed 5-8 Google Ads campaigns targeting European and North American markets.",
          "Optimised 500+ campaign keywords.",
          "Conducted A/B testing and copy iteration for B2B long-cycle customer journeys.",
          "Tested 20+ sets of ad creatives.",
          "Wrote 100+ bilingual B2B marketing copies.",
          "Produced weekly campaign performance reports using Google Analytics.",
        ],
        zh: [
          "支持面向海外市场的 B2B SaaS 客户获客项目。",
          "管理 5-8 组面向欧洲与北美市场的 Google Ads 广告活动。",
          "优化 500+ 个广告关键词。",
          "围绕 B2B 长周期客户旅程进行 A/B 测试与文案迭代。",
          "测试 20+ 组广告创意素材。",
          "撰写 100+ 条双语 B2B 营销文案。",
          "使用 Google Analytics 制作每周广告效果报告。",
        ],
      },
    },
    {
      title: {
        en: "New Media Operations Assistant",
        zh: "新媒体运营助理",
      },
      organization: {
        en: "Shanghai Yikuaiyan Enterprise Management Partnership",
        zh: "上海一块研企业管理合伙企业",
      },
      period: {
        en: "Jul 2022 - Nov 2022",
        zh: "2022 年 7 月 - 2022 年 11 月",
      },
      location: {
        en: "Suzhou, China",
        zh: "中国苏州",
      },
      details: {
        en: [
          "Produced 30+ original WeChat articles about study tour routes, camp programmes, and parent-child education.",
          "Contributed to RedNote/Xiaohongshu account operations.",
          "Published original posts about study tour experiences and student activity content.",
          "Tracked WeChat and RedNote backend analytics.",
          "Supported student recruitment campaigns through online warm-up topics and interactive activities.",
        ],
        zh: [
          "产出 30+ 篇关于研学路线、营地项目与亲子教育的原创微信文章。",
          "参与小红书账号运营。",
          "发布研学体验与学生活动相关原创内容。",
          "跟踪微信公众号与小红书后台数据。",
          "通过线上预热话题与互动活动支持招生推广。",
        ],
      },
    },
  ] satisfies TimelineItem[],
  projects: [
    {
      title: {
        en: "Guerlain Chinese New Year “Winner Party” Integrated Marketing Campaign",
        zh: "娇兰新年「好事赢家派对」整合传播项目",
      },
      description: {
        en: "Luxury brand campaign execution supporting storytelling, media coordination, KOL communication, and audience engagement.",
        zh: "奢侈品牌整合营销活动执行项目，支持品牌叙事、媒体协调、KOL 沟通与用户互动。",
      },
      highlights: {
        en: [
          "Participated in full-cycle campaign execution.",
          "Supported project planning, media coordination, KOL communication, material management, and cross-functional collaboration.",
          "Supported the campaign hashtag #娇兰你好事做尽#, which ranked No.1 on Weibo Hot Search.",
          "Contributed to luxury brand storytelling and audience engagement strategies.",
        ],
        zh: [
          "参与活动全周期执行。",
          "支持项目规划、媒体协调、KOL 沟通、物料管理与跨团队协作。",
          "支持活动话题 #娇兰你好事做尽#，该话题登上微博热搜榜第 1 位。",
          "参与奢侈品牌叙事与受众互动策略落地。",
        ],
      },
      websiteUrl: "https://www.onsiteclub.com/case/Guerlain-Annual-Party-Shanghai-2026-1-18",
    },
    {
      title: {
        en: "City of Adelaide Strategic Narrative Proposal",
        zh: "阿德莱德城市战略叙事传播方案",
      },
      description: {
        en: "Strategic communication proposal connected to Adelaide’s World Heritage application.",
        zh: "围绕阿德莱德世界遗产申请主题开展的战略传播方案。",
      },
      highlights: {
        en: [
          "Developed a strategic communication proposal around Adelaide’s World Heritage application.",
          "Completed target audience analysis.",
          "Designed communication pathways.",
          "Created implementation planning ideas.",
        ],
        zh: [
          "围绕阿德莱德世界遗产申请制定战略传播方案。",
          "完成目标受众分析。",
          "设计传播路径。",
          "提出执行规划思路。",
        ],
      },
      pdfUrl: "/projects/city-of-adelaide-strategic-narrative-proposal.pdf",
    },
  ] satisfies Project[],
  skillGroups: [
    {
      title: {
        en: "Data Analysis",
        zh: "数据分析",
      },
      skills: {
        en: ["SQL", "Python", "Google Analytics", "Excel"],
        zh: ["SQL", "Python", "Google Analytics", "Excel"],
      },
    },
    {
      title: {
        en: "Marketing & Planning",
        zh: "市场与策划",
      },
      skills: {
        en: [
          "Content Planning",
          "Content Strategy",
          "Bilingual Copywriting",
          "Short-form Video Production",
          "Marketing Campaign Planning",
          "Event Coordination",
          "Media Monitoring",
          "Competitor Analysis",
        ],
        zh: [
          "内容策划",
          "内容策略",
          "双语文案",
          "短视频制作",
          "营销活动策划",
          "活动协调",
          "媒体监测",
          "竞品分析",
        ],
      },
    },
    {
      title: {
        en: "Digital Marketing",
        zh: "数字营销",
      },
      skills: {
        en: ["Google Ads", "SEO/SEM", "Lead Conversion Tracking", "A/B Testing"],
        zh: ["Google Ads", "SEO/SEM", "线索转化追踪", "A/B 测试"],
      },
    },
    {
      title: {
        en: "Design Tools",
        zh: "设计工具",
      },
      skills: {
        en: ["Canva", "CapCut", "Photoshop", "Xiumi", "Microsoft Office"],
        zh: ["Canva", "剪映 / CapCut", "Photoshop", "秀米", "Microsoft Office"],
      },
    },
    {
      title: {
        en: "Social Media Platforms",
        zh: "社交媒体平台",
      },
      skills: {
        en: [
          "WeChat Official Account",
          "WeChat Video Account",
          "RedNote/Xiaohongshu",
          "Weibo",
          "Instagram",
          "TikTok",
        ],
        zh: ["微信公众号", "微信视频号", "小红书 / RedNote", "微博", "Instagram", "TikTok"],
      },
    },
    {
      title: {
        en: "Languages",
        zh: "语言能力",
      },
      skills: {
        en: ["Mandarin Chinese native", "English professional working proficiency"],
        zh: ["普通话母语", "英语专业工作沟通能力"],
      },
    },
  ] satisfies SkillGroup[],
  contacts: [
    {
      label: {
        en: "Email",
        zh: "邮箱",
      },
      value: "AR1062515080@gmail.com",
      href: "mailto:AR1062515080@gmail.com",
    },
    {
      label: {
        en: "Phone CN",
        zh: "中国电话",
      },
      value: "+86 178 8369 9507",
      href: "tel:+8617883699507",
    },
    {
      label: {
        en: "Phone AU",
        zh: "澳洲电话",
      },
      value: "+61 435 666 358",
      href: "tel:+61435666358",
    },
    {
      label: {
        en: "LinkedIn",
        zh: "领英",
      },
      value: "linkedin.com/in/yanrui-li-331712253/",
      href: "https://linkedin.com/in/yanrui-li-331712253/",
    },
  ] satisfies ContactItem[],
};
