import { useForm } from 'react-hook-form';

const GetStarted = () => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }
  
  return (
    <section className="mx-auto w-5/6">
      <div className="grid place-content-center">
        <div className="bg-dark-blue-intro py-10 px-6 text-center rounded-md 
          text-white translate-y-1/2 max-w-xl md:max-w-5xl xlg:max-w-7xl md:px-28 md:py-14 shadow-[6px_6px_0px_#11151d]">
          <h6 className="font-semibold text-xl md:text-3xl font-raleway">Get early access today</h6>
          <p className="mt-5 md:px-10">It only takes a minute to sing up and our
             free starter tier is extremely generous. If
             you have any questions, our support team
             would be happy to help you.
          </p>

          <form 
            action=""
            onSubmit={onSubmit}
            className='md:flex gap-10 items-center'
          >
            <input 
              className='mt-5 w-full rounded-full px-5 py-4 pl-8 text-black text-xs 
              md:text-sm outline-none basis-5/7'
              type='text'
              placeholder='email@example.com'
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
            />
            {
              errors.email && (
                <small className='text-light-red-error mt-1 md:absolute md:bottom-4 md:left-[14%]'>
                  Please enter a valid email address
                </small>
              )
            }
            <button
              className='mt-5 w-full rounded-full px-2 py-3 
              bg-cyan-blue hover:bg-cyan hover:bg-none basis-2/5'
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;