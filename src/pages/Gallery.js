import React from "react";
import styled from 'styled-components'
import IMG1 from '../assets/banner/gas_station004.png'
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import Tada from "react-reveal/Tada";

import Menu from "../components/Menu";
import CGI from "../components/CGI";

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
              <p>
                You just arrived to the gallery!
              </p>
            </Jump>
          </Fade>
          <Menu />
        </ItemText>
        </Banner>
        <CGI />
        </Container>
     );
}
 
const Container=styled.div`
    height: max-content;
    width: max-content;
`
const Banner=styled.div`
    height: 90vh;
    width: 100vw;
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      /* bottom, image */ url(${IMG1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

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
export default Gallery;