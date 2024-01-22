import { useState } from "react";
import Sidenav from "./components/Sidenav";
import MainPage from "./components/MainPage";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <MainPage />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
