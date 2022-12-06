import React from 'react';

export default function ProjectCard({ projects }) {
    return (
        <div>
            <ul>
                {projects.map((project) => (
                    <li key={project.title}>
                        <p>{project.title}</p>
                        <img src={project.imgUrl}></img>
                        <a href={project.githubLink}>
                            <button href={project.githubLink}>GitHub</button>
                        </a>
                        <a href={project.githubLink}>
                            <button href={project.githubLink}>GitHub</button>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};