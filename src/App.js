import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";       // , Navigate    also
import PageNotFound from "./components/PageNotFound";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const displayAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#030310";
      displayAlert("Light mode has been enabled.", "success");
    } else {
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#121222";
      document.body.style.color = "white";
      displayAlert("Dark mode has been enabled.", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <div className="container px-4">
          <Alert alert={alert} msg={alert} />
          <Routes>
            <Route
              exact path="/"
              element={<Home mode={mode} displayAlert={displayAlert} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/*" element={<PageNotFound mode={mode} />} />        {/* For every wrong URL */}  

            {/* Navigate is used to navigate the Home page for every wrong URL */}
            {/* <Route path="/*" element={<Navigate to="/" />} />            */}
          </Routes>
          <Footer mode={mode} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
