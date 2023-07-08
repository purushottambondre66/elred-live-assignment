import React from "react";

// This component will be used if you want to add common header, footer and menu to all pages
const Layout = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default Layout;
