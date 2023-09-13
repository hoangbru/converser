import { format } from "date-fns";

const MessageBox = () => {
  return (
    <>
      <div className="flex gap-3 p-2">
        <div className="flex justify-center items-center gap-2">
          <div className="text-sm rounded-md w-fit overflow-hidden bg-neutral-500">
            <div className="p-2 text-white">Hi bro</div>
          </div>
          <span className="text-xs text-gray-400">
            {format(new Date(), "p")}
          </span>
        </div>
      </div>
      {/* isOwn */}
      <div className="justify-end p-2">
        <div className="flex justify-end items-center gap-2">
          <span className="text-xs text-gray-400">
            {format(new Date(), "p")}
          </span>
          <div className="text-sm rounded-md w-fit overflow-hidden bg-indigo-500 text-white">
            <div className="p-2 text-white">cc</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
