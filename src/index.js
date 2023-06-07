import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToDoList/>,
  document.getElementById('root')
);
