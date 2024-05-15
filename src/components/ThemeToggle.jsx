import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex">
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      />
    </button>
  );
};

export default ThemeToggle;
