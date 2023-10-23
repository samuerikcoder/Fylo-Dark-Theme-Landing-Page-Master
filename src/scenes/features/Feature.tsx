type Props = {
  icon: string;
  title: string;
  description: string;
}

const Feature = ({
  icon,
  title,
  description
}: Props) => {
  return (
    <div className='mt-5 sm:mt-16 mx-auto text-center text-white'>
      <div className="flex justify-center">
        <img src={icon} alt="" />
      </div>

      <h4 className="mt-8 text-xl sm:text-3xl font-bold font-raleway">
        {title}
      </h4>
      <p className="mt-3 leading-relaxed px-4 sm:px-24 xlg:px-32 sm:text-xl">
        {description}
      </p>

    </div>
  );
};

export default Feature;