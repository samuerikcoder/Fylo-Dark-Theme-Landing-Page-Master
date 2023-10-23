import Logo from "@/assets/logo.svg";
import Link from "./Link";

const pages = ["Features", "Team", "Sign In", ];

const Header = () => {
  const flexBetween = `flex items-center justify-between`
  return (
    <header className="bg-dark-blue-intro">
      <nav>
        <div className={`w-full py-6 ${flexBetween}`}>
          <div className={`mx-auto w-5/6 ${flexBetween}`}>
            <img className="w-16 xs:w-24 md:w-40" src={Logo} alt="logo" />

            <div className={`flex align-center gap-4 xs:gap-8 md:gap-14`}>
              {pages.map(page => (
                <Link page={page}/>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;