import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function Root() {
  return (
    <div className="">
        
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
