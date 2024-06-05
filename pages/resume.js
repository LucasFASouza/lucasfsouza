import React from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";


import Layout from "../components/Layout";

const Resume = () => {
  const { locales } = useRouter();
   const intl = useIntl();

  return (
    <Layout locales={locales}>
      <h1>
        <FormattedMessage
          id="page.home.title"
          values={{ b: (info) => <b>{info}</b> }}
        />
      </h1>
      <p>
        aaa
        <FormattedMessage id="page.home.description" />
      </p>
    </Layout>
  );
};

export default Resume;
