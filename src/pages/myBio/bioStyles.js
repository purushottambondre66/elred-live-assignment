import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  pageLabel: {
    fontWeight: "bold",
  },
  endIconContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  aboutMeLabelContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    fontWeight: "bold",
    marginTop: 10,
  },
  noDataMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#dcdcdc",
  },
  boldLabel: {
    fontWeight: "bold",
  },
  resumePaper: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginTop: 20,
    alignItems: "center",
  },
  pdfIcon: {
    marginRight: 10,
  },
  bloodGroupValue: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  bloodGroupContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  skillLabel: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
  },
}));
