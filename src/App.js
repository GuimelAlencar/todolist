import './App.css';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Imput
  const inputRef = useRef(null);
  
  //Create Tasks
  const [tasksList, setTasksList] = useState([])
  function addTask() {
    const newTask = {
      id: uuidv4(),
      description: inputRef.current.value
    }
  const newTasksList = [newTask, ...tasksList];
  setTasksList(newTasksList);
  }

  //Delete Tasks
  function deleteTask(taskToBeDeleted){
    const newTasksList = tasksList.filter(task => task !== taskToBeDeleted);
    setTasksList(newTasksList);
  };

  return (
    <div classname="App">
      <input ref={inputRef} name='toDoInput'/>
      <button onClick={addTask} >Add</button>
      <br />

      {tasksList.map((mainTask, index) => (
        <div key={index}>
          <span>{mainTask.description}</span>
          <br />
          <button onClick={() => (deleteTask(mainTask))}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;