import { mpllc, empericgeeks, digimantra } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  bootstrap,
  three,
  jira,
  bitbucket,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  earthlink,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  //   {
  //     imageUrl: express,
  //     name: "Express",
  //     type: "Backend",
  //   },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: three,
    name: "Three",
    type: "Frontend",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: jira,
    name: "Jira",
    type: "Project Management",
  },
  {
    imageUrl: bitbucket,
    name: "Bitbucket",
    type: "Version Control",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  //   {
  //     imageUrl: nodejs,
  //     name: "Node.js",
  //     type: "Backend",
  //   },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "MERN Stack Intern",
    company_name: "Mobile Programming LLC",
    icon: mpllc,
    iconBg: "#a2d2ff",
    date: "Aug 2021 - Jan 2022",
    points: [
      "Using HTML5, CSS3, React JS and Bootstrap to build a single page web app that communicate with back-end via RESTful API.",
      "Using various properties, parameters in ES6 and performed UNIT testing with Swagger.",
      "Participating in daily SCRUM meetings to monitor project status.",
      "Training to learn React JS, Node JS, Mongo DB, SQL, mySQL, Java and Angular.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "Emperic Geeks",
    icon: empericgeeks,
    iconBg: "#fbc3bc",
    date: "Feb 2021 - Sep 2022",
    points: [
      "Developing e-commerce website using Next JS.",
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer ",
    company_name: "DigiMantra Labs",
    icon: digimantra,
    iconBg: "#b7e4c7",
    date: "Sep 2022 - Mar 2024",
    points: [
      "Developing and maintaining user-facing websites using React JS, Redux-Toolkit and GraphQL.",
      "Implementing responsive design to ensure cross-platform compatibility of webpages using Bootstrap, Styled-components and Tailwind.",
      "Troubleshooting, debugging, and implementing new features in alignment with project requirements.",
      "Resolving existing API issues and developing new APIs to improve functionality using Node.js.",
      "Providing ongoing maintenance support for existing projects after deployment.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: earthlink,
    theme: "btn-back-red",
    name: "Earthlink",
    description:
      "Spearheaded development efforts for various websites and modules at EarthLink, each serving distinct purposes. Implemented new features across EarthLink modules, contributing to the enhancement of user experience and functionality.",
    link: "https://www.earthlink.net/welcome/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Kidrovia",
    description:
      "Led the development of a dynamic e-commerce website using Next.js, enhancing the overall user experience and performance. Utilized Next.js to create a responsive and efficient frontend, ensuring a smooth and engaging shopping experience for users across devices.",
    link: "https://www.kidrovia.com/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Kwuery",
    description:
      "Created user login, dashboard, user profile along with CRUD operation using React.JS. Worked on functionalities like create/delete post, add/delete comments, like/unlike post, follow/unfollow users, play videos.",
  },
];
