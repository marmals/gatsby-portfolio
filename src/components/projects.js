import React, {useState} from "react"
import Project from "./project"
import image from "../images/data.png"

import projectsStyles from "../sass/components/projects.module.scss"

const Projects = () => {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "test1",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: image,
      demo: "#",
      code: "#",
      tech: [
        {name: "HTML & CSS"},
        {name: "Javascript"},
        {name: "Sass"},
      ]
    },
    {
      id: 2,
      title: "test2",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: image,
      demo: "#",
      code: "#",
      tech: [
        {name: "HTML & CSS"},
        {name: "Javascript"},
        {name: "Sass"},
      ]
    },
    {
      id: 3,
      title: "test3",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: image,
      demo: "#",
      code: "#",
      tech: [
        {name: "HTML & CSS"},
        {name: "Javascript"},
        {name: "Sass"},
      ]
    },
    {
      id: 3,
      title: "test3",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: image,
      demo: "#",
      code: "#",
      tech: [
        {name: "HTML & CSS"},
        {name: "Javascript"},
        {name: "Sass"},
      ]
    },
    {
      id: 3,
      title: "test3",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: image,
      demo: "#",
      code: "#",
      tech: [
        {name: "HTML & CSS"},
        {name: "Javascript"},
        {name: "Sass"},
      ]
    },
  ])

  const allProjects = projects.map((project)=>
    <li className={projectsStyles.project}><Project project={project}/></li>
  )

  return (
    <div className={projectsStyles.container}>
      <h1>Projects</h1>
      <ul className={projectsStyles.projects}>
        {allProjects}
      </ul>
    </div>
  );
};

export default Projects;