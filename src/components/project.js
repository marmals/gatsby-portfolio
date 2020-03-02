import React from "react"
import "../sass/components/project.scss"
import buttons from "../sass/components/buttons.module.scss"

const Project = ({project}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={project.img} alt="project overview" />
            <h3>{project.title}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{project.info}</p>
            <a href="#" className={buttons.standardButton}>View project</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;