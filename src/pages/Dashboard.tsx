import Header from "../components/Header";
import { auth } from "../config/firebase";

const Dashboard = () => {
  console.log("auth:", auth.currentUser);

  return (
    <div className="h-full">
      <Header title="Dashboard" />
    </div>
  );
};

export default Dashboard;
