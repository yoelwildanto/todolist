// src/TodoList.js
import React, { useState } from 'react';
import './main.css'
import { Button, Checkbox, Input } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'

function TodoList3() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const handleAddTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { text: inputTask, completed: false }]);
      setInputTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="todo-list">
      <h1>Chores ToDo List</h1>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <Checkbox
              borderColor={'green'}
              colorScheme={'green'}
              isChecked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => handleDeleteTask(index)}> <BsTrash/> </button>
          </div>
        ))}
        <hr/>
      </div>
      
      <div className="completed-count">
        Done: {completedTasks.length}
      </div>
      <div className="input-container">
        <Input 
        variant={'outline'} 
        placeholder={'Add todo'}
        width={'500px'}
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <Button margin={'10px'} size={'md'} height={'30px'} width={'100px'} border={'2px'} borderColor={'red.500'} colorScheme='red' onClick={handleAddTask}>ADD TASK</Button>
      </div>
      
    </div>
  );
}

export default TodoList3;
