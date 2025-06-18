const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearAllBtn = document.getElementById('clearAllBtn');

function updateTaskCount() {
  const count = document.querySelectorAll('li.task-item').length;
  taskCount.innerText = `Tasks Remaining: ${count}`;
}

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.innerText = taskText;

  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  const editBtn = document.createElement('button');
  editBtn.innerText = '✏️';
  editBtn.className = 'edit';
  // Edit button replaces task text with input to edit
  editBtn.addEventListener('click', () => {
    const newInput = prompt("Edit your task:", span.innerText);
    if (newInput) span.innerText = newInput;
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '🗑️';
  deleteBtn.className = 'delete';
  // Delete button removes the task item from the list
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    updateTaskCount();
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  updateTaskCount();
}

addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    createTaskElement(task);
    taskInput.value = '';
  } else {
    alert("Please enter a task!");
  }
});

clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  updateTaskCount();
});

// If we press enter it call the addBtn
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
