import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, locales }) => (
  <div className="min-h-screen bg-primary-dark text-stone-300">
    <Navbar locales={locales} />
    <div className="px-36">{children}</div>
  </div>
);

export default Layout;
