import React from "react";

function ProjectItem({technologies, name, about}) {
  
  const technologiesElements = technologies.map((el,index)=>{
    
    return <span key={index}>{el}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElements}
      </div>
    </div>
  );
}

export default ProjectItem;
