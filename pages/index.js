import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "../components/Layout";

import Head from "next/head";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main dir={dir}>
        <Layout locales={locales}>
          <h1>
            <FormattedMessage
              id="page.home.title"
              values={{ b: (info) => <b>{info}</b> }}
            />
          </h1>
          <p>
            <FormattedMessage id="page.home.description" />
          </p>
        </Layout>
      </main>
    </>
  );
}
