import { use } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <div className="navbar bg-primary justify-between  text-primary-content shadow">
      <button className="btn btn-secondary text-xl">Explore REACT-19</button>
      <button onClick={toggleTheme} className="btn btn-secondary text-xl">
        {theme == "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Header;
