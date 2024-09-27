import { brainwave } from "../assets";
import tmrlogo from "../assets/logo/tmrlogo.png";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../components/design/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toogleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className={`fixed top-5 z-50 bg-n-5 backdrop-blur-sm border border-n-6 lg:bg-n-5 lg:backdrop-blur-sm rounded-full flex `}
      >
        <div className="flex items-center px-5 xl:px-10 max-xl:py-4 gap-x-4 xl:flex-row flex-col">
          <a href="#" className="block m-2">
            <img src={tmrlogo} width={40} height={20} alt="Brainwave" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } xl:static xl:flex`}
          >
            <div className="relative z-2 flex items-center justify-center m-auto xl:flex-row flex-col">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative text-md
                 uppercase text-n-1 transition-colors hover:text-color-1 font-code px-6 py-6 md:py-4 lg:-mr-0.25 ${
                   item.url === pathname.hash
                     ? "z-2 lg:text-n-1"
                     : "lg'text-n-1/50"
                 } lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1`}
                >
                  {item.title}
                </a>
              ))}
              <HamburgerMenu />
            </div>
          </nav>
        </div>
        <Button
          className="m-auto mr-1 xl:hidden border-none"
          px="px-3"
          onClick={toogleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
