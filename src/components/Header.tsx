import { FC, useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import MobileNav from "./sidebar/MobileNav";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="flex justify-between mb-4 pt-4 ">
        <div className="text-2xfont-bold text-white">{title}</div>
        <div onClick={() => setIsOpen(true)} className="lg:hidden">
          <HiBars3CenterLeft
            size={25}
            className="text-white cursor-pointer hover:text-indigo-500 transition"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
