import { FaRocket, FaLightbulb, FaCog, FaAtom } from "react-icons/fa"; // example icons
import './floatingIcons.css'

const FloatingIcons = () => {
  return (
    <>
      <FaRocket className="absolute left-10 top-20 text-accent opacity-70 animate-float" size={30} />
      <FaLightbulb className="absolute right-10 top-40 text-accent opacity-70 animate-float-reverse" size={30} />
      <FaCog className="absolute left-20 bottom-20 text-accent opacity-70 animate-float" size={30} />
      <FaAtom className="absolute right-20 bottom-40 text-accent opacity-70 animate-float-reverse" size={30} />
    </>
  );
};

export default FloatingIcons;
