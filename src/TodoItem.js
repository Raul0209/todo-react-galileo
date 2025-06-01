import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "./taskSlice";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{task.title}</strong>
        <div className="text-muted small">Límite: {task.deadline || "Sin fecha"}</div>
      </div>
      <Button variant="danger" size="sm" onClick={() => dispatch(deleteTask(task._id))}>
        Eliminar
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
