import Image from "../assets/social.jpg";
import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://awesome-portfolio.piyushmehta.com";
export const NAME = "Piyush Mehta";

export const SECTIONS = ["Home", "Experience", "Projects", "Skills"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "Know More";
export const MENU: MenuProps[] = [
  { key: 1, route: "home", name: SECTIONS[0] },
  { key: 2, route: "experience", name: SECTIONS[1] },
  { key: 3, route: "projects", name: SECTIONS[2] },
  { key: 4, route: "skills", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Hello, There";
export const GREETING_DESCRIPTION =
  "Busy Developing a side project which will eventually be never done ";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "Google",
    position: "Software Engineer",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Google's new search engine.",
  },
  {
    key: 2,
    company: "Facebook",
    position: "Software Engineer",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Facebook.",
  },
  {
    key: 3,
    company: "Microsoft",
    position: "Software Engineer",
    logo: "https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Microsoft's new search engine.",
  },
  {
    key: 4,
    company: "Netflix",
    position: "Software Engineer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Netflix.",
  },
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in India",
  "piyush mehta",
  "Awesome Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "Awesome Portfolio",
    projectDescription:
      "A portfolio of my work, where all the projects I've made are listed. The wesbite is made using latest technologies",
    projectImageLogo: `https://picsum.photos/id/1/600/314`,
    link: "https://piyushmehta.com",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "CSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "Sawan",
    projectDescription:
      "Online Immunity store serving PAN India. Serving 10000 requests per day organically. Customer base of 10k+ people",
    projectImageLogo: `https://picsum.photos/id/2/600/314`,
    link: "https://sawandryfruits.com",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "Kubernetes", "NodeJS"],
  },
  {
    id: 3,
    projectName: "Meaww Influencers Dashboard",
    projectDescription:
      "A complete Comprehensive dashboard built for the influencers. Used to track their growth and reach.",
    projectImageLogo: `https://picsum.photos/id/3/600/314`,
    link: "https://meaww.com",
    buttonText: "View Project",
    tech: ["React", "Redux", "SCSS", "Javascript"],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    skill: "Javascript",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 2,
    skill: "React",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 3,
    skill: "CSS",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 4,
    skill: "HTML",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 5,
    skill: "Java",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 6,
    skill: "Googling",
    level: Math.floor(Math.random() * 100) + 1,
  },
];
