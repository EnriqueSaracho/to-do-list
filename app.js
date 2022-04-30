document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("task");
  const submit = document.getElementById("submit");
  const list = document.getElementById("list");

  function addTask() {
    list.innerHTML += '<li>' + task.value + '</li>';
    
  }

  submit.addEventListener("click", addTask);
});
