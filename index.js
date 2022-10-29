export const Task = (props) => {
  const { task } = props; 

  // HTML struktura s props
  return `
    <div class="task">
      <div class="task__body">
        <div class="task__name">${task.name}</div>
        <div class="task__due">${task.due}</div>
      </div>
      <div class="task__done">${task.done? "✓" : "✗"}</div>
    </div>
    `
}

const fetchTasks = () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then((data) => {
    renderTasks(data)
  })
}

  const checkbox = document.querySelector("#checkbox-undone");
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=${!e.target.checked}`)
      .then((response) => response.json())
      .then((data) => {
      renderTasks(data)
  })
    } else {
      fetchTasks();
    }
  } )
   
// vyrenderuje tasky z API
const renderTasks = (data) => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = data.map(t => Task({task: t})).join('')
  };

  fetchTasks();

  
   