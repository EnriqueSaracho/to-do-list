document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("task");
  const submit = document.getElementById("submit");
  const list = document.getElementById("list");

  function addTask() {
    const done = document.createElement("input");
    done.setAttribute("type", "button");
    done.setAttribute("value", "Done");

    list.innerHTML += "<li>" + task.value + "</li>";
    task.value = "";
  }

  submit.addEventListener("click", addTask);
});
