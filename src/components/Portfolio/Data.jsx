import Work1 from "../../assets/projects/algoboto.png";
import Work2 from "../../assets/projects/starNative.png";
import Work4 from "../../assets/projects/douShouQi.png";
import Work3 from "../../assets/projects/leaphit.png";
import Work5 from "../../assets/projects/lyros.png";
import Work6 from "../../assets/projects/blog.png";
import Work7 from "../../assets/projects/workdeck.png";

import Detail1 from "../../assets/projects/algobotoscreen.png";
import Detail2 from "../../assets/projects/starNativeScreenshot.png";
import Detail3 from "../../assets/projects/douShouQiScreenshot.png";
import Detail4 from "../../assets/projects/leaphitScreenshot.png";
import Detail5 from "../../assets/projects/leaphitScreenshot.png";
import Detail6 from "../../assets/projects/leaphitScreenshot.png";
import Detail7 from "../../assets/projects/leaphitScreenshot.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Algoboto",
    category: ["SAE", "Mobile App"],
    github: null,
    gitlab: "gitlab.com/algoboto/algoboto-documentation",
    url: null,
    description: "description1",
    technologies: [
      { name: "MAUI", icon: "fas fa-laptop-code" },
      { name: "Yaml", icon: "fas fa-file-code" },
      { name: "Docusaurus", icon: "fas fa-book" },
    ],
    duration: "duration1",
    personalProject: false,
    teamSize: 4,
    detail: Detail1,
    status: "Completed",
    images: null,
  },
  {
    id: 2,
    image: Work2,
    title: "StarNative",
    category: ["Mobile App"],
    github: null,
    gitlab: "gitlab.com/Noan07/React_Native-StarWars",
    url: null,
    description: "description2",
    technologies: [{ name: "React Native", icon: "fab fa-react" }],
    duration: "duration2",
    personalProject: false,
    teamSize: 2,
    detail: Detail2,
    status: "Completed",
    images: null,
  },
  {
    id: 3,
    image: Work3,
    title: "LeapHit",
    category: ["SAE"],
    github: null,
    gitlab: "gitlab.com/leaphit",
    url: null,
    description: "description3",
    technologies: [
      { name: "C#", icon: "fab fa-cuttlefish" },
      { name: "Monogame", icon: "fas fa-gamepad" },
      { name: "MariaDB", icon: "fas fa-database" },
    ],
    duration: "duration3",
    personalProject: false,
    teamSize: 4,
    status: "Completed",
    images: null,
    detail: Detail4,
  },
  {
    id: 4,
    image: Work4,
    title: "DouShouQi",
    category: ["Mobile App"],
    github: null,
    gitlab: "gitlab.com/Noan07/doushouqi",
    url: null,
    description: "description4",
    technologies: [{ name: "Swift", icon: "fab fa-swift" }],
    duration: "duration4",
    personalProject: false,
    teamSize: 2,
    status: "Completed",
    images: null,
    detail: Detail3,
  },
  {
    id: 5,
    image: Work5,
    title: "Lyros",
    category: ["Mobile App"],
    github: null,
    gitlab: "gitlab.com/Noan07/doushouqi",
    url: null,
    description: "description5",
    technologies: [
      { name: "FastAPI", icon: "fab fa-python" },
      { name: "React Native", icon: "fab fa-react" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
    duration: "duration5",
    personalProject: false,
    teamSize: 4,
    status: "Completed",
    images: null,
    detail: Detail5,
  },
  {
    id: 6,
    image: Work6,
    title: "Blog",
    category: ["Web App"],
    github: null,
    gitlab: null,
    url: "noandev-blog.vercel.app/blog/short-ytb/",
    description: "description5",
    technologies: [{ name: "Astro", icon: "fab fa-react" }],
    duration: "duration6",
    personalProject: true,
    teamSize: null,
    status: "Completed",
    images: null,
    detail: Detail5,
  },
  {
    id: 7,
    image: Work7,
    title: "WorkDeck",
    category: ["Mobile App", "IoT"],
    github: null,
    gitlab: null,
    url: null,
    description: "description7",
    technologies: [
      { name: "C (Arduino)", icon: "fab fa-c" },
      { name: "React (Backend)", icon: "fab fa-react" },
      { name: "React Native", icon: "fab fa-react" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
    duration: "duration7",
    personalProject: true,
    teamSize: 2,
    status: "On going",
    images: null,
    detail: Detail7,
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "sae",
  },
  {
    name: "mobile-app",
  },
  {
    name: "iot",
  },
  {
    name: "web-app",
  },
];

// {
//   id: 5,
//   image: Work5,
//   title: "Kinect",
//   category: "Kinect",
//   github: null,
//   gitlab: "gitlab.com/Noan07/Kinect",
//   url: null,
//   description: "Description of HTML project...",
//   technologies: [
//     { name: "C#", icon: "fab fa-cuttlefish" },
//   ],
//   duration: "Janvier 2024 - Février 2024",
//   teamSize: 1,
//   status: "Completed",
//   challenges: "Faced issues with performance optimization.",
//   images: null
// },
