import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience in different tech stacks, I have honed my skills in front-end technologies like React.js, styling technologies like Tailwind CSS, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hello! I'm Ashmit Shukla, currently pursuing my B.Tech in Computer Science and Engineering at Indian Institute of Information Technology (IIIT) Nagpur. With a strong academic background and hands-on experience in various projects, I thrive on solving complex problems and building innovative solutions.

During my academic journey, I have successfully developed and deployed multiple projects, across various domains. These experiences have honed my skills in project management, software development, problem-solving, teamwork, and delivering user-focused applications.
In addition to my project work, I am an active participant with top global ranks in major coding competitions. I enjoy tackling challenging problems and continuously improving my analytical abilities.

I am always eager to learn and grow, and I look forward to connecting with professionals and opportunities that align with my passion for technology and innovation.
Let's connect and collaborate to create impactful solutions and drive technological advancements together!`; 

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Development Engineer (SDE) Intern",
    company: "Mindtickle",
    description: `Worked on a variety of projects, enhancing both backend and frontend systems. Optimized the logging mechanism in the data platform automation codebase, reducing query failure debugging time by 50%. Built a real-time API comparison dashboard on Snowflake, which compares any two configurable APIs, increasing data accuracy by 30% and cutting comparison time by 40%. Engineered a Synthetic Monitoring governance dashboard using Airflow DAG on Metabase and Snowflake, providing actionable insights and improving data quality by 35%. Created a self-serve migration framework that facilitates the migration of historical data from Couchbase and TickleDB to Snowflake, capable of handling 10 million rows in just 30 minutes. Contributed to development of a full-stack tool for visualizing and managing star schema diagrams for 20+ domains in Snowflake. Currently, involved in migrating 80+ analytics pages from Spark to CubeJS, handling both frontend and backend tasks.`,
    technologies: ["Javascript", "React.js", "Snowflake", "Cube.js", "Node.js", "Express.js", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
