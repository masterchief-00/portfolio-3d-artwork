import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modal-slice";

const ProjectDetails = () => {
  const dispatch = useDispatch();

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
            <h5>Project Title</h5>
          </ModalHeader>
          <Button onClick={handleClose}>
            <AiFillCloseCircle style={{ marginBottom: "-3px" }} />
          </Button>
          <ModalContent>
            <p>Project details...</p>
          </ModalContent>
        </Modal>
      </Centered>
    </Container>
  );
};

const Container = styled.div``;
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
  width: 250px;
  height: 170px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
const Button = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
`;
const ModalContent = styled.div``;
export default ProjectDetails;
