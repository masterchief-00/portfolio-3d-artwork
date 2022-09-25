import React from "react";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GiPirateCaptain } from "react-icons/gi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { VscSymbolMisc } from "react-icons/vsc";

const AdminHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <label>
            <GiPirateCaptain />
          </label>
          <h1 className="admin-title">Captain's Cabin</h1>
        </Title>
        <Menu>
          <Item>
            <a href="#upload">
              <label>Upload </label>
              <FaCloudUploadAlt />
            </a>
          </Item>
          <Item>
            <a href="#">
              <label>Monitor </label> 
              <TbHeartRateMonitor />
            </a>
          </Item>
          <Item>
            <a href="#">
              <label>Extra </label> 
              <VscSymbolMisc />
            </a>
          </Item>
        </Menu>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  top: 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 12vh;
  padding: 1rem;
  backdrop-filter: blur(5px);

  /*======SMALL DEVICES====== */

  @media screen and (max-width: 600px){
    height: 9vh;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    height: 10vh;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  align-items: center;
  flex-direction: row;
  color: var(--color-primary-variant);

  h1 {
    text-transform: uppercase;
  }
  label {
    font-size: 30px;
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    h1 {
      font-size: 30px;
    }
    label{
        font-size: 50px;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;
  align-items: center;
  height: 100%;

  a {
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
    color: var(--color-primary-variant);
    transition: all 0.3s ease;

    :hover {
      color: var(--color-white);
      font-weight: 900;
    }
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px){
      label{
          display: none;
      }
  }

   /* ======MEDIUM DEVICES======= */

   @media screen and (min-width: 601px) and (max-width: 1024px){
       gap: 1.3rem;
       label{
           display: none;
       }
       a{
           font-size: 45px;
       }
   }
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  label {
    font-size: 20px;
  }
`;
export default AdminHeader;
