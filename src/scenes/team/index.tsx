import IllustrationStayProductive from "@/assets/illustration-stay-productive.png";
import { TeamType } from "@/shared/types";
import {BsFillArrowRightCircleFill as ArrowIcon} from "react-icons/bs";
import Profile1 from "@/assets/profile-1.jpg";
import Profile2 from "@/assets/profile-2.jpg";
import Profile3 from "@/assets/profile-3.jpg";
import TeamCard from "./TeamCard";
import './style.modules.css';

const teamTestimonials: Array<TeamType> = [
  {
    profileImage: Profile1,
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
    text: "File has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  {
    profileImage: Profile2,
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
    text: "File has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
  {
    profileImage: Profile3,
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
    text: "File has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
  },
]

const Team = () => {
  return (
    <section
      id="team"
      className="py-10 md:h-full mx-auto w-5/6"
    >
     <div className="md:flex items-center gap-12 xlg:gap-14 mt-10">
       <img 
          src={IllustrationStayProductive} 
          alt="illustration stay productive"
          className="basis-1/2 mx-auto"
        />
       <div className="text-white sm:text-xl mt-10 leading-relaxed md:m-0 basis-1/2">
        <h4 className="text-lg sm:text-3xl md:text-4xl xlg:text-5xl font-bold mt-10 font-raleway md:pr-56">
          Stay productive, wherever you are
        </h4>
        <p className="mt-5">
          Never let location be an issue when accessing your files.
          Fylo has you covered for all your file storage needs.
        </p>
        <p className="mt-5">
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>
        <a 
          href="#" 
          className="mt-5 relative text-cyan hover:text-white 
          inline-flex items-center gap-2 hover:fill-white
          after:content-[''] after:h-[1px] after:w-full after:bg-cyan 
          after:absolute after:bottom-[-2px] md:after:bottom-[-6px]
          after:left-0 after:block hover:after:bg-white">
          See how Fylo works
          <ArrowIcon className="h-3 md:h-4" />
        </a>
       </div>
     </div>

      <div className="relative mt-32 md:mt-40">
        <div 
          className="before:absolute before:content-[''] before:bottom-full before:left-3 md:before:left-[-0.5rem] before:w-full 
          md:before:bottom-[93%] before:h-6 sm:before:h-12 before:block before:bg-double-quotes 
          before:bg-no-repeat before:z-10 before-bg-size"
          >
          <div
            className="grid md:grid-cols-3 place-content-center gap-8 md:gap-12 z-20 relative"
            >
              {teamTestimonials.map(teamTestimonial => (
                <TeamCard
                  key={teamTestimonial.name}
                  profileImage={teamTestimonial.profileImage}
                  name={teamTestimonial.name}
                  position={teamTestimonial.position}
                  text={teamTestimonial.text}
                />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;