import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLogin from "../components/AdminLogin";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";
import OnGoing from "../components/OnGoing";
import Recent from "../components/Recent";
import Socials from "../components/Socials";
import Top from "../components/Top";

const Home = () => {
  const showAdminAccess = useSelector((state) => state.modal.showAdminAccess);  
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Nav />
      <Socials />
      <Top />
      <Recent />
      <OnGoing />
      <Invitation />
      <Contact />
      {showAdminAccess.status && <AdminLogin />}
    </div>
  );
};

export default Home;
