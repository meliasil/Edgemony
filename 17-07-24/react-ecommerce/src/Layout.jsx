import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";


function DefaultLayout() {
  return (
    <div>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout;
