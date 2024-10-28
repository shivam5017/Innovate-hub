import React from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import GithubBtn from "../buttons/GithubButton";
import ToggleButton from "../buttons/ToggleButton";

const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className="flex py-3 fixed top-0 w-full z-10 bg-transparent" >
      <nav className="flex items-center justify-between gap-3 container">
        <div>
          <h1 className="font-primary font-bold">Innovate <span style={{color:'var(--accent)'}}>HUB</span></h1>
        </div>
        <div className="flex items-center font-paragraph ">
          <ToggleButton onClick={toggleTheme} />
          <GithubBtn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
