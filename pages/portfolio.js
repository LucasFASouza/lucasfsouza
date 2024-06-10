import React, { useState } from "react";
import Modal from "../components/Modal";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";

const Portfolio = ({ dir }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const { locales } = useRouter();

  const intl = useIntl();
  const projects = intl.messages["page.portfolio.projects"] || [];

  const title = intl.formatMessage({ id: "meta.title" });
  const description = intl.formatMessage({
    id: "meta.description",
  });

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main dir={dir}>
        <Layout locales={locales}>
          {projects.map((project, index) => (
            <div
              className="bg-stone-950 rounded-xl m-4"
              key={index}
              onClick={() => handleOpenModal(project)}
            >
              <h2>{project.title}</h2>
              <p>{project["short-description"]}</p>
              <p>{project.type}</p>
            </div>
          ))}

          {selectedProject && (
            <Modal onClose={handleCloseModal}>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <h3>Stack</h3>
              <ul>
                {selectedProject.stack.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))}
              </ul>
              <a href={selectedProject.url}>Link</a>
            </Modal>
          )}
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
