import clsx from "clsx";
import { format } from "date-fns";
import Avatar from "../Avatar";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import Header from "../Header";

const ConversationBox = () => {
  return (
    <div className="px-5">
      <Header title="Messages"/>
      <Link
        to={`/conversations/:id`}
        className={clsx(
          `
            w-full 
            relative
            flex 
            items-center 
            space-x-3 
            p-3 
            hover:bg-indigo-500
            rounded-lg
            transition
            cursor-pointer
            bg-neutral-100" : "bg-white
          `
        )}
      >
        <Avatar user={auth.currentUser} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-1">
              <p className="text-md font-semibold text-gray-200">hehe</p>
              <p
                className="
                  text-xs 
                  text-gray-200 
                  font-light
                "
              >
                {format(new Date(), "p")}
              </p>
            </div>
            <p
              className={clsx(
                `
              truncate 
              text-sm
              font-sm
              text-gray-200 font-semibold
              `
              )}
            >
              last messages
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ConversationBox;
