import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() { 
const [tasks, setTasks] = useState([])
useEffect(() => {
  fetch('http://127.0.0.1:3000/tasks').then(r => r.json()).then(data => setTasks(data))
}, [])

const render = (taskArr) => {
  
    taskArr.map(task => {
      
        <div>
          <h2>{task.name}</h2>
          <h3>{task.priority}</h3>
          <h4>{task.complete}</h4>
        </div>
      
    })
  
}
  return (
    <div className="App">

        <h1>Task manager 10000</h1>
        <div>{tasks.map(task => <div>{task.name}</div>)}</div>
            
        

    </div>
  );
}

export default App;
