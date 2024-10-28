import CustomBtn from "../../Components/buttons/button";
import FloatingIcons from "../../Components/floatingIcons/floatingIcons";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col container items-center justify-center h-screen text-center">
      {/* Floating Icons */}
      <FloatingIcons />
      {/* Title */}
      <div className="mb-8 font-primary">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-wide">
          BUILDING <br />
          <span className="text-accent">TOMORROW'S</span> <br />
          SOLUTIONS
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="text-sm sm:text-base md:text-lg text-lightText max-w-lg mx-auto mb-12 font-paragraph"
      >
        At InnovateHub, we create breakthrough solutions that push the limits of
        technology and design
      </p>

      {/* Button */}
      <CustomBtn text={"Get Started"} />
    </section>
  );
};

export default HeroSection;
