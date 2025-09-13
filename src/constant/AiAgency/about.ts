export interface AboutData {
  subtitle: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aboutLink: string;
  buttonText: string;
}
const aboutData = {
  subtitle: "About Us",
  title: "We're developing technology to prevent AI agents from drifting off-course during critical tasks.",
  paragraphs: [
   
    "More precisely, our mission is to keep long‑horizon AI on plan, by aligning foundation AI models/AI agents with human intent through steerable, verifiable world models for safe, trustworthy deployment.",
     "AI agents are being deployed everywhere (not just in software engineering, also critical domains like finance, law, etc)",
  ],
  image: "/assets/imgs/shape/shape-23.webp",
  imageAlt: "About Us",
  aboutLink: "/ai-agency/about",
  buttonText: "About Us",
};

export default aboutData;
