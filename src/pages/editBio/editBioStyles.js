import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  editPageLabels: {
    fontWeight: "bold",
    color: "#646875",
  },
  defaultImageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
    border: "1px solid #dcdcdc",
    marginTop: 20,
    borderRadius: 5,
  },
  defaultImage: {
    height: 50,
  },
  resumePreview: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid #dcdcdc",
    marginTop: 20,
    borderRadius: 5,
  },
  previewContainer: {
    display: "flex",
    height: 150,
    overflow: "hidden",
  },
  endIconContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  resumeDetailsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTop: "1px solid #dcdcdc",
    fontWeight: "bold",
  },
  deleteDialogContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  dialogActionsContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  filledButton: {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    height: 40,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    margin: 5,
  },
  outlinedButton: {
    height: 40,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    border: "1px solid #dcdcdc",
    margin: 5,
  },
  bloodGroupLabel: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: theme.palette.error.main,
    color: "#fff",
    height: 40,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
}));
