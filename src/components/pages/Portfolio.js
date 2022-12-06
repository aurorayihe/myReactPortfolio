import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../projects';

export default function Portfolilo() {
  return (
    <div>
      <h1>Previous Projects</h1>
      <ProjectCard projects={projects} />
    </div>
  );
}
