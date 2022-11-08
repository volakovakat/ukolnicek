import { Task } from "./Task/index.js";

const fetchTasks = () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then(renderTasks)
}

  const checkbox = document.querySelector("#checkbox-undone");
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=${!e.target.checked}`)
      .then((response) => response.json())
      .then(renderTasks)
    } else {
      fetchTasks();
    }
  } )
   
// vyrenderuje tasky z API
const renderTasks = (data) => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = data.map(t => Task(t)).join('')
  };

  fetchTasks();

  
   