import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function TodoItem({ task, index, deleteTask }) {
  return (
    <ListGroup.Item>
      <div>
        <h2>Titulo</h2>
        <span>{task.title}</span>
        <h2>Descripcion</h2>
        <span>{task.description}</span>

        <h2>Fecha limite</h2>
        <span className='text-muted'>{task.deadline}</span>
      </div>

      <Button
        onClick={() => deleteTask(index)}
      >
        Eliminar
      </Button>
    </ListGroup.Item>
  );
}

export default TodoItem;
