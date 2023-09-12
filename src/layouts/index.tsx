import { Outlet } from "react-router-dom"
import DesktopSidebar from "../components/sidebar/DesktopSidebar"
import MobileFooter from "../components/sidebar/MobileFooter"

const LayoutSite = () => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="lg:pl-20 h-full ">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutSite