import { auth } from "../config/firebase";

const Dashboard = () => {
  console.log("auth:", auth.currentUser);

  return <div>Dashboard</div>;
};

export default Dashboard;
