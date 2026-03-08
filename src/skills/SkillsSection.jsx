import React from "react";
import {
  SiReact,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

import { FaJava, FaDatabase } from "react-icons/fa";

import "./SkillsSection.css";

export default function SkillsSection() {
  const skills = [
    { Icon: SiReact, className: "react" },
    { Icon: SiJavascript, className: "js" },
    { Icon: FaJava, className: "java" },
    { Icon: SiCplusplus, className: "cpp" },
    { Icon: SiNodedotjs, className: "node" },
    { Icon: SiExpress, className: "express" },
    { Icon: FaDatabase, className: "sql" },
    { Icon: SiMysql, className: "mysql" },
    { Icon: SiMongodb, className: "mongo" },
    { Icon: SiGit, className: "git" },
    { Icon: SiGithub, className: "github" },
    { Icon: SiPostman, className: "postman" },
    { Icon: SiFigma, className: "figma" },
  ];

  return (
    <section className="skills-section">
      <p className="skills-eyebrow">MY SKILLS</p>

      <h2 className="skills-title">
        The Secret <span>Sauce</span>
      </h2>

      <div className="skills-grid">
        {skills.map(({ Icon, className }, index) => (
          <div key={index} className={`skill-tile ${className}`}>
            <Icon className="skill-icon" />
          </div>
        ))}
      </div>
    </section>
  );
}
