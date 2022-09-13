import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import vid from "../assets/planetScene(1min).mp4";
import IMG1 from "../assets/banner/Brabham001.png";
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
              <a href="#">
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
  padding: 2rem;
  margin-top: 20px;

  video {
    height: 85vh;
    border-radius: 2rem;
    filter: brightness(40%);
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
`;
export default Invitation;
