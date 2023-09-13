import { Outlet } from "react-router-dom"
import DesktopSidebar from "../components/sidebar/DesktopSidebar"

const LayoutSite = () => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="lg:pl-20 h-full px-5">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutSite