/* eslint-disable no-empty */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { motion, AnimatePresence } from 'framer-motion';
import EditForm from './EditForm';
import Variants from '../utils/variants';

const Tasks = ({ todos, removeTodo, completeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const [show, setShow] = useState(false);
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
    setShow(!show);
  };

  if (edit.id) {
    return <EditForm edit={edit} addTodo={submitUpdate} />;
  }

  return (
    <Container>
      <TaskTitle
        as={motion.h2}
        animate={{ opacity: [0, 1] }}
        transition={{ ease: 'easeOut', duration: 5 }}
      >
        All Tasks
      </TaskTitle>
      <TaskContent>
        <AnimatePresence>
          {todos.length ? (
            todos.map((todo, index) => (
              <Card
                className="box1"
                key={index}
                as={motion.div}
                variants={Variants}
                animate="visible"
                exit="hidden"
              >
                <Title className="colorized">{index}</Title>
                <Content className="colorized">{todo.text}</Content>
                <Icons>
                  <Icon1
                    className="colorized"
                    onClick={() => completeTodo(todo.id)}
                  >
                    <CheckIcon />
                  </Icon1>
                  <Icon1
                    className="colorized"
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  >
                    <EditIcon />
                  </Icon1>
                  <Icon1
                    className="colorized"
                    onClick={() => removeTodo(todo.id)}
                  >
                    <DeleteIcon />
                  </Icon1>
                </Icons>
              </Card>
            ))
          ) : (
            <motion.div variants={Variants} animate="visible">
              No hay tareas
            </motion.div>
          )}
        </AnimatePresence>
      </TaskContent>
    </Container>
  );
};

export default Tasks;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: fit-content;
`;
const TaskTitle = styled.h2`
  margin: 30px;
`;
const Card = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 180px;
  border: 1px solid black;
  box-shadow: -4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 25px;
  /* .colorized {
      color: blue;
    } */
`;
const TaskContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  ${Card}:nth-child(4n+1) {
    color: blue;
  }
  ${Card}:nth-child(4n+2) {
    color: orange;
  }
  ${Card}:nth-child(4n+3) {
    color: purple;
  }
  ${Card}:nth-child(4n+4) {
    color: darkcyan;
  }
`;
const Title = styled.div`
  border: 1px solid black;
  width: 80px;
  margin: 10px 10px;
  padding: 1px 5px;
  border-radius: 10px;
`;

const Content = styled.div`
  font-size: 14px;
  height: 50%;
  overflow: hidden;
  padding: 10px 10px;
`;

const Icons = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
`;
const Icon1 = styled.div`
  cursor: pointer;
`;
