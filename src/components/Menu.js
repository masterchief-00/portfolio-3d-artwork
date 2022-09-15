import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { SiBlender } from "react-icons/si";
import { BiPrinter } from "react-icons/bi";
import Fade from "react-reveal/Fade";

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Fade bottom>
          <Item href="/">
            <IoIosArrowBack /> Back to home
          </Item>
        </Fade>
        <Fade bottom>
          <Item href="#">
            <SiBlender /> CGI Projects
          </Item>
        </Fade>
        <Fade bottom>
          <Item href="#">
            <BiPrinter /> 3D Printing projects
          </Item>
        </Fade>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;

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
  padding: 0.4rem;
  transition: all 0.4s;
  font-size: 15px;

  &:hover {
    background-color: var(--color-primary-variant-x);
    text-decoration: underline;
    border-color: transparent;
    margin-bottom: 1.5em;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 25px;
  }
`;
export default Menu;
