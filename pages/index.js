import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";
import Layout from "../components/Layout";
import SocialLink from "../components/SocialLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home({ dir }) {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "meta.title" });
  const description = intl.formatMessage({
    id: "meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main dir={dir}>
        <Layout>
          <div className="h-[32rem] flex flex-col justify-center w-1/2 gap-8">
            <h1 className="text-4xl">
              <FormattedMessage
                id="page.home.title"
                values={{
                  b: (info) => <b className="color-transition">{info}</b>,
                }}
              />
            </h1>

            <p>
              <FormattedMessage
                id="page.home.description"
                values={{
                  b: (info) => <b className="color-transition">{info}</b>,
                }}
              />
            </p>

            <div className="flex gap-4">
              <SocialLink
                href="https://linkedin.com/in/LucasFASouza"
                icon={faLinkedin}
              />
              <SocialLink
                href="https://github.com/LucasFASouza"
                icon={faGithub}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
