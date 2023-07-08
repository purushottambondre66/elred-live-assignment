import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { EditBio } from "../pages/editBio/EditBio";
import { EditSkills } from "../pages/editSkills/EditSkills";
import { MyBio } from "../pages/myBio/MyBio";
import { ResumeViewer } from "../pages/resumeViewer/ResumeViewer";

export const Application = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/mybio"} />} />
      <Route path="/mybio" element={<MyBio />} />
      <Route path="/editbio" element={<EditBio />} />
      <Route path="/resume-viewer" element={<ResumeViewer />} />
      <Route path="/edit-skills" element={<EditSkills />} />
    </Routes>
  );
};
