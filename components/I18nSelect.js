import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const I18nSelect = () => {
  const router = useRouter();
  const { locales } = router;

  const [selectedLocale, setSelectedLocale] = useState(router.locale);

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
    setSelectedLocale(newLocale);
  };

  useEffect(() => {
    setSelectedLocale(router.locale);
  }, [router.locale]);

  return (
    <select
      className="bg-accent-bg px-2 py-1 rounded"
      value={selectedLocale}
      onChange={handleLocaleChange}
    >
      {[...locales].sort().map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
};

export default I18nSelect;
