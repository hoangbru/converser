import { useMemo } from "react";
import { 
  HiArrowLeftOnRectangle, 
  HiOutlineUsers, 
  HiOutlineChatBubbleOvalLeftEllipsis
} from 'react-icons/hi2';
import useConversation from "./useConversation";
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase";
import { toast } from "react-hot-toast";

const useRoutes = () => {
  const pathname = window.location.pathname;
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
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
      active: pathname === '/users'
    },
    {
      label: 'Logout', 
      onClick: () => {
        signOut(auth)
        .then(() => {
          window.location.pathname = "/"
          toast.success('Logged out successfully')
        })
      },
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;