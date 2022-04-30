/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Add a Task"
          type="text"
          name="text"
          value={input}
          onChange={handleChange}
        />
        <Button>Create Task</Button>
      </Form>
    </Container>
  );
};

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

// const Title = styled.h1``;

const Form = styled.form``;

const Input = styled.input`
  border-radius: 10px;
  height: 30px;
  width: 200px;
  margin: 0 10px;
  ::placeholder {
    color: purple;
    text-align: center;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  background: #7900ff;
  margin-top: 20px;
  border: none;
  padding: 5px 30px;
  color: white;
  cursor: pointer;
`;
