

import { IoMdLogIn } from "react-icons/io";
import { PiCrown } from "react-icons/pi";

const CustomBtn = ({ text }) => {
  return (
    <button className="px-8 py-3 text-text rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,255,0,0.5)]">
      {text}
    </button>
  );
};

const CustomBtnWithIcon = ({ text }) => {
  return (
    <button className="relative p-1.5 md:p-3 flex font-semibold text-sm text-text border-accent items-center gap-3 rounded-full  transition-all shadow-[0_0_15px_rgba(0,255,0,0.5)] bg-background">
      <IoMdLogIn  />
      <h4 className="text-sm hidden md:block ">{text}</h4>
    </button>
  );
};



function FeatureButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-text font-primary">
      <PiCrown className="w-4 h-4" />
      Featured Products
    </button>
  );
}




export  {
  CustomBtn,
  CustomBtnWithIcon,
  FeatureButton
};
