import { FormattedMessage, useIntl } from "react-intl";
import Layout from "../components/Layout";

import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home({ dir }) {
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
        <Layout>
          <div className="h-[32rem] flex flex-col justify-center w-1/2 gap-8">
            <h1 className="text-4xl">
              <FormattedMessage
                id="page.home.title"
                values={{ b: (info) => <b>{info}</b> }}
              />
            </h1>

            <p>
              <FormattedMessage id="page.home.description" />
            </p>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/LucasFASouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-stone-400 hover:text-stone-300"
                  size="2x"
                />
              </a>

              <a
                href="https://github.com/LucasFASouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-stone-400 hover:text-stone-300"
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="h-[32rem] flex flex-col justify-center w-1/2 gap-8">
            <h1 className="text-4xl">
              <FormattedMessage
                id="page.home.title"
                values={{ b: (info) => <b>{info}</b> }}
              />
            </h1>

            <p>
              <FormattedMessage id="page.home.description" />
            </p>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/LucasFASouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-stone-400 hover:text-stone-300"
                  size="2x"
                />
              </a>

              <a
                href="https://github.com/LucasFASouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-stone-400 hover:text-stone-300"
                  size="2x"
                />
              </a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
