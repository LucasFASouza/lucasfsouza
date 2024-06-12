import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import I18nSelect from "./I18nSelect";
import { FormattedMessage, useIntl } from "react-intl";

const Navbar = () => {
  const router = useRouter();
  const intl = useIntl();

  const links = intl.messages["navbar"] || [];

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isPageTallEnough =
      document.documentElement.scrollHeight > window.innerHeight;
    const navbarHeight = 80; // adjust this value to match the height of your navbar
    setVisible(
      (prevScrollPos > currentScrollPos || currentScrollPos < navbarHeight) &&
        isPageTallEnough
    );
    setIsTop(currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`z-50 flex justify-between items-center px-14 h-20 bg-basic-black bg-opacity-85 backdrop-blur ${
        isTop ? "" : "shadow-md shadow-neutral-900"
      }`}
      style={{
        transition: "top 0.3s",
        position: "sticky",
        top: visible ? "0" : "-80px",
      }}
    >
      <Link
        className="font-bold text-xl underline-transition"
        href="/"
        locale={router.locale}
      >
        Lucas F. Souza
      </Link>
      <ul className="flex gap-8 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} locale={router.locale}>
              <span className="font-medium underline-transition">
                {link.label}
              </span>
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
