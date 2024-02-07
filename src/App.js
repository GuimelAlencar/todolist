import './App.css';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  
  const inputRef = useRef(null);
  

  
  const [tasks, setTasks] = useState([])
  function addTask() {
    const newTask = {
      id: uuidv4(),
      description: inputRef.current.value
    }

  const newTasks = [newTask, ...tasks]
  setTasks(newTasks)
  }


  return (
    <div classname="App">
      <input ref={inputRef} name='toDoInput'/>
      <button onClick={addTask} >Add</button>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task.description}</span>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;