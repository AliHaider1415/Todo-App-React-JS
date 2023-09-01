import { useState } from 'react';
import './App.css';
import Todo_task from './components/Todo_task';

function App() {
  const [tasks, setTasks] = useState([]); // Initialize tasks as an empty array
  const [taskValue, setTaskValue] = useState(''); // Initialize taskValue as an empty string

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskValue(value);
  };

  const handleSubmit = () => {
    if (taskValue.trim() !== '') {
      // Only add the task if it's not empty
      setTasks([...tasks, taskValue]);
      setTaskValue(''); // Clear the input field
      console.log(tasks)
    }
  };
  const handleDelete = (taskToDelete) => {
    // Filter out the task to delete from the tasks array
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };
  const tasks_elem = tasks.map((task) =>{
    return(
      <Todo_task task={task} delete = {handleDelete}></Todo_task>
    )
  })
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ fontSize: "1.8vw", color: "white" }}>Get Things Done!</h1>
        <div className="input_container">
          <input
            type="text"
            value={taskValue}
            onChange={handleChange}
            placeholder='What is the task today?'
          />
          <button onClick={handleSubmit}>Add Task</button>
        </div>
        {tasks_elem}
      </div>
    </div>
  );
}

export default App;
