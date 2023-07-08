import React from "react";
import useStyles from "./homeStyles";

export const Home = () => {
  const { classes } = useStyles();
  return <div className={classes.pageLabel}>Welcome to elRed</div>;
};
