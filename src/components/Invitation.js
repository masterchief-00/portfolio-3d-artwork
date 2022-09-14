import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import vid from "../assets/planetScene(1min).mp4";
import IMG1 from "../assets/banner/Brabham001.png";
import IMG2 from "../assets/banner/gas_station004.png";
import { FiExternalLink } from "react-icons/fi";
import { MdCollections } from "react-icons/md";

const Invitation = () => {
  return (
    <Container id="gallery">
      <Jump bottom>
        <IconHeader>
          <h1>
            <MdCollections />
          </h1>
        </IconHeader>
      </Jump>
      <Fade bottom>
        <h1>Goodbyes? Haha I don't think so!</h1>
      </Fade>
      <Wrapper>
        <Text>
          <Jump bottom>
            <h1>I've got the feeling, you want to see more!</h1>
          </Jump>
          <Fade bottom>
            <p>
              What you saw here was just a glimpse of what is actually done,
              please visit our Gallery for more
            </p>
          </Fade>
          <Slide bottom>
            <Gate>
              <h1>Gallery</h1>
              <a href="/gallery">
                Click here
                <FiExternalLink />
              </a>
            </Gate>
          </Slide>
        </Text>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={vid} type="video/mp4" />
        </video>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 8rem;
  margin-top: 10vh;
  overflow: hidden;

  /* ============SMALL DEVICES=========== */
  @media screen and (max-width: 600px) {
    padding: 0.5rem 2rem;
    height: 100vh;
    h1 {
      font-size: 18px;
    }
  }
`;
const IconHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: "";
    text-align: center;
    width: 7rem;
    height: 2px;
    margin: 5px;
    background-color: var(--color-white);
  }
`;
const Wrapper = styled.div`
  height: max-content;
  width: max-content;
  padding: 2rem 4rem;
  margin-top: 20px;

  video {
    height: 85vh;
    border-radius: 2rem;
    filter: brightness(40%);
  }

  /* ============SMALL DEVICES=========== */
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80vw;
    height: 80vh;
    border-radius: 2rem;
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      /* bottom, image */ url(${IMG1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    video {
      display: none;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80vw;
    height: 85vh;
    border-radius: 2rem;
    background:
        /* top, transparent black, faked with gradient */ linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      /* bottom, image */ url(${IMG2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    video {
      display: none;
    }
  }
`;
const Text = styled.div`
  position: absolute;
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 15%;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;

  p {
    color: var(--color-light);
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }

  /* ============SMALL DEVICES=========== */
  @media screen and (max-width: 600px) {
    position: unset;
    z-index: unset;
    left: unset;
    transform: unset;
    width: 60vw;
    
    h1{
      font-size: 1.2em;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    position: unset;
    z-index: unset;
    left: unset;
    transform: unset;
    width: 70vw;
    
    h1{
      font-size: 2.7em;
    }
    p{
      font-size: 1.8em;
    }
    a{
      font-size: 1.6em;
    }
  }
`;

const Gate = styled.div`
  margin-top: 60px;
  border: solid 1px var(--color-primary-variant);
  border-radius: 2rem;
  padding: 1rem 3rem;
  width: max-content;
  a {
    color: var(--color-light);
  }

  /* ============SMALL DEVICES=========== */
  @media screen and (max-width: 600px){
    padding: 0.6rem 2.5rem;
    border-radius: 1rem;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    border: solid 2px var(--color-primary-variant);
  }
`;
export default Invitation;
