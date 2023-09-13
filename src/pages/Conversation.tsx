import ConversationBox from "../components/conversation/ConversationBox";
import EmptyState from "../components/EmptyState";

const Conversation = () => {
  return (
    <div className="h-full">
      <aside
        className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        lg:border-r 
        lg:border-gray-200 
        overflow-y-auto 
        block w-full left-0
        "
      >
        <ConversationBox />
      </aside>
      <div
        className="
          hidden
          lg:pl-80 
          h-full 
          lg:block
        "
      >
        <EmptyState />
      </div>
    </div>
  );
};

export default Conversation;
