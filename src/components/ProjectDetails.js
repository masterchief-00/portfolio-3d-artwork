import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const activeProject = useSelector((state) => state.gallery.currentProject);
  const handleClose = () => {
    dispatch(
      modalActions.setIsopen({
        status: false,
      })
    );
  };
  return (
    <Container>
      <DarkBG onClick={handleClose} />
      <Centered>
        <Modal>
          <ModalHeader>
            <h2>{activeProject.name}</h2>
          </ModalHeader>
          <Button onClick={handleClose}>
            <AiFillCloseCircle style={{ marginBottom: "-3px" }} />
          </Button>
          <ModalContent>
            <p>Project details...</p>
            <p>Project Name:{activeProject.name}</p>
          </ModalContent>
        </Modal>
      </Centered>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  height: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
const DarkBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  backdrop-filter: blur(10px);
`;
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = styled.div`
  width: 70vw;
  height: 90vh;
  background: var(--color-bg-dark);
  border: solid 1px var(--color-bg-variant);
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 80vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 90vw;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: var(--color-bg);
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    height: 100px;
    h2 {
      font-size: 40px;
    }
  }
`;
const Button = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: solid 1px var(--color-bg-variant);
  font-size: 18px;
  color: var(--color-white);
  background: var(--color-bg-dark);
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-bg-dark);
  }
  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    font-size: 16px;
    padding: 5px 13px;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 30px;
    margin-top: -20px;
    padding: 8px 16px;
  }
`;
const ModalContent = styled.div`
  margin-top: 20px;
  overflow-y: scroll;

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
    p{
      font-size: 30px;
    }
  }
`;
export default ProjectDetails;
