import styled from "styled-components";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";

const Socials = () => {
  return (
    <Container>
      <Anchor href="#" target="_blank">
        <AiFillInstagram />
      </Anchor>
      <Anchor href="#" target="_blank">
        <BsTwitter />
      </Anchor>
      <Anchor href="#" target="_blank">
        <BsFacebook />
      </Anchor>
      <Anchor href="#" target="_blank">
        <BsGithub />
      </Anchor>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 1.9rem 0.9rem;
  bottom: 14rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: max-content;
  left: 1%;
  &:after {
    content: "";
    margin-left: 8px;
    text-align: center;
    width: 2px;
    height: 4rem;
    background-color: var(--color-primary-variant);
  }

  @media screen and (max-width:600px){
    left: -3px;
    bottom: 15rem;
    &:after{
      margin-left: 6px;
      
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px){
    bottom: 20rem;

    &:after{
      margin-left: 12px;
      height: 6rem;
    }
  }
`;
const Anchor = styled.a`
  & {
    color: var(--color-primary-variant);
  }

  &:hover {
    color: var(--color-white);
    transition: 0.5s;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px){
    font-size: 28px;
  }
`;
export default Socials;
