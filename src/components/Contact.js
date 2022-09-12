import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { RiMessage2Fill } from "react-icons/ri";
import {FiSend} from 'react-icons/fi';

const Contact = () => {
  return (
    <Container>
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
          <Field type="text" name="name" placeholder="name" />
          <Field type="email" name="email" placeholder="Email" />
          <Message name="message" placeholder="Message" />
            <Button type="submit">Send <FiSend /></Button>
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

  @media screen and (max-width: 600px){
      padding: 0.6rem;
      border-radius: 0.6rem;
      font-size: 13px;
      width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px){
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
  @media screen and (max-width: 600px){
      padding: 0.6rem;
      border-radius: 0.6rem;
      font-size: 13px;
      width: 60vw;

  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px){
    padding: 0.9rem;
      border-radius: 0.9rem;
      font-size: 25px;
      width: 70vw;
  }
`;
const Button=styled.button`
    padding: 0.8rem;
    width: 8rem;
    margin-top: 10px;
    background-color: var(--color-primary-variant);
    border: solid 1px transparent;
    border-radius: 1rem;
    font-size: 16px;
    font-weight: bold;    
`
export default Contact;
