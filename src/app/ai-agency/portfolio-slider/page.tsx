import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import WorkTwoSection from "@/components/AiAgency/WorkTwoSection";
import FooterSection from "@/components/AiAgency/FooterSection";
import TestimonialSlider from "@/components/AiAgency/TestimonialSection";
import Header from "@/components/AiAgency/common/Header";
import SmoothScroll from "@/components/AiAgency/Animation/SmoothScroll";

// all data 
import workTwoData from "@/constant/AiAgency/workTwo";
import testimonialData from "@/constant/AiAgency/testimonial";
import footerData from "@/constant/AiAgency/footer";

export const metadata:Metadata = {
  title: "Portfolio Slider || Averto - Creative Digital Agency NextJS Template",
  description:
    "Display your projects in an interactive and sleek slider format with the Averto Portfolio Slider template. Perfect for creative professionals who want a dynamic, responsive, and SEO-friendly presentation of their work.",
  keywords: [
    "Averto portfolio slider",
    "NextJS portfolio slider template",
    "creative portfolio slider",
    "responsive portfolio slider",
    "SEO optimized portfolio slider",
    "digital agency portfolio slider",
    "startup portfolio showcase",
    "interactive project slider",
    "professional portfolio slider",
    "modern portfolio presentation",
    "frontend developer portfolio",
    "creative work slider",
    "NextJS project slider",
    "slider based portfolio",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Portfolio Slider Page",
  },
};

const Home = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <SmoothScroll>
        <main>
          <Breadcrumb
            title="AGENCY"
            subTitle="Portfolio Slider"
            pageName="AGENCY PORTFOLIO"
          />
          <WorkTwoSection type={3} pageInnerSlider={true} data={workTwoData}/>
          <TestimonialSlider type="v2" data={testimonialData}/>
        </main>
        <FooterSection data={footerData}/>
      </SmoothScroll>
    </div>
  );
};
export default Home;
