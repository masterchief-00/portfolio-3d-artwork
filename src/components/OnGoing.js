import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import { RiTimerFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const OnGoing = () => {
  return (
    <Container id="onGoing">
      <Jump bottom>
        <IconHeader>
          <h1>
            <RiTimerFill />
          </h1>
        </IconHeader>
      </Jump>
      <Fade bottom>
        <h1>On-going Projects</h1>
      </Fade>
      <Wrapper>
        <Slide right>
          <Card>
            <h1>Project Epic</h1>
            <ProjectDetails>
              <label>Since: 25/08/2022</label>
              <label>Target: CGI</label>
              <label>
                <a href="#">
                  See references
                  <FiExternalLink />
                </a>
              </label>
            </ProjectDetails>
          </Card>
        </Slide>
        <Slide right>
          <Card>
            <h1>Klingon Shotgun</h1>
            <ProjectDetails>
              <label>Since: 12/09/2022</label>
              <label>Target: 3D printing</label>
              <label>
                <a href="#">
                  See references
                  <FiExternalLink />
                </a>
              </label>
            </ProjectDetails>
          </Card>
        </Slide>
        <Slide right>
          <Card>
            <h1>UNSC Infinity</h1>
            <ProjectDetails>
              <label>Since: 3/09/2022</label>
              <label>Target: CGI</label>
              <label>
                <a href="#">
                  See references
                  <FiExternalLink />
                </a>
              </label>
            </ProjectDetails>
          </Card>
        </Slide>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: max-content;
  margin-top: 10vh;
  padding: 2rem 8rem;

  /* ============SMALL DEVICES=========== */
  @media screen and (max-width: 600px) {
    padding: 0.5rem 2rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--color-bg-dark);
  height: max-content;
  width: 70vw;
  border: solid 1px var(--color-primary-variant);
  border-radius: 1rem;
  overflow: hidden;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.6rem;
    h1 {
      font-size: 16px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 1rem;
  }
`;
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;

  label {
    font-size: x-small;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
  }

  @media screen and (max-width: 600px) {
    justify-content: space-around;
    label:first-of-type {
      display: none;
    }
  }
  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    label {
      font-size: 18px;
    }
  }
`;
export default OnGoing;
