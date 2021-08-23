/* eslint-disable no-restricted-globals, prefer-destructuring, import/no-unresolved */
import './style.css';
import todoStatusUpdate from './todoStatusUpdate.js';
import dragDrop from './dragDrop.js';
import deleteCompletedTodoItem from './deleteAll.js';
import addTodo from './addToDo.js';
import edit from './editTask.js';
import deleteOne from './deleteOneTask.js';

const tasks = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

localStorage.setItem('items', JSON.stringify(tasks));
const data = JSON.parse(localStorage.getItem('items'));

const createList = (todoItem) => {
  if (!todoItem) {
    return;
  }

  const todoAppContainer = document.getElementById('todoAppContainer');

  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('item', 'borderBottom', 'draggable');
  todoItemElement.id = todoItem.index;
  todoItemElement.setAttribute('draggable', true);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todoItem.completed;

  const descriptionSpan = document.createElement('span');
  descriptionSpan.classList.add('text');

  if (todoItem.completed) {
    descriptionSpan.classList.add('check');
  }

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash-alt');
  todoAppContainer.appendChild(todoItemElement);
  descriptionSpan.innerHTML = todoItem.description;
  todoItemElement.append(checkbox, descriptionSpan, icon);
  dragDrop(tasks);
  todoStatusUpdate(tasks);
};

addTodo(tasks);
deleteCompletedTodoItem(tasks);

data.forEach((object) => {
  createList(object);
});

deleteOne(tasks);
edit(tasks);
/* eslint-enable no-restricted-globals, prefer-destructuring, import/no-unresolved */
