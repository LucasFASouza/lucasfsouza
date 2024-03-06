import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../i18n/en.json";
import pt from "../i18n/pt.json";
import "@/styles/globals.css";

const messages = {
  en,
  pt,
};
function getDirection(locale) {
  return "Itr";
}
export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}
