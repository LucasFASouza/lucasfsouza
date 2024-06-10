import React, { useState, useEffect } from "react";
import Modal from "../components/Modal"; // import your Modal component
import data from "../locales/en.json"; // import your data

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setProjects(data["page.portfolio.projects"]);
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.stack.includes(filter)
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by stack"
      />
      {filteredProjects.map((project, index) => (
        <div key={index} onClick={() => handleOpenModal(project)}>
          <h2>{project.title}</h2>
          <p>{project["short-description"]}</p>
        </div>
      ))}
      {selectedProject && (
        <Modal onClose={handleCloseModal}>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          {/* Add more fields as needed */}
        </Modal>
      )}
    </div>
  );
};

export default Portfolio;
