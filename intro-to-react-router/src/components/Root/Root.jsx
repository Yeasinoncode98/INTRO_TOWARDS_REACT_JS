import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./Root.css";

const Root = () => {
  const navigation = useNavigation();

  const isNavigating = Boolean(navigation.location);

  return (
    <div>
      <Header></Header>

      <div className="root-main">
        <SideBar></SideBar>
        {isNavigating && <span>Loading...!!!!</span>}
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 * 1.use : userPromise > Suspense > promise > use(usersPromise)
 * 2.[less used so far] > useState + useeffect ( ()=>{},[])
 * 3.set loader in the route defination : Load Data Before router Component is rendered
 */
