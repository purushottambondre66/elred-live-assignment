import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home/Home";

export const Application = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
