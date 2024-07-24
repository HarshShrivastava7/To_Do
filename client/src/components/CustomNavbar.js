import React from "react";
import { Navbar, Nav } from "rsuite";

function CustomNavbar({ onSelect, activeKey, ...props }) {
  return (
    <div className="App">
      <Navbar {...props}>
        <Navbar.Brand href="#">ToDo</Navbar.Brand>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey="1">Home</Nav.Item>
          <Nav.Item eventKey="2">News</Nav.Item>
          <Nav.Item eventKey="3">Products</Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
