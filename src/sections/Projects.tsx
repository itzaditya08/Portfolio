import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "StudyNotion",
      projectLink: "#",
      projectDescription:
        "StudyNotion is a full-stack MERN application that empowers students and educators with personalized learning resources. Built using MongoDB, Express.js, React, and Node.js. With a robust architecture, StudyNotion ensures engaging and accessible learning for all, fostering a community of lifelong learners dedicated to academic success.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "MongoDB",
        "Node.js",
        "Router",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/StudyNotion-EdTech-Platform/tree/my-studynotion-branch",
        externalLink: "#",
      },
    },
    {
      image: "/project2.png",
      projectName: "NexTalk",
      projectLink: "https://nextalk-aditya-m.vercel.app/",
      projectDescription:
        "NexTalk is a sleek video calling app built with Next.js and Tailwind CSS, offering high-quality video calls powered by Stream Video Call Service. With secure authentication via Clerk, it delivers seamless, real-time communication for personal and professional use.",
      projectTech: [
        "Next.js",
        "Stream",
        "Clerk",
        "Tailwind CSS",
        "ShadCN",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/NexTalk",
        externalLink: "https://nextalk-aditya-m.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "iXplore",
      projectLink: "https://ixplore-aditya-m.vercel.app/",
      projectDescription:
        "iXplore is an interactive webpage showcasing the iPhone 15 with dynamic animations and 3D modeling. Using GSAP for smooth visuals and Three.js for detailed 3D rendering, it offers an immersive experience, allowing users to explore the iPhone 15 in a visually captivating way.",
      projectTech: [
        "React",
        "React 3 Fiber",
        "GSAP",
        "Three.js",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/iXplore",
        externalLink: "https://ixplore-aditya-m.vercel.app/",
      },
    },
    {
      image: "/project4.png",
      projectName: "MetaOdyssey",
      projectLink: "https://metaodyssey-adi.vercel.app/",
      projectDescription:
        "MetaOdyssey is an immersive webpage built with Next.js and Framer Motion, offering dynamic animations and seamless navigation. Designed for fast performance and responsive across devices, it delivers an engaging and intuitive user experience with cutting-edge web technologies.",
      projectTech: [
        "React",
        "Next.js",
        "Framer",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/MetaOdyssey",
        externalLink: "https://metaodyssey-adi.vercel.app/",
      },
    },
    {
      image: "/project5.png",
      projectName: "KeyForge",
      projectLink: "https://keyforge-aditya-m.vercel.app/",
      projectDescription:
        "KeyForge is a secure password generator built using HTML, CSS, and JavaScript. It generates strong passwords containing a mix of uppercase letters, lowercase letters, numbers, and symbols to ensure robust security for users. KeyForge is designed to be user-friendly while providing top-tier password protection for all your accounts.",
      projectTech: [
        "HTML",
        "CSS",
        "JS",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/KeyForge",
        externalLink: "https://keyforge-aditya-m.vercel.app/",
      },
    },
    {
      image: "/project6.png",
      projectName: "WeatherWhimsy",
      projectLink: "https://weatherwhimsy-aditya-m.vercel.app/",
      projectDescription:
        "WeatherWhimsy is a web app that provides real-time weather updates for your current and searched locations. Built with HTML, CSS, and JavaScript, it uses API calls to deliver accurate weather data with a simple, user-friendly interface.",
      projectTech: [
        "HTML",
        "CSS",
        "JS",
        "API",
      ],
      projectExternalLinks: {
        github: "https://github.com/itzaditya08/WeatherWhimsy",
        externalLink: "https://weatherwhimsy-aditya-m.vercel.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <a href={projectLink}>
                    <h3 className="project-info-title">{projectName}</h3>  
                  </a>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
