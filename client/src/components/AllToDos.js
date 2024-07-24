import React from "react";
import { Panel, Text } from "rsuite";
import { IconButton, Input, InputGroup } from "rsuite";
import { Plus, Trash } from "@rsuite/icons";
const styles = {
    width: 300,
    marginBottom: 10,
  };
function AllToDos({list, newToDo, setNewToDo}) {
    async function deleteTodo(id) {
        try {
            const dltToDo = await fetch(`http://localhost:5000/todos/${id}`, {
                method : "DELETE",
                headers: {
                    'Content-Type' : 'application/json'
                }

            });
            const data = await dltToDo.json();
            setNewToDo(!newToDo);
        }catch(error) {
            console.log(error.message);
        }
    }
  return (
    <div className="App">
      <Panel header="All ToDo's" shaded>
      {list.map((value, index) => {
        return <InputGroup style={styles}>
        <InputGroup.Addon>
          <Trash onClick = {() => deleteTodo(value.id)}/>
             
        </InputGroup.Addon>
        <Input
          value={value.desc.toUpperCase()}
          disabled
        />
      </InputGroup>
      })}
      
      </Panel>
    </div>
  );
}

export default AllToDos;
