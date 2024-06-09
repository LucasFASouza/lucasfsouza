import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, locales }) => (
  <div className="min-h-screen bg-[#1E1E1E] text-stone-200 px-24">
    <Navbar locales={locales} />
    {children}
  </div>
);

export default Layout;
