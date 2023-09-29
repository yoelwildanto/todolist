// src/TodoList.js
import React, { useState } from 'react';
import './main.css'
import { Button, Checkbox, Input, IconButton, Box } from '@chakra-ui/react'
import{DeleteIcon} from '@chakra-ui/icons'
// import { BsTrash } from 'react-icons/bs'
// import styled from '@emotion/styled';
// const Span = styled.span`
// width: 100vw`

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
      <Box w={'100vw'}  className="tasks">
        {tasks.map((task, index) => (
          <Box display="flex" alignItems={'center'} flexDirection={'row'} p={'10px 60px'} key={index} className="task" gap={'20px'}>
            <Checkbox p={'0px 20px'}
              borderColor={'#6CA38D'}
              colorScheme={'green'}
              isChecked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <Box color={'white'} as={'span'} w={'80vw'} className={task.completed ? 'completed' : ''}>{task.text}</Box>
            {/* <Button borderColor={'pink'} width={'25px'} colorScheme='red' outline={'pink'} leftIcon={<BsTrash/>} onClick={() => handleDeleteTask(index)}> </Button> */}
            {/* <button onClick={() => handleDeleteTask(index)}> <BsTrash/> </button> */}
            <IconButton 
            variant='outline'
            colorScheme='#FFB2B6'
            color='#FFB2B6'
            // _hover={'#FFB2B6'}
            // icon={<DeleteIcon/>}
            // colorScheme='re
            // bgColor={'blue'}
            icon={<DeleteIcon />}
            onClick={() => handleDeleteTask(index)} />
          </Box>
        ))}
        <hr/>
      </Box>
      
      <div className="completed-count">
        Done : {completedTasks.length}
      </div>
      <div className="input-container">
        <h3>Add ToDo</h3>
        <Input 
        color={'white'}
        variant={'outline'} 
        borderColor={'#5E5E5E'}
        // placeholder={'Add todo'}
        width={'80vw'}
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <Button fontFamily={'sans-serif'} textDecorationThickness={'10'} bg={'#8ECEF5'} textColor={'black'} margin={'10px 10px 10px 0px'} size={'md'} height={'40px'} width={'120px'} border={'2px'} borderColor={'transparent'} colorScheme='blue.500' onClick={handleAddTask}>ADD TASK</Button>
      </div>
      
    </div>
  );
}

export default TodoList3;
