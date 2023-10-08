import { Header } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
