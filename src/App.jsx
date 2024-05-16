import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import NavbarCategories from "./components/Navbar/NavbarCategories";

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return <div className="app"></div>;
};

export default App;
