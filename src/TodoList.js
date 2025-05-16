import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask  }) {
  return (
    <ListGroup>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ListGroup>
  );
}

export default TodoList;
