import {
  Dialog,
  DialogContent,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import useStyles from "./editBioStyles";
import defaultImage from "../../images/default-image.jpeg";
import { Document, Page, pdfjs } from "react-pdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import AppContext from "../../components/AppContext";
import { useNavigate } from "react-router-dom";

const BloodGroupList = [
  {
    label: "A Positive (A+)",
    value: "A-Positive",
  },
  {
    label: "B Positive (B+)",
    value: "B-Positive",
  },
  {
    label: "AB Positive (AB+)",
    value: "AB-Positive",
  },
  {
    label: "AB Negative (AB-)",
    value: "AB-Negative",
  },
  {
    label: "O Positive (O+)",
    value: "O-Positive",
  },
];

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

// pdfjs.GlobalWorkerOptions.workerPort = new Worker(
//   "pdfjs-dist/build/pdf.worker.entry.js"
// );

export const EditBio = () => {
  const [aboutMe, setAboutMe] = useState("");
  const { classes } = useStyles();
  const [errors, setErrors] = useState({ aboutMe: "" });
  const fileRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [fileName, setFileName] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("");
  const { bioDetails, setBioDetails } = useContext(AppContext);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    setFileName(file.name);

    reader.onload = function (event) {
      setResume(event.target.result);
    };
    reader.readAsDataURL(file);

    if (file.size > 5e6) {
      setErrors({ resume: "File sixe must be less than 5 mb" });
    }
  };

  let isFormComplete = resume && aboutMe && bloodGroup;

  const selectFile = () => {
    fileRef?.current?.click();
  };

  const handleDeleteResume = () => {
    setResume(null);
    setFileName("");
    setDeleteDialogOpen(false);
  };

  const handleSaveDetails = () => {
    if (aboutMe.length < 3 || aboutMe.length > 500) {
      setErrors({
        aboutMe: "Text should be 3 to 500 characters",
      });
    } else {
      if (isFormComplete) {
        setBioDetails({
          resume,
          fileName,
          aboutMe,
          bloodGroup,
        });
        navigate("/mybio");
      }
    }
  };

  useEffect(() => {
    if (bioDetails.resume) {
      setResume(bioDetails.resume);
    }
    if (bioDetails.fileName) {
      setFileName(bioDetails.fileName);
    }
    if (bioDetails.aboutMe) {
      setAboutMe(bioDetails.aboutMe);
    }
    if (bioDetails.bloodGroup) {
      setBloodGroup(bioDetails.bloodGroup);
    }
    // eslint-disable-next-line
  }, [bioDetails]);

  return (
    <>
      <Header title={"My Bio"} onBackClick={() => navigate("/mybio")} />
      <div className={classes.editPageLabels}>
        Write something about yourself
      </div>
      <TextField
        multiline
        rows={3}
        fullWidth
        value={aboutMe}
        helperText={errors.aboutMe}
        error={!!errors.aboutMe}
        onChange={(event) => {
          setErrors({ ...errors, aboutMe: "" });
          setAboutMe(event.target.value);
        }}
      />
      {!resume ? (
        <div className={classes.defaultImageContainer} onClick={selectFile}>
          <img className={classes.defaultImage} src={defaultImage} alt="pdf" />
          <div>Upload Resume</div>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileRef}
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className={classes.resumePreview}>
          <div className={classes.previewContainer}>
            <Document file={resume}>
              <Page pageNumber={1} />
            </Document>
          </div>
          <div className={classes.resumeDetailsContainer}>
            <PictureAsPdfIcon fontSize="small" />
            {fileName}
            <div className={classes.endIconContainer}>
              <DeleteIcon
                color="error"
                fontSize="small"
                onClick={() => setDeleteDialogOpen(true)}
              />
            </div>
          </div>
        </div>
      )}
      <div className={`${classes.editPageLabels} ${classes.bloodGroupLabel}`}>
        Blood Group
      </div>
      <Select
        value={bloodGroup}
        fullWidth
        onChange={(event) => setBloodGroup(event.target.value)}
      >
        {BloodGroupList.map((group) => (
          <MenuItem key={group.value} value={group.value}>
            {group.label}
          </MenuItem>
        ))}
      </Select>
      <div
        className={classes.saveButton}
        style={!isFormComplete ? { backgroundColor: "#f47373" } : {}}
        onClick={handleSaveDetails}
      >
        Save
      </div>
      {deleteDialogOpen && (
        <Dialog open={true} onClose={() => setDeleteDialogOpen(false)}>
          <DialogContent>
            <div className={classes.deleteDialogContainer}>
              <DeleteIcon color="error" fontSize="large" />
              <div>Are you sure you want to delete your resume?</div>
              <div className={classes.dialogActionsContainer}>
                <div
                  className={classes.outlinedButton}
                  onClick={() => setDeleteDialogOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={classes.filledButton}
                  onClick={handleDeleteResume}
                >
                  Delete
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
