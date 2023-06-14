import React from 'react';
import { Container, Menu, Content, Img, Text, Nav, Btn } from './style';
import navbar__logo from "./img/navbar__logo.png";


export default function Navbar() {
  return (
    <>
      <Nav>
        <Container>
          <Menu>
            <Img src={navbar__logo}></Img>
            <Content>
              <Text>Log In</Text>
              <Text>844-332-6440</Text>
              <Btn>Get Started</Btn>
            </Content>
          </Menu>
        </Container>
      </Nav>
    </>

  )
}


