import React, { useState } from "react";
import Modal from "../components/Modal";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import Project from "@/components/portfolio/Project";

const Portfolio = ({ dir }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const { locales } = useRouter();

  const intl = useIntl();
  const projects = intl.messages["page.portfolio.projects"] || [];

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
          {projects.map((project, index) => (
            <Project project={project} index={index} />
          ))}

        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
