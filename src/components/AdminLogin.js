import React from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";
import { CgLogIn } from "react-icons/cg";

const AdminLogin = () => {
  const loginData = useSelector((state) => state.modal.loginForm);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(
      modalActions.setLoginForm({
        userName:
          e.target.name === "userName" ? e.target.value : loginData.userName,
        password:
          e.target.name === "pwd" ? e.target.value : loginData.password,
      })
    );
  };
  const handleClose = () => {
    dispatch(
      modalActions.setAdminAcess({
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
            <h2>Sneaking through the secret door,eh?</h2>
          </ModalHeader>
          <Button onClick={handleClose}>
            <AiFillCloseCircle style={{ marginBottom: "-3px" }} />
          </Button>
          <ModalContent>
            <Form method="POST">
              <Field type="text" name="userName" placeholder="User name" value={loginData.userName} onChange={handleInput}/>
              <Field type="password" name="pwd" placeholder="Password" value={loginData.password} onChange={handleInput}/>
              <Submit type="submit">
                Log In <CgLogIn />
              </Submit>
            </Form>
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
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  backdrop-filter: blur(7px);
`;
const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: max-content;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px){
    top: 40%;
      transform: translate(-50%,-60%);
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px){
      top: 30%;
      transform: translate(-50%,-70%);
  }
`;

const Modal = styled.div`
  width: max-content;
  height: max-content;
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
  padding: 2rem;
  background: var(--color-bg);
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    height: 100px;
    padding: 10px;
    h2 {
      font-size: 20px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    height: 100px;
    padding: 10px;
    h2 {
      font-size: 30px;
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
  margin-bottom: 20px;
  overflow-y: scroll;
  padding: 1rem;

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    p {
      font-size: 30px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;
const Field = styled.input`
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  width: 30vw;
  color: var(--color-white);
  border-bottom: solid 1px var(--color-primary-variant);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: var(--color-light);
  }
  :nth-of-type(2) {
    text-transform: lowercase;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.6rem;
    font-size: 13px;
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 1rem;
    font-size: 26px;
    width: 70vw;
  }
`;

const Submit = styled.button`
  padding: 0.8rem;
  width: 8rem;
  margin-top: 10px;
  background-color: var(--color-primary-variant);
  border: solid 1px transparent;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-bg);
    border-color: var(--color-primary-variant);
    color: var(--color-white);
  }
  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 6rem;
    padding: 0.6rem;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px){
    padding: 0.8rem;
    margin-top: 30px;
    width: 15rem;
    font-size: 25px;
  }
`;
export default AdminLogin;
