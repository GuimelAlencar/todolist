import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);

  return (
    <div classname="App">
      <cd />
      <input ref={inputRef} name='toDoInput'/>
      <button>Add</button>

    </div>
  );
}

export default App;