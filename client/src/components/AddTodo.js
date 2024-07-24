import React, { useState } from "react";
import { IconButton, Input, InputGroup } from "rsuite";
import { Plus, Trash } from "@rsuite/icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const styles = {
  width: 300,
  marginBottom: 10,
};

function AddToDo({setNewToDo, newToDo}) {
  const [inputValue, setInputValue] = useState("");
  const [isFirstClick, setFirstClick] = useState(false);
  

  async function handleKeyPress(event) {
    if (event.key === "Enter") {
        try{
            const addTodo = await fetch("http://localhost:5000/todos", {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    description : inputValue,
                    publishedDate : (new Date()).toDateString()
                })
            });

            const data = await addTodo.json();
            // console.log(data);
            setNewToDo(!newToDo);
    
        } catch(error) {
            console.log(error.message);
        }
        
        console.log(inputValue);
        setInputValue("");
        setFirstClick(false);
    }
  }

  

  return (
    <div className="App flex">
      <InputGroup style={styles} onClick={() => setFirstClick(true)}>
        <InputGroup.Addon>
          <div className="icon-wrapper">
            <TransitionGroup>
              <CSSTransition
                key={!isFirstClick ? "plus" : "trash"}
                timeout={300}
                classNames="icon"
                unmountOnExit
              >
                {!isFirstClick ? <Plus style = {{cursor : "pointer"}} /> : <Trash style = {{cursor : "pointer"}} />}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </InputGroup.Addon>
        <Input
          placeholder="Add a task."
          value={inputValue}
          onChange={(e) => setInputValue(e)}
          onKeyPress={handleKeyPress}
        />
      </InputGroup>
    </div>
  );
}

export default AddToDo;
