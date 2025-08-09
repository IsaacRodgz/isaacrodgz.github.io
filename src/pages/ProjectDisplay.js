import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="description">
        <p>{project.description}</p>
      </div>
      <img src={project.image} alt={`Screenshot of ${project.name}`} />
      <h2>Skills</h2>
      <p className="skills">{project.skills}</p>
      <Link href={project.url}>
        <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
