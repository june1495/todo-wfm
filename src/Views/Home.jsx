/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Tasks from '../Components/Tasks';

const Home = () => {
  const [todos, setTodos] = useState([]);

  // eslint-disable-next-line consistent-return
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item)),
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
    // console.log(removedArr);
    // console.log(todos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Content>
        <Title
          as={motion.h1}
          animate={{ opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 5 }}
        >
          Todo List
        </Title>
        <Navbar addTodo={addTodo} />
      </Content>
      <Tasks
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  position: absolute;
  top: 50px;
`;
