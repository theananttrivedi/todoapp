class TodoFormBinding {
  constructor(todoForm, titleField, dateField, isCompleted, isImportant) {
    this.todoForm = todoForm;
    this.titleField = titleField;
    this.dateField = dateField;
    this.isCompleted = isCompleted;
    this.isImportant = isImportant;
  }
  open() {
    this.todoForm.classList.add("active");
    this.titleField.focus();
  }
  close() {
    this.todoForm.classList.remove("active");
    this.titleField.blur();
  }
}
