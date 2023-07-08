import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import useStyles from "./bioStyles";
import { Chip, Dialog, DialogContent, IconButton, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import AppContext from "../../components/AppContext";
import StarIcon from "@mui/icons-material/Star";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MyBio = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const { bioDetails, skills } = useContext(AppContext);
  const [ethicalCodeRatings, setEthicalCodeRatings] = useState([]);
  const [virtualyMetRatings, setVirtualyMetRatings] = useState([]);
  const [dialog, setDialog] = useState("");

  const handleEditBio = () => {
    navigate("/editbio");
  };

  const handleEditSkills = () => {
    navigate("/edit-skills");
  };

  const fetchData = async () => {
    let response1 = await fetch(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsEthicalCodeResponse.json"
    );
    let ethicalCodeRatingList = await response1.json();

    setEthicalCodeRatings(ethicalCodeRatingList?.result || []);

    let response2 = await fetch(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/RatingsVirtuallyMetResponse.json"
    );
    let virtualyMetRatingsList = await response2.json();

    setVirtualyMetRatings(virtualyMetRatingsList?.result || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openRatingsDialog = (type) => {
    setDialog(type);
  };

  const handleClose = () => {
    setDialog("");
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
      <div className={classes.ratingsContainer}>
        <div className={classes.ratingsPaper}>
          Ratings
          <div className={classes.ratingCountContainer}>
            <div
              className={classes.ratingCount}
              onClick={() => openRatingsDialog("ethicalCode")}
            >
              {ethicalCodeRatings.length}
            </div>
            <div>
              Say has ethical code of counduct and is safe to do busines with
            </div>
          </div>
          <hr color="#fff" />
          <div className={classes.ratingCountContainer}>
            <div
              className={classes.ratingCount}
              onClick={() => openRatingsDialog("virtuallyMet")}
            >
              {virtualyMetRatings.length}
            </div>
            <div>Have met in real life/Video call</div>
          </div>
        </div>
        <div className={classes.starContainer}>
          <StarIcon fontSize="medium" />
        </div>
      </div>
      {dialog && (
        <Dialog
          open={true}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <DialogContent>
            {dialog === "virtuallyMet" && (
              <div>
                <div className={classes.dialogTitleContainer}>
                  {virtualyMetRatings.length}
                  <div className={classes.dialogTitle}>
                    Have met in real life/Video call
                  </div>
                  <div className={classes.closeIconContainer}>
                    <CloseIcon fontSize="small" onClick={handleClose} />
                  </div>
                </div>
                {virtualyMetRatings.map((item, index) => (
                  <div key={`${index}`} className={classes.ratingRecord}>
                    <div className={classes.userDPContainer}>
                      <img
                        src={item.dpURL}
                        alt="logo"
                        className={classes.userDP}
                      />
                    </div>
                    <div className={classes.userDetailsContainer}>
                      <div>
                        {item.firstname} {item.lastname}
                      </div>
                      <div className={classes.designationContainer}>
                        {item.title[0] ? item.title[0]?.value : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {dialog === "ethicalCode" && (
              <div>
                <div className={classes.dialogTitleContainer}>
                  {ethicalCodeRatings.length}
                  <div className={classes.dialogTitle}>
                    Say has ethical code of counduct and is safe to do busines
                    with
                  </div>
                  <div className={classes.closeIconContainer}>
                    <CloseIcon fontSize="small" onClick={handleClose} />
                  </div>
                </div>
                {ethicalCodeRatings.map((item, index) => (
                  <div key={`${index}`} className={classes.ratingRecord}>
                    <div className={classes.userDPContainer}>
                      <img
                        src={item.dpURL}
                        alt="logo"
                        className={classes.userDP}
                      />
                    </div>
                    <div className={classes.userDetailsContainer}>
                      <div>
                        {item.firstname} {item.lastname}
                      </div>
                      <div className={classes.designationContainer}>
                        {item.title[0] ? item.title[0]?.value : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
