import { useEffect, useState } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import AddToDo from './components/AddTodo';
import AllToDos from './components/AllToDos';

function App() {
  const [activeKey, setActiveKey] = useState(null);
  const [list, setList] = useState([]);
  const [newToDo, setNewToDo] = useState(false);

  useEffect(() => {
    async function getAllToDos() {
        try{
            const getAll = await fetch("http://localhost:5000/todos", {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            const data = await getAll.json();
            const totalToDos = [];
            data["data"].forEach(value => {
              var todo = {
                id : value._id,
                desc : value.description,
                publishedDate: value.publishedDate
              };
              totalToDos.push(todo);
            });
            setList(totalToDos);
        } catch(error) {
            console.log(error.message);
        }
    }
    getAllToDos();
  }, [newToDo]);

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <div className="App">
      <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />
      <AddToDo setNewToDo = {setNewToDo} newToDo = {newToDo} />
      <AllToDos list = {list} setNewToDo = {setNewToDo} newToDo = {newToDo} />
      
    </div>
  );
}

export default App;
