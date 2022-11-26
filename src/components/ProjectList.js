import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const projectsElements = projects.map((project)=>{
    // console.log(project)
    return <ProjectItem key={project.id} data={project} />
  })
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsElements}</div>
    </div>
  );
}

export default ProjectList;
