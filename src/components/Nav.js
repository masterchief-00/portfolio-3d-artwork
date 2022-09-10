import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import {RiTimerFill} from 'react-icons/ri'
import {MdCollections} from 'react-icons/md'
const Nav = () => {
  return (
    <Container>
      <Anchor href="#">
        <FiHome />
      </Anchor>
      <Anchor href="#">
        <FaAward />
      </Anchor>
      <Anchor href="#">
        <RiTimerFill />
      </Anchor>
      <Anchor href="#">
        <MdCollections />
      </Anchor>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 1.9rem 0.9rem;
  bottom: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: max-content;
  left: 93%;
  border: solid 1px transparent;
  border-radius: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  z-index: 3;

  /* ======SMALL DEVICES====== */
  @media screen and (max-width:600px){
     flex-direction: row;
     left: 50%;
     transform: translate(-50%);
     bottom: 1rem;
     width: max-content;
     padding: 0.5rem 0.5rem;
     gap: 1.2rem;
     border-radius: 1rem;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px){
    flex-direction: row;
     left: 50%;
     transform: translate(-50%);
     bottom: 1rem;
     width: max-content;
     padding: 1.2rem 2.2rem;
     gap: 3rem;
     border-radius: 2rem;
  }
`;

const Anchor = styled.a`
  padding: 0.6rem;
  border-radius: 30%;
  color: var(--color-white);
  background: transparent;

  :hover {
    transition: 0.5s;
    color: var(--color-primary-variant);
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 601px) and (max-width: 1024px){
    font-size: 25px;
  }
`;
export default Nav;
