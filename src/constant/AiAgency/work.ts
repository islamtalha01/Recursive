export interface WorkSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface PortfolioItem {
  title: string;
  tags: string[];
  image: string;
  link: string;
}

export const workSectionContent: WorkSectionContent = {
  subtitle: "OUR PORTFOLIO",
  title: "Related Research Articles & Blogs:",
  completedProjects: "150+",
  projectsText: "Completed Projects",
  exploreLink: "/portfolio",
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Amortizing intractable inference in large language models",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-7.webp",
    link: "https://arxiv.org/abs/2310.04363",
  },
  {
    title: "Safeguarded AI: constructing guaranteed safety",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-20.webp",
    link: "https://www.aria.org.uk/media/3nhijno4/aria-safeguarded-ai-programme-thesis-v1.pdf",
  },
  {
    title: "AI “safety” vs “control” vs “alignment”",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-20.webp",
    link: "https://ai-alignment.com/ai-safety-vs-control-vs-alignment-2a4b42a863cc",
  },
  {
    title: "Jagged intelligence",
    tags: ["Business", "Assistant"],
    image: "/assets/imgs/project/project-20.webp",
    link: "https://naveegator.in/2025/07/31/jagged-intelligence/",
  },
  // {
  //   title: "Synthesized Solutions",
  //   tags: ["Business", "Assistant"],
  //   image: "/assets/imgs/project/project-21.webp",
  //   link: "/ai-agency/portfolio-details",
  // },
  // {
  //   title: "NovaMind Studio",
  //   tags: ["Business", "Assistant"],
  //   image: "/assets/imgs/project/project-22.webp",
  //   link: "/ai-agency/portfolio-details",
  // },
  // {
  //   title: "NexGen Chatbot",
  //   tags: ["Business", "Assistant"],
  //   image: "/assets/imgs/project/project-7.webp",
  //   link: "/ai-agency/portfolio-details",
  // },

  // {
  //   title: "Synthesized Solutions",
  //   tags: ["Business", "Assistant"],
  //   image: "/assets/imgs/project/project-21.webp",
  //   link: "/ai-agency/portfolio-details",
  // },
  
];