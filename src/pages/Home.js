import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";
import OnGoing from "../components/OnGoing";
import Recent from "../components/Recent";
import Socials from "../components/Socials";
import Top from "../components/Top";

const Home = () => {
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
    </div>
  );
};

export default Home;
