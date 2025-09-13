export interface TeamSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export const teamSectionContent: TeamSectionContent = {
  subtitle: "TEAM MEMBERS",
  title: "The Team Behind the Mission",
  completedProjects: "50+",
  projectsText: "Completed Projects",
  exploreLink: "/ai-agency/team",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Younesse Kaddar",
    position: "Director of Recursive Safeguarding Ltd",
    image: "/assets/imgs/team/team-10.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Rob Cornish",
    position: "Cofounder and Director of Quro Medical",
    image: "/assets/imgs/team/team-11.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Pedro Amorim",
    position: "Faculty at Bath Univ",
    image: "/assets/imgs/team/team-12.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Nikolaj Jensen",
    position: "Oxford Univ PhD student in AI and theory",
    image: "/assets/imgs/team/team-13.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
   {
    name: "Mohammed Mahfoud",
    position: "Led Exa-scale Safeguards Research at Anthropic",
    image: "/assets/imgs/team/team-10.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Paolo Perrone",
    position: "Oxford Univ postdoc",
    image: "/assets/imgs/team/team-11.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
 
   {
    name: "Sam Staton",
    position: "Oxford Univ Professor",
    image: "/assets/imgs/team/team-10.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
 {
    name: "Ali zein",
    position: "  Tech and start-up background (Munich, Oxford, Cambridge)",
    image: "/assets/imgs/team/team-10.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jacek Karwowski",
    position: "Oxford Univ PhD student in AI and theory",
    image: "/assets/imgs/team/team-11.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  // {
  //   name: "Jordan Williams",
  //   position: "AI Ethics Officer",
  //   image: "/assets/imgs/team/team-12.webp",
  //   socials: {
  //     instagram: "#",
  //     twitter: "#",
  //     facebook: "#",
  //     linkedin: "#",
  //   },
  // },
  // {
  //   name: "Ethan Brooklyn",
  //   position: "AI Research Lead",
  //   image: "/assets/imgs/team/team-13.webp",
  //   socials: {
  //     instagram: "#",
  //     twitter: "#",
  //     facebook: "#",
  //     linkedin: "#",
  //   },
  // },
];
