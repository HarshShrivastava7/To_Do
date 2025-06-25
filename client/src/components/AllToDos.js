import React, { useState } from "react";
import { Panel, Input, InputGroup, Modal, Button } from "rsuite";
import { Plus, Trash } from "@rsuite/icons";
import UpdateRoundIcon from "@rsuite/icons/UpdateRound";
import "../stylesheets/App.css";

const styles = {
  width: 300,
  marginBottom: 10,
};

function AllToDos({ list, newToDo, setNewToDo }) {
  const [updatedDesc, setUpdatedDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [updatedId, setUpdatedId] = useState("");

  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  async function deleteTodo(id) {
    try {
      const dltToDo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await dltToDo.json();
      console.log(data);
      setNewToDo(!newToDo);
    } catch (error) {
      console.log(error.message);
    }
  }

  function updateToDo(value) {
    setUpdatedId(value.id);
    handleOpen("xs");
    setUpdatedDesc(value.desc);
  }

  async function handleKeyPress(event) {
    if (event.key === "Enter") {
      try {
        const updateTodo = await fetch(
          `http://localhost:5000/todos/${updatedId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              description: updatedDesc,
              publishedDate: new Date().toDateString(),
            }),
          }
        );

        const data = await updateTodo.json();
        console.log(data);
        setNewToDo(!newToDo);
      } catch (error) {
        console.log(error.message);
      }
      setOpen(false);
    }
  }

  return (
    <div className="App flex">
      <Panel
        header="All ToDo2's"
        shaded
        style={{
          backgroundColor: "#fffefb",
        }}
      >
        {list.map((value, index) => {
          return (
            <InputGroup style={styles}>
              <InputGroup.Addon>
                <Trash
                  style={{ cursor: "pointer", color: "#2564cf" }}
                  onClick={() => deleteTodo(value.id)}
                />
              </InputGroup.Addon>
              <Input value={value.desc.toUpperCase()} disabled />
              <InputGroup.Addon>
                <UpdateRoundIcon
                  style={{ cursor: "pointer", color: "#2564cf" }}
                  onClick={() => updateToDo(value)}
                />
              </InputGroup.Addon>
            </InputGroup>
          );
        })}

        <Modal size={size} open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Update ToDo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup style={styles}>
              <InputGroup.Addon>
                <Plus style={{ cursor: "pointer", color: "#2564cf" }} />
              </InputGroup.Addon>
              <Input
                placeholder="Update the task."
                value={updatedDesc}
                onChange={(e) => setUpdatedDesc(e)}
                onKeyPress={handleKeyPress}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
            <Button
              onClick={() => handleKeyPress({ key: "Enter" })}
              appearance="primary"
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    </div>
  );
}

export default AllToDos;
