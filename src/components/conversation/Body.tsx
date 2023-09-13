import { useRef } from "react";
import MessageBox from "./MessageBox";

const Body= () => {
const bottomRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex-1 overflow-y-auto px-2">
        <MessageBox/>
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
};

export default Body;