import { useState } from "react";
import Sidenav from "./components/Sidenav";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <div>
        <Sidenav />
        <MainPage />
      </div>
    </>
  );
}

export default App;
