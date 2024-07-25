import React from "react";
import { Navbar, Nav } from "rsuite";
import "../stylesheets/App.css";

function CustomNavbar({ onSelect, activeKey, ...props }) {
  return (
    <div className="App">
      <Navbar
        {...props}
        style={{
          backgroundColor: "#2564cf",
          color: "white",
          borderBottom: "4px solid #2564cf",
        }}
      >
        <Navbar.Brand href="#">To Do</Navbar.Brand>
        
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
