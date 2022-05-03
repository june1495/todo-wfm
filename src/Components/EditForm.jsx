/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Variants from '../utils/variants';

const EditForm = ({ addTodo, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : '');
  const inputRef = useRef();
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
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <AnimatePresence>
      <Container
        as={motion.div}
        variants={Variants}
        animate="visible"
        exit="hidden"
      >
        <Title>Edit Task</Title>
        <Content>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Edit task"
              type="text"
              name="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <Button>Update</Button>
          </Form>
        </Content>
      </Container>
    </AnimatePresence>
  );
};

export default EditForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* margin-top: 95px; */
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 250px;
  height: 180px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 25px;
`;

const Title = styled.h2`
  margin: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.textarea`
  width: 250px;
  height: 120px;
  border: none;
  outline: none;
  ::placeholder {
    text-align: center;
    color: purple;
    padding: 30px 0px;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  background: #7900ff;
  margin-top: 20px;
  border: none;
  padding: 5px 30px;
  width: 100px;
  color: white;
  cursor: pointer;
`;
