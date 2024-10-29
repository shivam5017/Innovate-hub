import React from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import ToggleButton from "../buttons/ToggleButton";
import {CustomBtnWithIcon} from "../buttons/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();
  const { toggleTheme } = useTheme();
  return (
    <header className="flex py-3 fixed top-0 w-full z-10 bg-transparent " >
      <nav className="flex items-center justify-between gap-3 container">
        <div className="cursor-pointer" onClick={()=>navigate('/')}>
          <h1 className="font-primary font-bold">Innovate <span style={{color:'var(--accent)'}}>HUB</span></h1>
        </div>
        <div className="flex items-center font-paragraph ">
          <ToggleButton onClick={toggleTheme} />
          <CustomBtnWithIcon text={'Login'}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
