import React, { useContext } from "react";
import AppContext from "../../components/AppContext";
import { Document, Page, pdfjs } from "react-pdf";
import useStyles from "./resumeStyles";
import { Header } from "../../components/Header";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const ResumeViewer = () => {
  const { bioDetails } = useContext(AppContext);
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const { classes } = useStyles();

  return (
    <>
      <Header
        icon={PictureAsPdfIcon}
        title={bioDetails.fileName || "No Resume"}
        enableClose={true}
      />
      <div className={classes.resumeContainer}>
        {bioDetails.resume ? (
          <Document file={bioDetails.resume}>
            <Page pageNumber={1} />
          </Document>
        ) : (
          <div className={classes.noDataMessage}>No Resume uploaded</div>
        )}
      </div>
    </>
  );
};
