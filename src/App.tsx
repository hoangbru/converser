import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

function App() {
  
  return (
    <div className="h-screen">
      <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
