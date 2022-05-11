import React from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import "../Styles/EDarkMode.css";

const EDarkMode = ({ darkMode, handleDarkMode }) => {
  return (
    <button className="btn_darkMode" onClick={handleDarkMode}>
      {darkMode ? (
        <BsFillSunFill className="icon_son_mode" />
      ) : (
        <MdDarkMode className="icon_dark_mode" />
      )}
    </button>
  );
};

export default EDarkMode;
