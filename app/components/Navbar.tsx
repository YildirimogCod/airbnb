import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";

import UserNav from "./UserNav";
import SearchComponent from "./SearchComponent";
const Navbar = () => {
  return (
    <nav className="w-full border-b shadow-md">
      <div className="flex justify-between items-center container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-32 hidden lg:block"
          />

          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block lg:hidden w-12"
          />
        </Link>
        <SearchComponent />
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
