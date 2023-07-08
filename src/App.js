import React from "react";
import AppContext from "./components/AppContext";
import { Application } from "./components/Application";
import Layout from "./components/Layout";

function App() {
  return (
    <AppContext.Provider value={{}}>
      <Layout>
        <Application />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
