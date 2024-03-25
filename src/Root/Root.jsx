import { Outlet } from "react-router-dom";
import { Header } from "../Pages/Header/Header";
import { Footer } from "../Pages/Footer/Footer";
export const Root = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
