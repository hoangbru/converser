import { Navigate, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Conversation from "./pages/Conversation";
import LayoutSite from "./layouts";
import Friend from "./pages/Friend";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const RedirectRoute = () => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Signin />;
  }
  return <LayoutSite />;
};

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <RedirectRoute />,
    children: [
      { index: true, element: <Navigate to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "conversations", element: <Conversation /> },
      { path: "friends", element: <Friend /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
