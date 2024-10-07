import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "DTU(DCE)",
      role: "B.Tech in Computer Engineering",
      url: "https://dtu.ac.in/",
      start: "November 2022",
      end: "June 2026",
      shortDescription: [
        "Pursuing B.Tech in Computer Engineering at Delhi Technological University (DTU), one of India's premier institutes, I have consistently maintained a CGPA of 8.50 up to the 3rd semester.",
        "Studying at DTU has equipped me with a solid foundation in engineering principles and cutting-edge technologies, fueling my passion for web development and programming.",
        "Being part of a top-tier institution like Delhi Technological University has fostered my analytical thinking and problem-solving abilities, enabling me to excel in programming and build scalable, efficient solutions.",
      ],
    },
    {
      name: "GHPS",
      role: "Senior Secondary Education",
      url: "https://www.google.com/search?q=guru+harkrishan+public+school+karol+bagh&sca_esv=a5db118e05c2ad26&sxsrf=ADLYWIJkwCsA1SNU_HdSgDNdCrlWqgE5WQ%3A1728218215053&ei=Z4QCZ5r1ApKMseMPleO1gQM&gs_ssp=eJwNyEEOQDAQAMC4ikf0InGzVVT7BL_YtnQbgqxUPJ_LHKas2thK8v1zQGQobA2vMhCgMyForwa5SgvvpBc9KvzLuBENzk3MnAUhb5xuwkNc2e3Ji9vTee5iQ_51GOkDUiYekg&oq=Guru+Harkrishan&gs_lp=Egxnd3Mtd2l6LXNlcnAiD0d1cnUgSGFya3Jpc2hhbioCCAAyDhAuGIAEGMcBGI4FGK8BMgoQABiABBgUGIcCMgoQABiABBgUGIcCMg4QLhiABBjHARiOBRivATIOEC4YgAQYxwEYjgUYrwEyDhAuGIAEGMcBGI4FGK8BMg4QLhiABBjHARiOBRivATILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIdEC4YgAQYxwEYjgUYrwEYlwUY3AQY3gQY4ATYAQFIgSZQlwlY2R9wAXgBkAEAmAHfAaAB-hSqAQYwLjEyLjO4AQPIAQD4AQGYAhCgAo0YwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIcEC4YgAQYsAMYQxjHARjIAxiKBRiOBRivAdgBAcICFRAuGIAEGLADGEMYyAMYigUYCtgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEC4YgAQYQxiKBcICExAuGIAEGEMYxwEYigUYjgUYrwHCAg0QLhiABBixAxgUGIcCwgIKEAAYgAQYQxiKBcICDRAuGIAEGLEDGEMYigXCAgsQABiABBixAxiDAcICEBAuGIAEGEMYxwEYigUYrwHCAggQLhiABBixA8ICGRAuGIAEGEMYigUYlwUY3AQY3gQY3wTYAQHCAhEQLhiABBixAxjHARiOBRivAcICFBAuGIAEGLEDGIMBGMcBGI4FGK8BwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY4ATYAQHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgILEAAYgAQYkQIYigXCAhQQLhiABBiRAhjHARiKBRiOBRivAZgDAIgGAZAGFLoGBggBEAEYCJIHCDAuMTEuNC4xoAe6pAM&sclient=gws-wiz-serp",
      start: "2019",
      end: "2021",
      shortDescription: [
        "I completed my Senior Secondary Education from Guru Harkrishan Public School, securing 92.2% in my 12th class, ranking among the top students in my batch.",
        "As the Head Boy of my school, I demonstrated strong leadership and teamwork skills, actively contributing to various academic and extracurricular initiatives.",
      ],
    },
    {
      name: "GHPS",
      role: "Secondary Education",
      url: "https://www.google.com/search?q=guru+harkrishan+public+school+karol+bagh&sca_esv=a5db118e05c2ad26&sxsrf=ADLYWIJkwCsA1SNU_HdSgDNdCrlWqgE5WQ%3A1728218215053&ei=Z4QCZ5r1ApKMseMPleO1gQM&gs_ssp=eJwNyEEOQDAQAMC4ikf0InGzVVT7BL_YtnQbgqxUPJ_LHKas2thK8v1zQGQobA2vMhCgMyForwa5SgvvpBc9KvzLuBENzk3MnAUhb5xuwkNc2e3Ji9vTee5iQ_51GOkDUiYekg&oq=Guru+Harkrishan&gs_lp=Egxnd3Mtd2l6LXNlcnAiD0d1cnUgSGFya3Jpc2hhbioCCAAyDhAuGIAEGMcBGI4FGK8BMgoQABiABBgUGIcCMgoQABiABBgUGIcCMg4QLhiABBjHARiOBRivATIOEC4YgAQYxwEYjgUYrwEyDhAuGIAEGMcBGI4FGK8BMg4QLhiABBjHARiOBRivATILEC4YgAQYxwEYrwEyBRAAGIAEMgUQABiABDIdEC4YgAQYxwEYjgUYrwEYlwUY3AQY3gQY4ATYAQFIgSZQlwlY2R9wAXgBkAEAmAHfAaAB-hSqAQYwLjEyLjO4AQPIAQD4AQGYAhCgAo0YwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIcEC4YgAQYsAMYQxjHARjIAxiKBRiOBRivAdgBAcICFRAuGIAEGLADGEMYyAMYigUYCtgBAcICChAjGIAEGCcYigXCAgQQIxgnwgIKEC4YgAQYQxiKBcICExAuGIAEGEMYxwEYigUYjgUYrwHCAg0QLhiABBixAxgUGIcCwgIKEAAYgAQYQxiKBcICDRAuGIAEGLEDGEMYigXCAgsQABiABBixAxiDAcICEBAuGIAEGEMYxwEYigUYrwHCAggQLhiABBixA8ICGRAuGIAEGEMYigUYlwUY3AQY3gQY3wTYAQHCAhEQLhiABBixAxjHARiOBRivAcICFBAuGIAEGLEDGIMBGMcBGI4FGK8BwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY4ATYAQHCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBwgILEAAYgAQYkQIYigXCAhQQLhiABBiRAhjHARiKBRiOBRivAZgDAIgGAZAGFLoGBggBEAEYCJIHCDAuMTEuNC4xoAe6pAM&sclient=gws-wiz-serp",
      start: "2009",
      end: "2019",
      shortDescription: [
        "I completed my Secondary Education from Guru Harkrishan Public School, achieving an impressive 93.33%, in 10th Standard, further solidifying my academic excellence.",
        "This strong foundation in my schooling years has fueled my passion for learning and laid the groundwork for my journey into engineering and technology.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Studied</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
