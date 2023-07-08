import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  noDataMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#dcdcdc",
    height: "100vh",
    width: "100%",
  },
  resumeContainer: {
    width: "100%",
    display: "flex",
    overflow: "scroll",
  },
}));
