import { useState } from "react";
import Sidenav from "./components/Sidenav";
import MainPage from "./components/MainPage";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <MainPage />
        <Work />
      </div>
    </>
  );
}

export default App;
