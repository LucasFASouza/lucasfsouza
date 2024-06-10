import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import I18nSelect from "./I18nSelect";
import { FormattedMessage, useIntl } from "react-intl";

const Navbar = () => {
  const router = useRouter();
  const intl = useIntl();

  const links = intl.messages["navbar"] || [];

  return (
    <nav className="flex justify-between py-8">
      <Link className="font-bold text-xl" href="/" locale={router.locale}>
        Lucas F. Souza
      </Link>
      <ul className="flex gap-8 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} locale={router.locale}>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <I18nSelect />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
