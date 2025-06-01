
import MyNavbar from './MyNavbar';
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <>
     <MyNavbar>
      </MyNavbar>

      <Container fluid className="app-container">
        <Row className="justify-content-md-center mt-4">
          <Col className="sticky-form" md={6}>
            <h2 className="text-center mb-4">Mis Tareas y Metas</h2>
            <TodoForm />
          </Col>

          <Col className="task-list-container" md={6}>

            <TodoList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
