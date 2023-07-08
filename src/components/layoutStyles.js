import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  appContainer: {
    display: "flex",
    justifyContent: "center",
  },
  layoutContainer: {
    width: 375,
    height: "100vh",
    padding: 10,
    position: "relative",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  endAction: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
}));
