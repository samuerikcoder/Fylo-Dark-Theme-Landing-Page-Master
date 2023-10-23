type Props = {
  profileImage: string;
  name: string;
  position: string;
  text: string;
}

const TeamCard = ({
  profileImage,
  name,
  position,
  text
}: Props) => {
  return (
    <div
      className="bg-dark-blue-testimonials text-white text-sm md:text-base px-6 py-7
      rounded-md md:px-8 md:py-9 shadow-[10px_10px_12px_#19212f]"
    >
      <p>
        {text}
      </p>
      <div className="flex items-center gap-3 mt-6">
        <figure className="rounded-full overflow-hidden">
          <img 
            src={profileImage} 
            className="w-8" 
            alt={`the profile image from ${name}`} />
        </figure>
        <div className="">
          <h5 className="font-bold text-xs">
            {name}
          </h5>
          <small className="md:text-xs">
            {position}
          </small>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;