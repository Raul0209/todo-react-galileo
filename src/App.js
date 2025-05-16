import './App.scss';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import MyNavbar from './MyNavbar';
import React, { useState } from 'react';

function App(props) {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
  };

    const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
     <MyNavbar>
      </MyNavbar>

    <Container fluid className='app-container'>
      <Row className='justify-content-md-center mt-4'>
        <Col className="sticky-form" md={6}>
          <TodoForm addTask={addTask} />
        </Col>

        <Col className="task-list-container" md={6}>
          <TodoList tasks={tasks} deleteTask={deleteTask} />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
