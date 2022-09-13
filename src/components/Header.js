import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Jump from "react-reveal/Jump";

import headerImg from "../assets/banner/planetaryScene_02.jpg";
import bannerImg from "../assets/banner/astronaut03.png";
import displayImg from "../assets/banner/astronaut08.png";
import arrow from "../assets/down-arrow.svg";

const Header = () => {
  return (
    <Container id="home">
      <Banner>
        <ItemText>
          <Fade bottom>
            <Tada>
              <h1>Lorem Ipsum!</h1>
            </Tada>
          </Fade>
          <Fade bottom>
            <Jump>
              <p>
                It is a long established fact that a reader will be distracted
              </p>
            </Jump>
          </Fade>
        </ItemText>
        <Footer>
          <DownArrow src={arrow} />
        </Footer>
      </Banner>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Banner = styled.div`
  height: 90vh;
  width: 80vw;
  margin: auto;
  border: solid 1px transparent;
  border-radius: 15px;
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    /* bottom, image */ url(${headerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      /* bottom, image */ url(${bannerImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      /* bottom, image */ url(${displayImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const ItemText = styled.div`
  padding-top: 30vh;
  font-size: 20px;
  text-align: center;

  p {
    margin-top: 20px;
    color: var(--color-light);
  }

  /* ======SMALL DEVICES====== */
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding-top: 15vh;

    h1 {
      font-size: 65px;
    }
    p {
      font-size: 25px;
      font-weight: 100;
    }
  }
`;
const Footer = styled.div``;
const DownArrow = styled.img`
  height: 55px;
  margin-top: 120px;
  animation: animateDown infinite 1.5s;

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px){
    margin-top: 450px;
  }
`;
export default Header;
