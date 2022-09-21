import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Tada from "react-reveal/Tada";

import Menu from "../components/Menu";

import IMG1 from "../assets/banner/gas_station004.png";
import IMG2 from "../assets/banner/robot_guy004.png";
import IMG3 from "../assets/banner/bot39_5.jpg";
import Projects from "../components/Projects";

const Gallery = () => {
  return (
    <Container>
      <Banner>
        <ItemText>
          <Fade bottom>
            <Tada>
              <h1>THE GALLERY!</h1>
            </Tada>
          </Fade>
          <Fade bottom>
            <Jump>
              <p>You just arrived to the gallery!</p>
            </Jump>
          </Fade>
        </ItemText>
        <Menu />
      </Banner>
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    padding: 0;
  }
`;
const Banner = styled.div`
  height: 90vh;
  width: 90vw;
  margin: auto;
  border-radius: 2rem;
  background:
        /* top, transparent black, faked with gradient */ linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    /* bottom, image */ url(${IMG1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding: 0 2rem;
    border-radius: 0;

    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      /* bottom, image */ url(${IMG2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 100vw;
    height: 80vh;
    padding: 0 2rem;
    border-radius: 0;

    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      /* bottom, image */ url(${IMG3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  font-size: 20px;
  text-align: center;

  p {
    margin-top: 20px;
    color: var(--color-light);
  }

  /* ======SMALL DEVICES====== */
  @media screen and (max-width: 600px) {
    padding-top: 10vh;
    font-size: 20px;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding-top: 20vh;

    h1 {
      font-size: 65px;
    }
    p {
      font-size: 25px;
      font-weight: 100;
    }
  }
`;
export default Gallery;
