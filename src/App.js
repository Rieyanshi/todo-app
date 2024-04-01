// src/App.js

import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';
function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
