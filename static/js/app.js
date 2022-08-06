const addButton = document.querySelector(".right-title");
const taskForm = document.querySelector(".task-form");
const cancelButton = document.querySelector(".task-form-left-title");
addButton.addEventListener("click", () => {
  taskForm.classList.add("active");
});

cancelButton.addEventListener("click", () => {
  taskForm.classList.remove("active");
});
