import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";
import useRoutes from "../../hooks/useRoutes";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-hot-toast";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useState } from "react";
import SettingModal from "./SettingModal";

const logOut = {
  label: "Logout",
  onClick: () => {
    signOut(auth).then(() => {
      window.location.pathname = "/";
      toast.success("Logged out successfully");
    });
  },
  href: "#",
  icon: HiArrowLeftOnRectangle,
};

const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SettingModal
        currentUser={auth.currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div
        className="
        hidden 
        lg:fixed 
        lg:inset-y-0 
        lg:left-0 
        lg:z-40 
        lg:w-20 
        xl:px-6
        lg:overflow-y-auto 
        lg:bg-transparent 
        lg:border-r-[1px]
        lg:pb-4
        lg:flex
        lg:flex-col
        justify-between
      "
      >
        <nav className="mt-4 flex flex-col justify-between">
          <Link to="/dashboard" className="w-full h-[50px]">
            <img src="/images/logo-light.png" className="object-cover" alt="" />
          </Link>
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
            <DesktopItem
              href={logOut.href}
              label={logOut.label}
              icon={logOut.icon}
              onClick={logOut.onClick}
            />
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={auth.currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
