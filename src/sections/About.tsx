import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello, I am Aditya Maurya, a passionate B.Tech Computer Engineering student at Delhi Technological University, with a deep love for technology and problem-solving. With a focus on web development and programming, I enjoy crafting sleek, functional websites and writing optimized, efficient code that brings ideas to life. My experience spans across front-end and back-end development, enabling me to create full-stack solutions.
          </p>
          <p className="about-grid-info-text">
            Beyond academics, I continually explore new technologies and stay updated with the latest trends in software development. I am always excited to tackle challenging projects, innovate, and deliver user-centric solutions with a focus on performance and scalability.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies & languages I can work with:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">C</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">ReactJS</li>
            <li className="about-grid-info-list-item">NodeJS</li>
            <li className="about-grid-info-list-item">ExpressJS</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Clerk</li>
            <li className="about-grid-info-list-item">Stream</li>
            <li className="about-grid-info-list-item">Postman</li>
            <li className="about-grid-info-list-item">Git & Github</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/aditya.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
