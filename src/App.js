// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
//import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [modetext, setmodeText] = useState("Light Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      setmodeText("Light Mode");
      setMode("light");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      document.body.style.backgroundColor = "#495057";
      setmodeText("Dark Mode");
      setMode("dark");
    }
  };

  const toggleStyle = () => {
    if (mode === "dark") {
      setmodeText("Enable Light Mode");
    } else {
      setmodeText("Enable Dark Mode");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        myStyle={myStyle}
        modeText={modetext}
        toggleStyle={toggleStyle}
      />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About
          mode={mode}
          toggleMode={toggleMode}
          myStyle={myStyle}
          toggleStyle={toggleStyle}
        />
      </div>
    </>
  );
}

export default App;
