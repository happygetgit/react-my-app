// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [modetext, setmodeText] = useState("Light Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [mode, setMode] = useState("");
  const [alert, setAlert] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // State for selected radio button
  //const [bgcolors, selectedbg] = useState(["blue", "red", "green", "yellow"]);
  const bgcolors = ["blue", "red", "green", "yellow"];

  const toggleMode = () => {
    if (mode === "dark") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      setmodeText("Light Mode");
      setMode("light");
      setSelectedOption("");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      document.body.style.backgroundColor = "#495057";
      showAlert("dark mode enabled", "success");
      setmodeText("Dark Mode");
      setMode("dark");
      setSelectedOption("");
    }
  };

  const toggleStyle = () => {
    if (mode === "dark") {
      setmodeText("Enable Light Mode");
    } else {
      setmodeText("Enable Dark Mode");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const selectedMode = (modevalue) => {
    setMode(modevalue);
    setSelectedOption(modevalue);
    let newMode = bgcolors.includes(modevalue);
    if (newMode) {
      setMyStyle({
        color: "black",
        backgroundColor: modevalue,
      });
      document.body.style.backgroundColor = `${modevalue}`;
      showAlert(`${modevalue} mode enabled`, "success");
      setmodeText("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
      setmodeText("Light Mode");
      setMode("light");
      setSelectedOption("");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          myStyle={myStyle}
          modeText={modetext}
          toggleStyle={toggleStyle}
          selected={selectedOption}
          selectedMode={selectedMode}
          bgcolors={bgcolors}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
