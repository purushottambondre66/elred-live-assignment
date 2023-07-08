import React from "react";
import useStyles from "./layoutStyles";

// This component will be used if you want to add common header, footer and menu to all pages
const Layout = (props) => {
  const { children } = props;
  const { classes } = useStyles();
  return (
    <div className={classes.appContainer}>
      <div className={classes.layoutContainer}>{children}</div>
    </div>
  );
};

export default Layout;
