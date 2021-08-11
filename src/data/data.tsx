export const NAME = "Piyush Mehta";

export const MENU: {
  key: number;
  route: string;
  name: string;
}[] = [
  { key: 1, route: "/", name: "Home" },
  { key: 2, route: "#experience", name: "Experience" },
  { key: 3, route: "#projects", name: "Projects" },
];

export const GREETING_TEXT = "Hello, There";
export const GREETING_DESCRIPTION =
  "Busy Developing a side project which will eventually be never done ";

export type TimelineProps = {
  key: number;
  company: string;
  position: string;
  logo: string;
  start: string;
  end: string;
  description: string;
};
type ImageType = {
  src: string;
  width: string;
  height: string;
};
export type SEOProps = {
  lang: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  image: ImageType;
};
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
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in India",
  "piyush mehta",
  "Awesome Portfolio",
];
export const IMAGE: ImageType = {
  src: "https://picsum.photos/600/314",
  height: "600",
  width: "314",
};
