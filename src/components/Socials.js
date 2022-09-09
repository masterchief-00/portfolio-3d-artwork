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
    margin-left: 5px;
    text-align: center;
    width: 2px;
    height: 4rem;
    background-color: var(--color-primary-variant);
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
`;
export default Socials;
