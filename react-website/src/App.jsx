import { useState } from "react";
import Sidenav from "./components/Sidenav";
import MainPage from "./components/MainPage";
import Work from "./components/Work";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <MainPage />
        <Work />
        <Projects />
      </div>
    </>
  );
}

export default App;
