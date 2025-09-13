export interface IContact {
  subtitle: string;
  title: string;
  description: string;
  contactInfo: {
    icon: string;
    label: string;
    link: string;
  }[];
  socialLinks: {
    icon: string;
    link: string;
  }[];
  formFields: {
    icon: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
  }[];
  buttonText: string;
}

const contactData: IContact = {
  subtitle: "Let’s connect",
  title: "Let’s Connect",
  description:
    "We welcome inquiries from investors, researchers, and organizations interested in AI safety. Our team will respond to serious inquiries within 48 hours.",
  contactInfo: [
    {
      icon: "/assets/imgs/icon/icon-17.webp",
      label: "contact@recursive-safeguarding.org",
      link: "mailto:contact@recursive-safeguarding.org",
    },
    // {
    //   icon: "/assets/imgs/icon/icon-18.webp",
    //   label: "+1 287-366-566",
    //   link: "tel:+1287366566",
    // },
  ],
  socialLinks: [
    { icon: "fa-facebook-f", link: "#" },
    { icon: "fa-twitter", link: "#" },
    { icon: "fa-linkedin-in", link: "#" },
  ],
  formFields: [
    {
      icon: "/assets/imgs/icon/icon-19.webp",
      label: "What’s your name?",
      name: "Name",
      placeholder: "Full name here",
      type: "text",
    },
    {
      icon: "/assets/imgs/icon/icon-20.webp",
      label: "What’s your e-mail?",
      name: "Email",
      placeholder: "Enter your mail here",
      type: "email",
    },
    {
      icon: "/assets/imgs/icon/icon-21.webp",
      label: "Have any message?",
      name: "Messages",
      placeholder: "Write your message here",
      type: "text",
    },
  ],
  buttonText: "Contact Us",
};

export default contactData;
