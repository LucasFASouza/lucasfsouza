import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

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
        <nav>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </nav>
        <h1>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (info) => <b>{info}</b> }}
          />
        </h1>
        <p>
          <FormattedMessage id="page.home.description" />
        </p>
      </main>
    </>
  );
}
