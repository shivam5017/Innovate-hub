


const CustomBtn = ({ children, onClick, variant, size,disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(0,255,0,0.5)] font-paragraph ${variant} ${size} ${disabled ? 'cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


const CustomBtnWithIcon = ({ text,icon,onClick }) => {
  return (
    <button className="relative p-1.5 md:p-3 flex font-paragraph text-sm text-text border-accent items-center gap-3 rounded-full  transition-all shadow-[0_0_15px_rgba(0,255,0,0.5)] bg-background" onClick={onClick}>
      <span>{icon}</span>
      <h4 className="text-sm hidden md:block ">{text}</h4>
    </button>
  );
};



function HeadingsBtn({text,icon}) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border font-semibold border-gray-300 rounded-full text-text font-primary">
      <span className="w-4 h-4">{icon}</span>
      {text}
    </button>
  );
}





export  {
  CustomBtn,
  CustomBtnWithIcon,
  HeadingsBtn,
};
