import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Slide from "react-reveal/Slide";
import { RiMessage2Fill } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modal-slice";

const Contact = () => {
  const messaging = useSelector((state) => state.modal.messaging);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(
      modalActions.setMessage({
        name: e.target.name === "name" ? e.target.value : messaging.name,
        email: e.target.name === "email" ? e.target.value : messaging.email,
        message: e.target.name === "message" ? e.target.value : messaging.message,
      })
    );
  };
  return (
    <Container id="message">
      <Jump bottom>
        <IconHeader>
          <h1>
            <RiMessage2Fill />
          </h1>
        </IconHeader>
      </Jump>
      <Fade bottom>
        <h1>Message us</h1>
      </Fade>
      <Wrapper>
        <Form method="POST">
          <Slide left>
            <Field
              type="text"
              name="name"
              placeholder="name"
              value={messaging.name}
              onChange={handleInput}
            />
          </Slide>
          <Slide right>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              value={messaging.email}
              onChange={handleInput}
            />
          </Slide>

          <Slide bottom>
            <Message
              name="message"
              placeholder="Message"
              value={messaging.message}
              onChange={handleInput}
            />
          </Slide>

          <Jump bottom>
            <Button type="submit">
              Send <FiSend />
            </Button>
          </Jump>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  margin-top: 10vh;
  margin-bottom: 16vh;
  padding: 2rem 10rem;

  @media screen and (max-width: 600px) {
    padding: 0.5rem 2rem;
    h1 {
      font-size: 18px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 0.5rem;
`;
const Field = styled.input`
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  width: 50vw;
  color: var(--color-white);
  border: solid 1px var(--color-primary-variant);
  border-radius: 1rem;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  text-transform: capitalize;

  ::placeholder {
    color: var(--color-light);
  }
  :nth-of-type(2) {
    text-transform: lowercase;
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.6rem;
    border-radius: 0.6rem;
    font-size: 13px;
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 0.9rem;
    border-radius: 0.9rem;
    font-size: 25px;
    width: 70vw;
  }
`;

const Message = styled.textarea`
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  width: 50vw;
  height: 15vh;
  color: var(--color-white);
  border: solid 1px var(--color-primary-variant);
  border-radius: 1rem;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  text-transform: capitalize;

  ::placeholder {
    color: var(--color-light);
  }

  /* ======SMALL DEVICES====== */
  @media screen and (max-width: 600px) {
    padding: 0.6rem;
    border-radius: 0.6rem;
    font-size: 13px;
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 0.9rem;
    border-radius: 0.9rem;
    font-size: 25px;
    width: 70vw;
  }
`;
const Button = styled.button`
  padding: 0.8rem;
  width: 8rem;
  margin-top: 10px;
  background-color: var(--color-primary-variant);
  border: solid 1px transparent;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover{
    background-color: var(--color-bg);
    border-color: var(--color-primary-variant);
    color: var(--color-white);
  }
`;
export default Contact;
