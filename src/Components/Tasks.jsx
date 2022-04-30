/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import EditForm from './EditForm';

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
    setShow(!show);
  }
  // if (edit.id) {
  //   return <EditForm edit={edit} addTodo={submitUpdate} />;
  // }

  return (
    <Container>
      <TaskTitle>All Tasks</TaskTitle>
      <TaskContent>
        {todos.length ? (
          todos.map((todo, index) => (
            <Card className="box1" key={index}>
              <Title className="colorized">React</Title>
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
          <div>No hay tareas</div>
        )}
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
  width: 250px;
  height: 180px;
  border: 1px solid black;
  border-radius: 5px;
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
