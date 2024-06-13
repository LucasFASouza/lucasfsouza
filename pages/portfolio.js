import React, { useState, useEffect } from "react"; // Added useEffect import
import Modal from "../components/Modal";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import Project from "@/components/Project";

const Portfolio = ({ dir }) => {
  const intl = useIntl();
  const projects = intl.messages["page.portfolio.projects"] || []; // Moved this line up

  const [selectedStacks, setSelectedStacks] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const allStacks = [...new Set(projects.flatMap((project) => project.stack))];

  const handleSelectChange = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedStacks(value);
  };

  useEffect(() => {
    if (selectedStacks.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        selectedStacks.every((stack) => project.stack.includes(stack))
      );
      setFilteredProjects(filtered);
    }
  }, [selectedStacks, projects]);

  const { locales } = useRouter();

  const title = intl.formatMessage({ id: "meta.title" });
  const description = intl.formatMessage({
    id: "meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <main dir={dir}>
        <Layout locales={locales}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <select
                multiple
                value={selectedStacks}
                onChange={handleSelectChange}
                className="w-full h-64 overflow-auto bg-primary-dark"
              >
                {allStacks.map((stack) => (
                  <option key={stack} value={stack}>
                    {stack}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap md:w-2/3">
              {filteredProjects.map((project, index) => (
                <Project key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
