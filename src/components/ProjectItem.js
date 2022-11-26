import React from "react";

function ProjectItem({data}) {
  const technologies = data.technologies.map((el,index)=>{
    
    return <span key={index}>{el}</span>
  })
  return (
    <div className="project-item">
      <h3>{data.name}</h3>
      <p>{data.about}</p>
      <div className="technologies">
        {technologies}
      </div>
    </div>
  );
}

export default ProjectItem;
