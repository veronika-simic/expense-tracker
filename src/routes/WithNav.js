import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

function WithNav () {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default WithNav;
