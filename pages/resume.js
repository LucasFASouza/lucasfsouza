import React from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Head from "next/head";

import Layout from "../components/Layout";
import Jobs from "../components/Jobs";

const Resume = ({ dir }) => {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  const jobs = intl.messages["page.resume.jobs"] || [];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main dir={dir}>
        <Layout locales={locales}>
          <div className="flex flex-row gap-16">
            <div className="w-1/2  flex flex-col justify-center gap-4">
              <div className="text-4xl">
                <FormattedMessage id="page.resume.title" />
              </div>
              <p>
                <FormattedMessage id="page.resume.description" />
              </p>
            </div>

            <div className="w-1/2">
              <Jobs jobs={jobs} />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Resume;
