import React from "react";
import I18nSelect from "./I18nSelect";

const Layout = ({ children, locales }) => (
  <div>
    <I18nSelect locales={locales} />
    {children}
  </div>
);

export default Layout;
