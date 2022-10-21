import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData, projectsNav } from "./data";
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleCLick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            onClick={(e) => {
              handleCLick(e, index);
            }}
            className={`${active === index ? "active-work" : ""} work__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <Project item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
