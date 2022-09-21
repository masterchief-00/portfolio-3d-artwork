import React from "react";
import { useSelector } from "react-redux";
import CGI from "./CGI";
import Printing from "./Printing";

const Projects = () => {
  const activeTab = useSelector((state) => state.gallery.tab);
  return (
    <div>
      {activeTab.type === "cgi" && <CGI />}
      {activeTab.type === "print" && <Printing />}
    </div>
  );
};

export default Projects;
