import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme == "light" ? "dark" : "light");
  };

  const themeFeatures = {
    theme,
    toggleTheme,
  };

  return (
    <div data-theme={theme} className="duration-1000">
      <ThemeContext value={themeFeatures}>{children}</ThemeContext>
    </div>
  );
};

export default ThemeProvider;
