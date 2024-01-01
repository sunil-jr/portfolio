import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomeDiv/Home";
import About from "./Components/AboutDiv/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Components/WorkDiv/Work";

const App = () => {
  localStorage.removeItem("theme");
  const [darkTheme, setDarkTheme] = useState(false);
  const darkModeHandler = (dark) => {
    if (dark) {
      document.body.style.backgroundColor = "#0F172A";
    } else {
      document.body.style.backgroundColor = "white";
    }
    setDarkTheme(dark);
  };
  return (
    <BrowserRouter>
      <div className={`${darkTheme ? "dark" : "light"}`}>
        <div className="w-[85%] m-auto">
          <NavBar darkModeHandler={darkModeHandler} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
