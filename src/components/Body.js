
import {  Outlet } from "react-router";


import Header from "../components/Header";

const Body = () => {


  return (
    <div>
      <Header />
      <Outlet /> {/* this will render Login, SignUp, Browse based on route */}
    </div>
  );
};

export default Body;
