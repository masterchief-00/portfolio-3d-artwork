import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import headerImg from "../assets/planetaryScene_02.jpg";
import arrow from "../assets/down-arrow.svg";


const Header = () => {
  return (
    <Container>
      <Banner>
        <Fade bottom>
          <ItemText>
            <h1>Lorem Ipsum!</h1>
            <p>It is a long established fact that a reader will be distracted</p>
          </ItemText>
        </Fade>
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
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        /* bottom, image */
        url(${headerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const ItemText = styled.div`
  padding-top: 25vh;
  font-size: 20px;
  text-align: center;

  p {
    color: var(--color-light)
  }
`;
const Footer = styled.div``;
const DownArrow = styled.img`
  height: 55px;
  margin-top: 200px;
  animation: animateDown infinite 1.5s;
`;
export default Header;
