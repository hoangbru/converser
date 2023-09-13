import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import SettingModal from "./SettingModal";
import { auth } from "../../config/firebase";
import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";
import toast from "react-hot-toast";
import useRoutes from "../../hooks/useRoutes";

interface MobileNavProps {
  isOpen?: boolean;
  onClose: () => void;
}

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

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const routes = useRoutes();
  const [open, setIsOpen] = useState(false);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[100px]">
                  <div className="flex h-full flex-col overflow-hidden bg-black border-r py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Content */}
                      <SettingModal
                        currentUser={auth.currentUser}
                        isOpen={open}
                        onClose={() => setIsOpen(false)}
                      />
                      <div
                        className="
                          fixed 
                          inset-y-0 
                          left-0 
                          w-full
                          xl:px-6
                          overflow-y-auto 
                          bg-transparent 
                          pb-4
                          flex
                          flex-col
                          justify-between
                        "
                      >
                        <nav className="mt-4 flex flex-col justify-between">
                          <ul
                            role="list"
                            className="flex flex-col items-center space-y-1"
                          >
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
                            onClick={() => {
                              onClose
                              setIsOpen(true)
                            }}
                            className="cursor-pointer hover:opacity-75 transition"
                          >
                            <Avatar user={auth.currentUser} />
                          </div>
                        </nav>
                      </div>
                      {/* content end */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNav;
