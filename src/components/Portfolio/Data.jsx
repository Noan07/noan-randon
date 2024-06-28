import Work1 from "../../assets/projects/algoboto.png";
import Work2 from "../../assets/projects/starNative.png";
import Work4 from "../../assets/projects/douShouQi.png";
import Work5 from "../../assets/projects/kinect.png";
import Work3 from "../../assets/projects/leaphit.png";

import Detail1 from "../../assets/projects/algobotoscreen.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Algoboto",
    category: "Web App",
    github: null,
    gitlab: null,
    url: "codefirst.iut.uca.fr/documentation/AlgoboTeam/docusaurus/algoboto-documentation/",
    description: "Algoboto est une application mobile cross-platform développée en groupe de quatre étudiants à l'IUT Clermont-Auvergne, utilisant la technologie .NET MAUI.\n Ce projet scolaire innovant est destiné aux enfants et a pour objectif de leur apprendre la programmation de manière ludique et interactive. L'application permet de programmer un robot Lego en imbriquant des blocs et en déplaçant des instructions à la manière de Scratch.\n Les enfants peuvent ainsi créer des séquences de commandes pour animer le robot et réaliser diverses tâches.Pour développer Algoboto, nous avons adopté une méthodologie agile, en nous organisant en sprints selon le cadre Scrum.\n Cette approche nous a permis de travailler de manière collaborative et itérative, en améliorant continuellement le produit grâce aux retours et aux suggestions de chaque membre de l'équipe. Des démonstrations ont ensuite été réalisées dans une école primaire pour recueillir des avis et des points d'amélioration.",
    technologies: [
      { name: "MAUI", icon: "fas fa-laptop-code" },
      { name: "Yaml", icon: "fas fa-file-code" },
      { name: "Docusaurus", icon: "fas fa-book" }
    ],    
    duration: "Sep 2023 - Juin 2024",
    teamSize: 4,
    detail: Detail1,
    status: "Completed",
    challenges: "Faced issues with performance optimization.",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"]
  },
  {
    id: 2,
    image: Work2,
    title: "StarNative",
    category: "Mobile App",
    github: "github.com",
    gitlab: null,
    url: "test.fr",
    description: "Au cours de notre formation en BUT Informatique, nous avons développé une application mobile en React Native.\n Cette application permet aux utilisateurs de visualiser les personnages de Star Wars, de rechercher des personnages via une barre de recherche, et de consulter des descriptions détaillées de chaque personnage.\n Elle offre également la possibilité de sauvegarder des personnages dans une liste de favoris pour une consultation ultérieure. En outre, notre application propose un mode sombre ou clair, ainsi qu'un choix de langues entre le français et l'anglais.\n Pour en savoir plus sur les fonctionnalités de notre application, vous pouvez consulter la description détaillée dans la section dédiée.",
    technologies: [
      { name: "React Native", icon: "fab fa-react" }
    ],
    duration: "Février 2023 - Mars 2023",
    teamSize: 2,
    status: "Completed",
    challenges: "Faced issues with performance optimization.",
    images: null
  },
  {
    id: 3,
    image: Work3,
    title: "LeapHit",
    category: "SAE",
    github: null,
    gitlab: "gitlab.com",
    url: null,
    description: "Description of HTML project...",
    technologies: [
      { name: "HTML", icon: "uil uil-html5" },
      { name: "CSS", icon: "uil uil-css3-simple" },
      { name: "JavaScript", icon: "uil uil-java-script" }
    ],
    duration: "Jan 2020 - Dec 2020",
    teamSize: 5,
    status: "Completed",
    challenges: "Faced issues with performance optimization.",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"]
  },
  {
    id: 4,
    image: Work4,
    title: "DouShouQi",
    category: "Mobile App",
    github: null,
    gitlab: "gitlab.com",
    url: null,
    description: "Description of HTML project...",
    technologies: [
      { name: "HTML", icon: "uil uil-html5" },
      { name: "CSS", icon: "uil uil-css3-simple" },
      { name: "HTML", icon: "uil uil-html5" },
      { name: "CSS", icon: "uil uil-css3-simple" },
      { name: "JavaScript", icon: "uil uil-java-script" }
    ],
    duration: "Jan 2020 - Dec 2020",
    teamSize: 5,
    status: "Completed",
    challenges: "Faced issues with performance optimization.",
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"]
  },
  {
    id: 5,
    image: Work5,
    title: "Kinect",
    category: "Kinect",
    github: null,
    gitlab: "gitlab.com",
    url: null,
    description: "Description of HTML project...",
    technologies: [
      { name: "HTML", icon: "uil uil-html5" },
      { name: "CSS", icon: "uil uil-css3-simple" },
      { name: "JavaScript", icon: "uil uil-java-script" }
    ],
    duration: "Jan 2020 - Dec 2020",
    teamSize: 5,
    status: "Completed",
    challenges: "Faced issues with performance optimization.",
    images: null
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
    name: "web-app",
  },
  {
    name: "mobile-app",
  },
];
