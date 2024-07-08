function createTask(event) {
  event.preventDefault();
  let ul=document.getElementById('tasks');
  let li=document.createElement('li');
  let description=document.getElementById('new-task-description');
  li.setAttribute('id', description.value);
  li.appendChild(document.createTextNode(description.value));
  ul.appendChild('li');
}


document.addEventListener("DOMContentLoaded", () => {
    createTask();
});

function deleteTask() {
  let ul=document.getElementById('tasks');
  ul.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  deleteTask();
});
