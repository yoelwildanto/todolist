// src/Task.js
import styled from '@emotion/styled';
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import {DeleteIcon} from '@chakra-ui/icons'
// const Span = styled.span`
// width: 50vw`

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <span>{task}</span>
      <IconButton onClick={onDelete}>Delete</IconButton>
    </div>
  );
}

export default Task;
