import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <Container>
    <Title>Todo List</Title>
    <Button>Create Task</Button>
  </Container>
);

export default Navbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf9f9;
  height: 40vh;
  width: 100vw;
`;

const Title = styled.h1``;

const Button = styled.div`
  border-radius: 10px;
  background: #7900ff;
  margin-top: 20px;
  padding: 5px 30px;
  color: white;
  :hover {
    letter-spacing: 2px;
    transition: 1s;
  }
`;
