import React, { useContext } from "react";
import { Header } from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import useStyles from "./bioStyles";
import { Chip, IconButton, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import AppContext from "../../components/AppContext";

export const MyBio = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { bioDetails, skills } = useContext(AppContext);

  const handleEditBio = () => {
    navigate("/editbio");
  };

  const handleEditSkills = () => {
    navigate("/edit-skills");
  };

  return (
    <>
      <Header title={"My Bio"} />
      <div className={classes.aboutMeLabelContainer}>
        About
        <div className={classes.endIconContainer}>
          <IconButton onClick={handleEditBio}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      {bioDetails.aboutMe ? (
        <div>{bioDetails.aboutMe}</div>
      ) : (
        <div className={classes.noDataMessage}>No about me added yet</div>
      )}

      <hr color="#dcdcdc" />
      <div className={classes.bloodGroupContainer}>
        <div className={classes.boldLabel}>Blood group</div>
        {bioDetails.bloodGroup && (
          <div className={classes.bloodGroupValue}>{bioDetails.bloodGroup}</div>
        )}
      </div>
      <Paper
        className={classes.resumePaper}
        onClick={() => navigate("/resume-viewer")}
      >
        <PictureAsPdfIcon fontSize="large" className={classes.pdfIcon} /> resume
        <div className={classes.endIconContainer}>
          <KeyboardArrowRightIcon fontSize="small" />
        </div>
      </Paper>

      <hr color="#dcdcdc" />
      <div className={classes.aboutMeLabelContainer}>
        Skills
        <div className={classes.endIconContainer}>
          <IconButton onClick={handleEditSkills}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      {skills.selectedSkills ? (
        <>
          <div className={classes.skillLabel}>
            I am incredible at these skills / professionally great at
          </div>
          <div className={classes.chipContainer}>
            {skills.selectedSkills.map((item) => (
              <Chip color="primary" key={item._id} label={item.value} />
            ))}
          </div>
          <hr color="#dcdcdc" />
          <div className={classes.skillLabel}>
            Hobbies I am passionate about
          </div>
          <div className={classes.chipContainer}>
            {skills.selectedHobbies.map((item) => (
              <Chip color="primary" key={item._id} label={item.value} />
            ))}
          </div>
          <hr color="#dcdcdc" />
          <div className={classes.skillLabel}>My Favorite Subjects Are</div>
          <div className={classes.chipContainer}>
            {skills.selectedSubjects.map((item) => (
              <Chip color="primary" key={item._id} label={item.value} />
            ))}
          </div>
        </>
      ) : (
        <div className={classes.noDataMessage}>No soft skills added yet</div>
      )}
    </>
  );
};
