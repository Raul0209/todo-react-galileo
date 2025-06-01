import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addTask({ title, dueDate: deadline }));
    setTitle("");
    setDeadline("");
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <Form.Group>
        <Form.Label>Tarea</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu tarea"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha Límite</Form.Label>
        <Form.Control
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="mt-3">Agregar</Button>
    </Form>
  );
};

export default TodoForm;
