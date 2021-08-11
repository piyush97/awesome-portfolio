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

export const EXPERIENCE: {
  key: number;
  company: string;
  position: string;
  logo: string;
  start: string;
  end: string;
  description: string;
}[] = [
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
    logo: "https://s-media-cache-ak0.pinimg.com/originals/a4/a5/c5/a4a5c5b8a8e9f8a7a8a8a8a8a8a8a8a.jpg",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Facebook.",
  },
  {
    key: 3,
    company: "Microsoft",
    position: "Software Engineer",
    logo: "https://www.microsoft.com/en-us/media/images/logos/microsoft_logo.png",
    start: "2015-01-01",
    end: "2016-01-01",
    description: "I worked on the frontend of Microsoft's new search engine.",
  },
];
