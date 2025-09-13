export interface SidebarMenu {
  label: string;
  href?: string;
  children?: SidebarMenu[];
}

export interface SidebarCTA {
  text: string;
  href: string;
}

export interface SidebarContactItem {
  text: string;
  href: string;
}

export interface SidebarContact {
  phone: SidebarContactItem;
  email: SidebarContactItem;
  address: string;
}

export interface SidebarSocial {
  label: string;
  href: string;
}

export interface SidebarData {
  logo: string;
  menus: SidebarMenu[];
  // closeIcon: string;
  // title: string;
  // description: string;
  // cta: SidebarCTA;
  // ctaIcon: string;
  // gallery: string[];
  // contact: SidebarContact;
  // social: SidebarSocial[];
  footerLogo: string;
}

const sidebar: SidebarData = {

  logo: "/assets/imgs/logo/logo.png",
  menus: [
    {
      label: "Home",
      // children: [
      //   { label: "Creative Agency", href: "/creative-agency" },
      //   { label: "Design Agency", href: "/design-agency" },
      //   { label: "Digital Agency", href: "/digital-agency" },
      //   { label: "AI Agency", href: "/ai-agency" },
      //   { label: "Marketing Agency", href: "/marketing-agency" },
      // ],
        href: "/" 
    },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    // {
    //   label: "Pages",
    //   children: [
    //     { label: "About Us", href: "/ai-agency/about" },
    //     {
    //       label: "Service",
    //       children: [
    //         { label: "Services", href: "/ai-agency/services" },
    //         { label: "Service Details", href: "/ai-agency/service-details" },
    //       ],
    //     },
    //     {
    //       label: "Portfolio Pages",
    //       children: [
    //         { label: "Portfolio", href: "/ai-agency/portfolio" },
    //         { label: "Portfolio 02", href: "/ai-agency/portfolio-02" },
    //         { label: "Portfolio 03", href: "/ai-agency/portfolio-03" },
    //         { label: "Portfolio Details", href: "/ai-agency/portfolio-details" },
    //       ],
    //     },
    //     { label: "Team", href: "/ai-agency/team" },
    //     {
    //       label: "Blog Pages",
    //       children: [
    //         { label: "Blog", href: "/ai-agency/blog" },
    //         { label: "Blog Grid", href: "/ai-agency/blog-grid" },
    //         { label: "Blog Details", href: "/ai-agency/blog-details" },
    //       ],
    //     },
    //     { label: "FAQ", href: "/ai-agency/faq" },
    //     { label: "Contact", href: "/ai-agency/contact" },
    //   ],
    // },
    // {
    //   label: "Portfolio",
    //   children: [
    //     { label: "Portfolio", href: "/ai-agency/portfolio" },
    //     { label: "Portfolio Details", href: "/ai-agency/portfolio-details" },
    //   ],
    // },
    // { label: "Contact Us", href: "/ai-agency/contact" },
  ],

  footerLogo: "/assets/imgs/logo/logo-6.png",
};

export default sidebar;
