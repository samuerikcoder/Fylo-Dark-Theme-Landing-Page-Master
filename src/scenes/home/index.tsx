import IlustrationIntro from "@/assets/illustration-intro.png";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isAboveMediumScreens = useMediaQuery({query: '(min-width: 1060px)'})
  const isAboveLargeScreens = useMediaQuery({query: '(min-width: 1440px)'});
  const isAboveXtraLargeScreens = useMediaQuery({query: '(min-width: 1710px)'});
  const homeStyles = `py-10 md:h-full bg-image-curvy-mobile 
  md:bg-image-curvy-desktop bg-no-repeat bg-center`;

  return (
    <section 
      id="home" 
      className={homeStyles}
      style={
        {backgroundPosition:
          (isAboveXtraLargeScreens) ? "50% 160%" : 
          (isAboveLargeScreens) ? "50% 140%" :
          (isAboveMediumScreens) ? "50% 115%" :
          "center",
         backgroundSize: "100%"}
      }
      >
      <div className="mx-auto w-5/6 grid place-content-center md:h-5/6"
      >
        <img src={IlustrationIntro} alt="illustration intro" className="mx-auto md:max-w-[650px]" />
        <div className="text-center md:w-9/12 mx-auto 
        text-white mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xlg:text-6xl 
          leading-snug md:leading-normal xlg:leading-[1.55] font-raleway font-bold">
            All your files in one secure location,
            accessible anywhere
          </h1>
          <p className="mt-5 xlg:mt-10 sm:text-lg
          leading-snug sm:px-16 md:px-48 xlg:px-56 xlg:text-2xl">
            Fylo stores all your most important files in 
            one secure location. Access them wherever you
            need, share and collaborate with friends
            family, and co-workers.
          </p>
          <div className="mt-10 xlg:mt-14">
            <a className="bg-cyan-blue hover:cursor-pointer hover:bg-none
             hover:bg-cyan font-raleway delay-100 py-3 
             px-[15vw] md:px-24 xlg:py-4 xlg:px-28 rounded-3xl 
             xlg:rounded-full xlg:text-lg">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;