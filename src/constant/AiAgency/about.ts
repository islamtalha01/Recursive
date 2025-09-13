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
  subtitle: "",
  title: "The AI Alignment Imperative",
  paragraphs: [
   
    "AI systems are becoming increasingly sophisticated and capable, taking on larger and more complex tasks across all aspects of human society.However, they operate with significant misalignment between their learned objectives and true human intent, making alignment the most critical challenge we face",
     "As AI systems take on complex roles, the gap between their learned objectives and human intent becomes increasingly risky. Current agents often misinterpret user world models and fail to capture nuanced goals, leading to decisions based on incomplete or incorrect assumptions about what humans actually want.",
  ],
  image: "/assets/imgs/shape/shape-23.webp",
  imageAlt: "About Us",
  aboutLink: "  /about",
  buttonText: "About Us",
};

export default aboutData;
