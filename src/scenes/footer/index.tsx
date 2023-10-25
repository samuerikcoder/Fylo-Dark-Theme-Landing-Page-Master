import Logo from '@/assets/logo.svg';
import LocationIcon from '@/assets/icon-location.svg';
import PhoneIcon from '@/assets/icon-location.svg';
import EmailIcon from '@/assets/icon-email.svg';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-16 pt-72 bg-dark-blue-footer text-white" id='signin'>
      <div className="w-5/6 mx-auto">
        <img src={Logo} className='w-36'/>
      </div>
      <div className="md:flex w-5/6 mx-auto mt-16 gap-20">
        <div className="flex gap-5 items-center md:items-start md:basis-2/4">
          <img src={LocationIcon} alt="location icon" className='self-start md:pt-1' />
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing ellit, sed do
            eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </div>

        <div className='md:basis-1/4'>
          <div className="flex gap-5 items-center md:items-start mt-4 md:mt-0">
            <img src={PhoneIcon} alt="phone icon" />
            <p>
              +1-543-123-4567
            </p>
          </div>

          <div className="flex gap-5 items-center mt-4">
            <img src={EmailIcon} alt="email icon" />
            <p>
              example@fylo.com
            </p>
          </div>
        </div>

        <div className='md:basis-1/6 mt-20 md:mt-0 md:flex md:items-start md:flex-col'>
          <a className='mt-4 hover:font-bold block cursor-pointer md:mt-0'>About Us</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Jobs</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Press</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Blog</a>
        </div>

        <div className='md:basis-1/6 mt-16 md:mt-0 md:flex md:items-start md:flex-col'>
          <a className='mt-4 hover:font-bold block cursor-pointer md:mt-0'>Contact Us</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Terms</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Privacy</a>
          <a className='mt-4 hover:font-bold block cursor-pointer'>Blog</a>
        </div>

        <div className='md:basis-1/6 mt-16 flex items-center md:items-start justify-center gap-5 md:mt-0'>
          <div className='rounded-full flex items-center hover:cursor-pointer
            border-white border-2 border-solid p-2 hover:text-cyan hover:border-cyan'>
            <FaFacebookF />
          </div>
          <div className='rounded-full flex items-center hover:cursor-pointer
            border-white border-solid border-2 p-2 hover:text-cyan hover:border-cyan'>
            <FaTwitter />
          </div>
          <div className='rounded-full flex items-center hover:cursor-pointer
            border-white border-2 border-solid p-2 hover:text-cyan hover:border-cyan'>
            <FaInstagram />
          </div>
        </div>
      </div>

      <p className="text-xs text-white text-center mt-20 md:text-sm">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-attribution">Frontend Mentor</a>. 
        Coded by <a href="https://www.github.com/samuerikcoder" className="text-blue-attribution">Samuerikcoder</a>.
      </p>
    </footer>
  );
};

export default Footer;