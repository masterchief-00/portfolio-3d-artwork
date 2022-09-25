import React from "react";
import styled from "styled-components";
import AdminHeader from "../components/AdminHeader";
import BackHome from "../components/BackHome";
import ProjectUpload from "../components/ProjectUpload";

const AdminPanel = () => {
  return (
    <Container>
      <AdminHeader />
      <ProjectUpload />
      <BackHome />
    </Container>
  );
};

const Container = styled.div`
    scroll-behavior: smooth;
`;

export default AdminPanel;
