import React from "react";
import I18nSelect from "./I18nSelect";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-8">
      <a href="/" className="font-bold text-xl">
        Lucas F. Souza
      </a>
      <ul className="flex gap-8 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resume">Resumé</a>
        </li>
        <li>
          <I18nSelect />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
