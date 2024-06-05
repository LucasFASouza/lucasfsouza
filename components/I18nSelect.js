import { useRouter } from "next/router";
import Link from "next/link";

const I18nSelect = ({ locales }) => {
  const router = useRouter();

  return (
    <nav>
      {[...locales].sort().map((locale) => (
        <Link key={locale} href={router.pathname} locale={locale}>
          <div>{locale}</div>
        </Link>
      ))}
    </nav>
  );
};

export default I18nSelect;
