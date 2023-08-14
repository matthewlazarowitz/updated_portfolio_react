import React from 'react';
import './Portfolio.css';

function Project({ title, description, image, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={image} alt={`Screenshot of ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
