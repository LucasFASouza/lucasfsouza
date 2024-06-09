import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import I18nSelect from "./I18nSelect";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between py-8">
      <Link className="font-bold text-xl" href="/" locale={router.locale}>
        Lucas F. Souza
      </Link>
      <ul className="flex gap-8 items-center">
        <li>
          <Link href="/" locale={router.locale}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/resume" locale={router.locale}>
            Resumé
          </Link>
        </li>
        <li>
          <I18nSelect />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
