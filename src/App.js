import React, { useState } from "react";
import AppContext from "./components/AppContext";
import { Application } from "./components/Application";
import Layout from "./components/Layout";

function App() {
  const [bioDetails, setBioDetails] = useState({});
  const [skills, setSkills] = useState({});
  return (
    <AppContext.Provider
      value={{ bioDetails, setBioDetails, skills, setSkills }}
    >
      <Layout>
        <Application />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
