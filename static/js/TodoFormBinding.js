class TodoFormBinding {
  constructor(
    todoForm,
    titleField,
    dateField,
    isCompleted,
    isImportant,
    addButton,
    cancelButton
  ) {
    this.todoForm = todoForm;
    this.titleField = titleField;
    this.dateField = dateField;
    this.isCompleted = isCompleted;
    this.isImportant = isImportant;
    this.addButton = addButton;
    this.cancelButton = cancelButton;

    this.titleField.addEventListener("keyup", (e) => {
      if (e.target.value.trim().length === 0) {
        this.addButton.style.color = "var(--gray2)";
        this.addButton.style.pointerEvents = "none";
      } else {
        this.addButton.style.color = "rgb(0, 149, 246)";
        this.addButton.style.pointerEvents = "auto";
      }
    });

    this.cancelButton.addEventListener("click", () => {
      this.close();
    });
  }
  open() {
    console.log(this);
    this.todoForm.classList.add("active");
    this.titleField.focus();
  }
  close() {
    this.todoForm.classList.remove("active");
    this.titleField.blur();
  }

  resetFormValues() {
    this.titleField.value = "";
    this.dateField.value = "";
    this.isImportant.checked = false;
    this.addButton.style.color = "var(--gray2)";
    this.addButton.style.pointerEvents = "none";
    this.titleField.focus();
  }

  getFormValues() {
    return {
      title: this.titleField.value,
      date: this.dateField.value,
      isImportant: this.isImportant.checked,
    };
  }
  addTodoOnClick(onClickFunction) {
    this.addButton.onclick = (e) => onClickFunction(this.getFormValues());
  }
}
