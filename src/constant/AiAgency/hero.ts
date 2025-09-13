export interface IBrand {
  image: string;
}

export interface HeroData {
  bgImage: string;
  shape1: string;
  shape2: string;
  titleSpanOne: string;
  titleText: string;
  titleSpanTwo: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  brandTitle: string;
  brands: IBrand[];
}

// Make AI agents steerable and aligned

const heroData: HeroData = {
    bgImage: "/assets/imgs/shape/shape-22.webp",
    shape1: "/assets/imgs/shape/shape-20.webp",
    shape2: "/assets/imgs/shape/shape-21.webp",
    titleSpanOne: "Make ",
    titleText: "AI agents ",
    titleSpanTwo: "steerable and aligned",
    subtitle: "We align foundation AI models with human intent through steerable, verifiable world models for safe, trustworthy deployment.",
    primaryBtnText: "Get Started",
    primaryBtnLink: "/ai-agency/contact",
    secondaryBtnText: "Contact Us",
    secondaryBtnLink: "/ai-agency/contact",
    brandTitle: "300+ Trusted Clients Over Worldwide",
    brands: [
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
      { image: "/assets/imgs/brand/brand-10.webp" },
      { image: "/assets/imgs/brand/brand-11.webp" },
      { image: "/assets/imgs/brand/brand-12.webp" },
      { image: "/assets/imgs/brand/brand-13.webp" },
      { image: "/assets/imgs/brand/brand-14.webp" },
    ],
  };  
  
  export default heroData;