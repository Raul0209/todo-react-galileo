import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TodoForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, description, deadline });
    setTitle('');
    setDeadline('');
  };

  return (
    <Form onSubmit={handleSubmit} className='my-3'>
      <Form.Group>
        <Form.Label>Tarea</Form.Label>
        <Form.Control
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Escribe el titulo de tu tarea'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Escribe la descripcion de tu tarea'
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Fecha Límite</Form.Label>
        <Form.Control
          type='date'
          value={deadline}
          onChange={e => setDeadline(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' className='mt-3'>
        Agregar
      </Button>
    </Form>
  );
}

export default TodoForm;
