// src/TodoList.js
import React, { useState } from 'react';
import Task from './task';

function TodoList2() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');
  const [taskCount, setTaskCount] = useState(1); // Initialize the count to 1

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      const taskWithCount = `${taskCount}. ${inputTask}`; // Add the count to the task
      setTasks([...tasks, taskWithCount]);
      setTaskCount(taskCount + 1); // Increment the count
      setInputTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default TodoList2;
