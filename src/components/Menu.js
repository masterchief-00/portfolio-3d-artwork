import React from "react";
import styled from 'styled-components'
import {IoIosArrowBack} from 'react-icons/io'
import {SiBlender} from 'react-icons/si'
import {BiPrinter} from 'react-icons/bi'

const Menu = () => {
    return ( 
        <Container>
            <Wrapper>
                <Item href="/"><IoIosArrowBack /> Back to home</Item>
                <Item href="#"><SiBlender /> CGI Projects</Item>
                <Item href="#"><BiPrinter /> 3D Printing projects</Item>
            </Wrapper>
        </Container>
     );
}
 

const Container=styled.div`
    margin-top: 80px;
`
const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`
const Item=styled.a`
    text-decoration: none;
    color: var(--color-white);
    border:solid 1px var(--color-white);
    border-radius: 0.4rem;
    padding: 0.4rem;
    transition: all 0.4s;
    font-size: 15px;

    &:hover{
        background-color: var(--color-primary-variant-x);
        text-decoration: underline;
        border-color: transparent;
        margin-bottom: 1.5em;
    }
`
export default Menu;