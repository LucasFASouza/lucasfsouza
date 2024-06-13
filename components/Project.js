import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="z-10 w-64 text-stone-300 rounded-xl overflow-hidden md:w-96 m-4 bg-accent-dark bg-opacity-85 backdrop-blur hover:shadow-md shadow-neutral-900">
      <div className="flex flex-col">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-accent-pink font-bold">
            {project.type}
          </div>
          <a
            href={project.url}
            className="block mt-1 text-lg leading-tight font-medium text-stone-300"
          >
            <span className="underline-transition">{project.title}</span>
          </a>
          <p className="mt-2 text-gray-400">{project["short-description"]}</p>
          {project["github-repo"] && (
            <div className="mt-4">
              <a
                href={project["github-repo"]}
                className="text-accent-pink underline-transition"
              >
                View on GitHub
              </a>
            </div>
          )}

          <div className="mt-4 flex flex-wrap">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="m-1 bg-accent-pink bg-opacity-20 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
