export interface ServiceSectionData {
  subtitle: string;
  title: string;
  exploreLink: string;
}

export interface Service {
  id: string;
  title: string;
  projectsAvailable: number;
  projectsDone: number;
  image: string;
  description: string;
  detailLink: string;
}

export const serviceSectionData: ServiceSectionData = {
  subtitle: "",
  title: "How We Keep AI Agents On Plan:",
  exploreLink: "",
};

export const servicesData: Service[] = [
  {
    id: "Capture Intent",
    title: "Capture Intent",
    projectsAvailable: 34,
    projectsDone: 20,
    image: "/assets/imgs/gallery/image-17.webp",
    description:
      "We wrap the agent loop and record prompt, context, tool calls, and constraints through an MCP or CLI wrapper with privacy filters to form a clean snapshot of what you meant.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "chatbots",
    title: "Synthesize Plan in ML3",
    projectsAvailable: 41,
    projectsDone: 28,
    image: "/assets/imgs/gallery/image-47.webp",
    description:
      "We turn raw agent output into candidate plans in ML3, a small verifiable meta language. A GFlowNet proposes options at multiple abstraction levels and you select the best fit.",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "predictive-modeling",
    title: "Verify and Guard",
    projectsAvailable: 28,
    projectsDone: 18,
    image: "/assets/imgs/gallery/image-46.webp",
    description:
      "We simulate plans, run policy and static checks, explore counterfactuals, then compile approved plans into guardrails that intercept risky actions and enforce scope and resource limits",
    detailLink: "/ai-agency/service-details",
  },
  {
    id: "ux-ui",
    title: "Execute and Learn",
    projectsAvailable: 69,
    projectsDone: 39,
    image: "/assets/imgs/gallery/image-45.webp",
    description:
      "We execute under supervision with stepwise commits, snapshots, and rollback. You steer at checkpoints while the system learns a private preference profile and keeps a tamper-evident audit trail.",
    detailLink: "/ai-agency/service-details",
  },
];
