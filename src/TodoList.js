// src/TodoList.js
import React, { useState } from 'react';
import Task from './task';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
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

export default TodoList;
