import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "./taskSlice";
import { ListGroup, Spinner } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!Array.isArray(tasks)) {
    return <p className="text-danger">Error al cargar las tareas. Intenta de nuevo.</p>;
  }

  if (tasks.length === 0) {
    return <p className="text-center text-muted">No hay tareas pendientes.</p>;
  }

  return (
    <ListGroup>
      {tasks.map((task) => (
        <TodoItem key={task._id || task.id} task={task} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
