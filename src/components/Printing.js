import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";

import IMG1 from "../assets/projects/blaster_5.jpg";
import IMG2 from "../assets/projects/klingon_pistol01.jpg";
import IMG3 from "../assets/projects/orville_rifle03.jpg";
import IMG4 from "../assets/projects/picard_rifle01_.jpg";
import IMG5 from "../assets/projects/shockrifle01.jpg";
import IMG6 from "../assets/projects/klingonMiner01.jpg";
import IMG7 from "../assets/projects/stdisc_klingon_rifle01.jpg";
import IMG8 from "../assets/projects/skull_yshi01.jpg";
import IMG9 from "../assets/projects/skull_lihnZee05.jpg";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";
import ProjectDetails from "./ProjectDetails";
import { galleryActions } from "../store/gallery-slice";



const Printing = () => {
  const modalActive = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleDetails = (e) => {
    e.preventDefault();
    const projectId=e.target.id;
    
    dispatch(
      modalActions.setIsopen({
        status: true,
      })
    );
    dispatch(
      galleryActions.loadProjectDetails(projectId)
    )
  };


  return (
    <Container>
      <Wrapper>
        <Card>
          <Picture src={IMG1} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>3D Printing</label>
            <label>
              <a href="#" id={8} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={9} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={10} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={11} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={12} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={13} onClick={handleDetails}>
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
            <label>3D Printing</label>
            <label>
              <a href="#" id={14} onClick={handleDetails}>
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG8} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>3D Printing</label>
            <label>
              <a href="#" id={15} onClick={handleDetails}>
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
        <Card>
          <Picture src={IMG9} />
          <p>Project Title goes here</p>
          <ItemDetails>
            <label>Completed: 01/01/2020</label>
            <label>3D Printing</label>
            <label>
              <a href="#" id={16} onClick={handleDetails}>
                See more
                <FiExternalLink />
              </a>
            </label>
          </ItemDetails>
        </Card>
      </Wrapper>
      {modalActive.status && <ProjectDetails />}

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
  justify-items: center;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  height: max-content;
  width: max-content;
  overflow: hidden;
  padding: 1rem;
  border: solid 1px var(--color-primary-variant-x);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-dark);
  transition: all 0.4s;

  &:hover {
    padding: 0.5rem;
    border-color:var(--color-primary-variant);
    background-color: var(--color-bg-variant);
  }
  p{
      margin-top: 15px;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    p{
      font-size: 27px;
    }
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

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    gap: 6rem;
    label{
      font-size: 20px;
    }
  }
`;
const Picture = styled.img`
  height: 180px;

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    height: 370px;
  }
`;
export default Printing;
