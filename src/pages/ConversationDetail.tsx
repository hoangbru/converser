import { Link } from "react-router-dom";
import Body from "../components/conversation/Body";
import Form from "../components/conversation/Form";
import {
  HiEllipsisHorizontal,
  HiOutlineVideoCamera,
  HiOutlineArrowSmallLeft,
  HiOutlinePhone,
} from "react-icons/hi2";
import Avatar from "../components/Avatar";
import { auth } from "../config/firebase";

const ConversationDetail = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col">
        <div
          className="
        bg-transparent 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm 
    "
        >
          <div className="flex gap-3 items-center">
            <Link
              className="
                block 
                text-white 
                hover:text-indigo-500 
                transition 
                cursor-pointer
                "
              to="/conversations"
            >
              <HiOutlineArrowSmallLeft size={28} />
            </Link>
            <Avatar user={auth.currentUser} />
            <div className="flex flex-col ">
              <div className="font-poppins font-semibold text-gray-200">
                {auth.currentUser?.displayName}
              </div>
              <div className="font-poppins text-sm font-semi-bold text-gray-200">
                Active
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlinePhone
              className="
                text-white
                cursor-pointer
                hover:text-indigo-500
                transition
             "
              size={20}
            />
            <HiOutlineVideoCamera
              className="
                text-white
                cursor-pointer
                hover:text-indigo-500
                transition
             "
              size={22}
            />
            <HiEllipsisHorizontal
              size={30}
              onClick={() => {}}
              className="
                text-white
                cursor-pointer
                hover:text-indigo-500
                transition
                "
            />
          </div>
        </div>
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default ConversationDetail;
