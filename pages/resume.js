import React from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";

import Layout from "../components/Layout";
import Jobs from "../components/resume/Jobs";
import Courses from "../components/resume/Courses";

const Resume = ({ dir }) => {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "meta.title" });
  const description = intl.formatMessage({
    id: "meta.description",
  });

  const jobs = intl.messages["page.resume.jobs.list"] || [];
  const courses = intl.messages["page.resume.education.list"] || [];

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
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-row gap-16">
              <div className="w-1/2  flex flex-col justify-center gap-4">
                <div className="text-4xl">
                  <FormattedMessage id="page.resume.jobs.title" />
                </div>
                <p>
                  <FormattedMessage id="page.resume.jobs.description" />
                </p>
              </div>

              <div className="w-1/2">
                <Jobs jobs={jobs} />
              </div>
            </div>

            <hr className="my-8 w-1/3" />

            <div className="flex flex-row gap-16">
              <div className="w-1/2  flex flex-col justify-center gap-4">
                <div className="text-4xl">
                  <FormattedMessage id="page.resume.education.title" />
                </div>
                <p>
                  <FormattedMessage id="page.resume.education.description" />
                </p>
              </div>

              <div className="w-1/2">
                <Courses courses={courses} />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Resume;
