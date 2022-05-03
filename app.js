document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("task"); // Input: type = text.
  const submit = document.getElementById("submit"); // Input: type = submit.
  const list = document.getElementById("list"); // Unordered list.

  // Function: adds task from text input to unordered list.
  function addTask() {
    const done = document.createElement("input"); // Creates Done button.
    done.setAttribute("type", "button");
    done.setAttribute("value", "Done");

    list.innerHTML += "<li>" + task.value + " " + done.outerHTML + "</li>"; // Creates task (<li>)
    task.value = ""; // Clears text input
  }

  // Event listener: clicks submit button when pressing enter on text input.
  task.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      submit.click();
    }
  });
  // Event listener: on click calls addTask function.
  submit.addEventListener("click", addTask);
});
