import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { SiBlender } from "react-icons/si";
import { BiPrinter } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import { galleryActions } from "../store/gallery-slice";

const Menu = () => {
  const activeTab = useSelector((state) => state.gallery.tab);
  const dispatch = useDispatch();
  const handleSwitch = () => {
    dispatch(
      galleryActions.switchTab({
        type: activeTab.type === "cgi" ? "print" : "cgi",
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        <Fade bottom>
          <Item href="/">
            <IoIosArrowBack /> Back to home
          </Item>
        </Fade>
        <Fade bottom>
          <Item
            href="#"
            className={activeTab.type === "cgi" ? "active-tab" : ""}
            onClick={handleSwitch}
          >
            <SiBlender /> CGI Projects
          </Item>
        </Fade>
        <Fade bottom>
          <Item
            href="#"
            className={activeTab.type === "print" ? "active-tab" : ""}
            onClick={handleSwitch}
          >
            <BiPrinter /> 3D Printing projects
          </Item>
        </Fade>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  height: max-content;
  width: 100%;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 40px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: max-content;
  width: 100%;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const Item = styled.a`
  text-decoration: none;
  color: var(--color-white);
  border: solid 1px var(--color-white);
  border-radius: 0.4rem;
  padding: 1rem;
  transition: all 0.4s;
  font-size: 15px;

  &:hover {
    background-color: var(--color-primary-variant-x);
    border-color: transparent;
    border-radius: 2rem;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 25px;
    padding: 0.4rem;
  }
`;
export default Menu;
