import { CustomBtn } from "../../Components/buttons/button";

const Footer = () => {
  return (
    <footer className="p-8 md:px-16 lg:px-32 relative">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    
        <h2 className="text-2xl font-semibold md:w-1/3 font-primary text-accent">
          Empowering the Next Generation of Innovation.
        </h2>
        <div className="mt-4 md:mt-0 text-sm flex items-center md:w-1/5 text-lightText">
          <span>@2024 All rights reserved</span>
        </div>
      </div>

      {/* Links section */}
      <div className="flex flex-wrap justify-between mb-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 font-primary">About</h3>
          <ul className="space-y-1 text-sm font-paragraph text-lightText">
            <li>
              <a href="#" >
                Our Team
              </a>
            </li>
            <li>
              <a href="#" >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2 font-primary">Elsewhere</h3>
          <ul className="space-y-1 text-sm font-paragraph text-lightText">
            <li>
              <a href="#" >
                X
              </a>
            </li>
            <li>
              <a href="#" >
                Discord
              </a>
            </li>
            <li>
              <a href="#" >
                Github
              </a>
            </li>
            <li>
              <a href="#" >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Branding */}
      <div className="text-center text-2xl lg:text-4xl font-bold tracking-wider mb-8 text-accent">
        INNOVATE HUB
      </div>

      {/* Email Subscription */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <input
          type="email"
          placeholder="Enter email for updates"
          className="p-2 rounded-full w-full max-w-md focus:outline-none bg-text text-background"
        />
        <CustomBtn className="transition-colors p-2 px-4 rounded-full sm:rounded-r-lg">
          Submit
        </CustomBtn>
      </div>
    </footer>
  );
};

export default Footer;
