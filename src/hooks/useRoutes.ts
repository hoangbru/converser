import { useMemo } from "react";
import { 
  HiOutlineHome, 
  HiOutlineUsers, 
  HiOutlineChatBubbleOvalLeftEllipsis
} from 'react-icons/hi2';
import useConversation from "./useConversation";


const useRoutes = () => {
  const pathname = window.location.pathname;
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Dashboard', 
      href: '/dashboard', 
      icon: HiOutlineHome,
      active: pathname === '/dashboard'
    },
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: HiOutlineChatBubbleOvalLeftEllipsis,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Friends', 
      href: '/friends', 
      icon: HiOutlineUsers, 
      active: pathname === '/friends'
    },

  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;