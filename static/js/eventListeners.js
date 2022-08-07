addButton.addEventListener("click", () => {
  taskForm.classList.add("active");
  inputTitle.focus();
});

cancelButtonModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
cancelButton.addEventListener("click", () => {
  taskForm.classList.remove("active");
  inputTitle.blur();
});
