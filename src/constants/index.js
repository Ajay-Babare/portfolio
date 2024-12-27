import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Full Stack Java Developer with 4+ years of experience in building dynamic, scalable web applications. I have strong expertise in front-end technologies, including React and Angular and back-end development using Spring Boot and Microservices architecture. Additionally, I am skilled in DevOps practices with hands-on experience in deploying applications on the AWS platform, ensuring efficient, reliable and scalable solutions.`

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Java Developer with over 4 years of experience in building efficient and scalable web applications. I specialize in front-end technologies like React and Angular and back-end development using Spring Boot, MySQL and Microservices architecture. My experience extends to DevOps practices, deploying applications on the AWS platform and utilizing Docker and Kubernetes to ensure smooth, automated deployment pipelines.
My journey in development began with a keen interest in creating seamless user experiences and building powerful, scalable solutions. Over the years, I've cultivated a deep understanding of both client-side and server-side development, enabling me to deliver end-to-end solutions that meet business requirements. I thrive in collaborative environments, always eager to solve complex problems and create high-quality, maintainable code.
Outside of development, I am passionate about continuously learning new technologies, contributing to the tech community, and applying best practices to improve development workflows.`;

export const EXPERIENCES = [

  {
    year: "Jan 23 - Present",
    role: "Full Stack Java Developer",
    company: "Physics Wallah",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend developers to integrate frontend components with React.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Spring Boot", "React.js", "mySQL","Microservices","AWS"],
  },
  {
    year: "Jun 22 - Dec 22",
    role: "Software Engineer",
    company: "Cravita Technologies",
    description: `Developed and maintained web applications using JavaScript, Angular, and Spring Boot. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "Angular", "Spring Boot"],
  },
  {
    year: "Jun 19 - Aug 21",
    role: "Service Engineer",
    company: "VE Commercial Vehicles",
    description: `Utilized fleet management software to monitor and optimize the maintenance schedules of commercial clients.`,
    technologies: ["SAP", "CRM", "Telematics"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      `A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.`,
    technologies: ["HTML", "CSS", "Angular", "Spring Boot", "Microservices"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      `An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.`,
    technologies: ["HTML", "CSS", "React", "Spring Boot", "Microservices"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      `A personal portfolio website showcasing projects, skills, and contact information.`,
    technologies: ["HTML", "CSS", "React", "TailWind CSS"],
  },
  {
    title: "Student System Platform",
    image: project4,
    description:
    `A platform for managing student data in educational institutions, built with React and Spring Boot for scalability and robustness.`,
    technologies: ["HTML", "CSS", "React", "Spring Boot", "mySQL"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "+91 8381092080",
  email: "ajaybabare97@gmail.com",
};
