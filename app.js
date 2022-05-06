document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("task"); // Input: type = text.
  const submit = document.getElementById("submit"); // Input: type = submit.
  const list = document.getElementById("list"); // Unordered list.

  // Function: adds task from text input to unordered list.
  function addTask() {
    const done = document.createElement("input"); // Creates Done button.
    done.setAttribute("type", "button");
    done.setAttribute("value", "Done");
    done.setAttribute("class", "done");

    list.innerHTML += "<li>" + task.value + " " + done.outerHTML + "</li>"; // Creates task (<li>)
    const li = document.createElement("li"); // Makes task an element
    console.log(done.parentElement)
    task.value = ""; // Clears text input

    // for (i = 0; i < done.length; i++) {
    //   done[i].addEventListener("click", () => {});
    // }
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
