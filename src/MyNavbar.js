import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

 function MyNavbar() {
  return (
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mi primera APP</Navbar.Brand>
        </Container>
      </Navbar>
  );
}
export default MyNavbar;

