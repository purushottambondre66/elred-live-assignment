import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useStyles from "./layoutStyles";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const { title, onBackClick, icon: Icon, enableClose } = props;
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.headerContainer}>
      {Icon ? (
        <Icon fontSize="small" />
      ) : (
        <ArrowBackIosIcon
          fontSize="small"
          onClick={() => (onBackClick ? onBackClick() : {})}
        />
      )}
      {title}
      {enableClose && (
        <div className={classes.endAction}>
          <IconButton onClick={() => navigate("/mybio")}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </div>
  );
};
