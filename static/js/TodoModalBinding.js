class TodoModalBinding {
  constructor(
    modalElement,
    deleteButton,
    okButton,
    modalTodoFormElement,
    modalTitleField,
    modalDateField,
    modalIsImportantField
  ) {
    this.modalElement = modalElement;
    this.deleteButton = deleteButton;
    this.okButton = okButton;
    (this.modalTodoFormElement = modalTodoFormElement),
      (this.modalTitleField = modalTitleField),
      (this.modalDateField = modalDateField),
      (this.modalIsImportantField = modalIsImportantField);
    this.deleteButton.onclick = this.onPressedDeleteButton;
    this.okButton.onclick = this.onPressedOkButton;
  }

  getFormFields() {
    return {
      title: this.modalTitleField.value,
      date: this.modalDateField.value,
      isImportant: this.modalIsImportantField.checked,
    };
  }
  onPressedOkButton(callback) {
    callback(this.getFormFields());
  }

  onPressedDeleteButton(callback) {
    callback({ todoID: this.todoID });
  }

  populateFormFields({ todoID, title, date, isImportant }) {
    this.todoID = todoID;
    this.modalTitleField.value = title;
    this.modalDateField.value = date;
    this.modalIsImportantField.checked = isImportant;
  }

  show({ title, date, isImportant }) {
    this.modalElement.classList.add("active");
    this.populateFormFields({ title, date, isImportant });
  }

  hide() {
    this.modalElement.classList.remove("active");
  }
}
