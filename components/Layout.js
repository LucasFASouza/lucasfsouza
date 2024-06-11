import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, locales }) => (
  <div className="min-h-screen bg-[#1E1E1E] text-stone-300">
    <Navbar locales={locales} />
    <div className="px-14">{children}</div>
  </div>
);

export default Layout;
