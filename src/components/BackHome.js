import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";

const BackHome = () => {
  return (
    <Container>
      <Wrapper>
        <a href="/">
          <HiHome />
        </a>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: max-content;
  width: max-content;
`;

const Wrapper = styled.div`
  height: 70px;
  width: 70px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-dark);
  border: solid 1px var(--color-primary-variant);
  border-radius: 50%;
  overflow: hidden;

  a {
    color: var(--color-primary-variant);
    font-size: 35px;
    margin-bottom: -10px;
    transition: all 0.3s ease;

    :hover {
      color: var(--color-white);
      font-size: 30px;
    }
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    height: 55px;
    width: 55px;
    padding: 0;

    a {
      font-size: 25px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    height: 90px;
    width: 90px;
    padding: 2rem;

    a {
      font-size: 35px;
    }
  }
`;
export default BackHome;
