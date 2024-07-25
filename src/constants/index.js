import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  pricewise,
  react,
  sass,
  summiz,
  tailwindcss,
  mysql,
  cinema,
  music,
  movieland,
  airline,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
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
    imageUrl: react,
    name: "React",
    type: "Frontend",
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
    imageUrl: mysql,
    name: "MySql",
    type: "DataBase",
  },
];
export const experiences = [
  {
    title: "CinemaPlex App",
    company_name: "College Project",
    icon: cinema,
    iconBg: "#FF7F7F",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining Desktop applications using C# and other related technologies.",
      "Implementing responsive design and ensuring cross-screen compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Airline Reservation System",
    company_name: "College Project",
    icon: airline,
    iconBg: "#707070",
    date: "Dec 2024 - Feb 2024",
    points: [
      "Developing and maintaining web applications using ASP.Net and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancing",
    icon: react,
    iconBg: "#ADD8E6",
    date: "Mar 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    link: "https://github.com/sahilshekh541",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sahil-shekh541",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "E-Commerce Web",
    description:
      "Developed a web application that allow users to buy their favorite items and helping users to find the best deals.",
    link: "https://github.com/sahilshekh541",
  },
  {
    iconUrl: movieland,
    theme: "btn-back-green",
    name: "Movie Land",
    description:
      "Created a Movie Land Web App using RESTFUL API where user can search movie, and get information of movie which they want.",
    link: "https://sahilshekh541.github.io/MovieLand/",
  },
  {
    iconUrl: music,
    theme: "btn-back-blue",
    name: "Music Player Web App",
    description:
      "Designed and built a web app for play music, Add to favorite list and play anytime.",
    link: "https://sahilshekh541.github.io/ArabicToneMusic/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Real Weather Web App",
    description:
      "Designed and built a web app for knowing weather using real API, this web app helps user to see real time weather.",
    link: "https://sahilshekh541.github.io/Real-Weather/",
  },
];
