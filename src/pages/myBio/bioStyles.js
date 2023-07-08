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
  ratingsContainer: {
    display: "flex",
    backgroundColor: "#999999",
    padding: 5,
    flexDirection: "column",
    position: "relative",
    marginTop: 20,
  },
  ratingsPaper: {
    backgroundColor: "#75767A",
    borderRadius: "5px",
    color: "#fff",
    padding: 5,
    marginTop: 28,
    width: "100%",
  },
  starContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dcdcdc",
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    left: "calc(50% - 20px)",
  },
  ratingCountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  ratingCount: {
    marginRight: 20,
    cursor: "pointer",
  },
  dialogTitle: {
    color: "#75767a",
    marginLeft: 10,
  },
  dialogTitleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  closeIconContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    minWidth: 48,
  },
  ratingRecord: {
    display: "flex",
    flexDirection: "row",
  },
  userDPContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    margin: 5,
  },
  userDP: {
    height: 40,
  },
  designationContainer: {
    fontSize: 12,
    color: "#75767a",
  },
  userDetailsContainer: {
    marginLeft: 10,
  },
}));
