import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

import IMG1 from "../assets/projects/avia-b534_008.png";
import IMG2 from "../assets/projects/chief11.png";
import IMG3 from "../assets/projects/earth01.png";
import IMG4 from "../assets/projects/madMax_scene01.jpg";
import IMG5 from "../assets/projects/skull_yshi01.jpg";
import IMG6 from "../assets/projects/statue01.jpg";
import IMG7 from "../assets/projects/stdisc_klingon_rifle01.jpg";

const CGI = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Picture src={IMG1} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG2} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG3} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG4} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG5} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG6} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG7} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>CGI</label>
            <label>
              <a href="#">
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1rem;
`;
const Card = styled.div`
  height: max-content;
  width: max-content;
  overflow: hidden;
  padding: 1rem;
  border: solid 1px var(--color-primary-variant);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  transition: all 0.8s;

  &:hover {
    padding: 1.5rem;
    border-color: var(--color-white);
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9));
  }
  p{
      margin-top: 15px;
  }
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 10px;
  color: var(--color-light);

  label {
    font-size: x-small;
  }
  a {
    text-decoration: none;
    color: var(--color-light);
  }
`;
const Picture = styled.img`
  height: 180px;
`;
export default CGI;
