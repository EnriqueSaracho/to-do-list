document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input"); // Input: type = text.
  const submit = document.getElementById("submit"); // Input: type = submit.
  const ul = document.getElementById("ul"); // Unordered list.

  // Function: adds task from text input to unordered list.
  function addTask() {
    const li = document.createElement("li"); // Creates <li>
    li.innerHTML = input.value;
    ul.appendChild(li);

    const x = document.createElement("button");
    x.innerHTML = "x";
    li.appendChild(x);

    x.addEventListener("click", () => {
      x.parentElement.style.display = "none";
    });
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
