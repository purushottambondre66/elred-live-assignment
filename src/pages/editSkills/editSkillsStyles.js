import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  editSkillLabel: {
    fontWeight: "bold",
    marginTop: "10px",
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
