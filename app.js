document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input"); // Input: type = text.
  const submit = document.getElementById("submit"); // Input: type = submit.
  const ul = document.getElementById("ul"); // Unordered list.

  // Function: adds task from text input to unordered list.
  function addTask() {
    const li = document.createElement("li"); // Creates <li>
    li.innerHTML = input.value;
    ul.appendChild(li);
    
    const x = document.createElement("button")
    x.innerHTML = "x"
    li.appendChild(x);

    x.addEventListener("click", () => {
      x.parentElement.style.display = "none"
    })

    // const done = document.createElement("input"); // Creates Done button.
    // done.setAttribute("type", "button");
    // done.setAttribute("value", "Done");
    // done.setAttribute("class", "done");

    // list.innerHTML += "<li>" + task.value + " " + done.outerHTML + "</li>"; // Creates task (<li>)
    // const li = document.createElement("li"); // Makes task an element
    // task.value = ""; // Clears text input

    // for (i = 0; i < done.length; i++) {
    //   done[i].addEventListener("click", () => {});
    // }
  }

  // Event listener: clicks submit button when pressing enter on text input.
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      submit.click();
    }
  });
  // Event listener: on click calls addTask function.
  submit.addEventListener("click", addTask);
});
