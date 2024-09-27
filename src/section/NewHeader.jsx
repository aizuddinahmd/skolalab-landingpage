import tmrlogo from "../assets/logo/tmrlogo.png";
import tmrlogo2 from "../assets/logo/tmrlogo2.png";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../components/design/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import skolalab from "../assets/logo/skolalab.png";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div className="flex justify-center">
      <div className="fixed top-5 z-50 bg-n-7 backdrop-blur-sm border-b border-n-5 rounded-full flex">
        {/* Large Screen Navbar */}
        <div className="hidden lg:flex justify-between items-center px-5 xl:px-10 gap-4">
          {/* <a href="/" className="block m-2">
            <img src={tmrlogo} width={40} height={20} alt="Brainwave" />
          </a> */}
          <a href="/" className="block">
            <img src={skolalab} width={90} height={20} alt="logo" />
          </a>
          <nav className="flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`text-md uppercase text-n-1 transition-colors hover:text-color-1 font-code px-6 py-4 ${
                  item.url === pathname.hash ? "text-n-1" : "text-n-1/50"
                } text-xs font-semibold leading-5`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Small Screen Navbar */}
        <div className="flex lg:hidden justify-between items-center px-5 py-1">
          <a href="/" className="block">
            <img src={skolalab} width={90} height={20} alt="logo" />
          </a>
          <Button className="border-none" px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>

        {openNavigation && (
          <div className="lg:hidden rounded-full fixed inset-0 bg-n-7 backdrop-blur-sm z-40 flex flex-col items-center space-y-4 py-1 justify-between">
            <div className="flex flex-row justify-between items-center">
              <a href="/" className="block">
                <img src={skolalab} width={90} height={20} alt="logo" />
              </a>
              <Button
                className="flex items-center justify-center"
                px="px-3"
                onClick={toggleNavigation}
              >
                <MenuSvg openNavigation={openNavigation} />
              </Button>
            </div>
            <nav className="flex flex-col items-center space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className="text-md uppercase text-n-1 transition-colors hover:text-color-1 font-code px-6 py-4 text-center"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
