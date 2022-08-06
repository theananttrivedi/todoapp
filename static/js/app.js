const addButton = document.querySelector(".right-title");
const taskForm = document.querySelector(".task-form");
const cancelButton = document.querySelector(".task-form-left-title");
const todoItems = document.querySelectorAll(".todo-item");
const todoCompleteButtons = document.querySelectorAll(".todo-complete-button");
addButton.addEventListener("click", () => {
  taskForm.classList.add("active");
});

cancelButton.addEventListener("click", () => {
  taskForm.classList.remove("active");
});

todoItems.forEach((todoItem) => {
  todoItem.addEventListener("click", (e) => {
    // Todo doesn't have a p tag with important class
    if (todoItem.querySelector('p[class="important"]') === null) {
      const pElementWithImportantClass = document.createElement("p");
      pElementWithImportantClass.classList.add("important");
      todoItem.appendChild(pElementWithImportantClass);
    } else {
      todoItem.querySelector('p[class="important"]').remove();
    }
  });
});

todoCompleteButtons.forEach((todoCompleteButton) => {
  todoCompleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    if (todoCompleteButton.classList.contains("complete")) {
      todoCompleteButton.classList.remove("complete");
      todoCompleteButton.innerHTML = "";
    } else {
      todoCompleteButton.classList.add("complete");
      todoCompleteButton.innerHTML = "&check;";
    }
  });
});
