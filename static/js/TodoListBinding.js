class TodoListBinding {
  constructor(element) {
    this.todoListElement = element;
    this.todos = [];
  }

  static addImportantToggleEventHandler(todoItem) {
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
    return todoItem;
  }

  static addCompleteToggleEventHolder(todoCompleteButton) {
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
    return todoCompleteButton;
  }

  static createTodoElement({ id, title, date, isCompleted, isImportant }) {
    let todoElementHolder = document.createElement("div");
    todoElementHolder.classList.add("todo-item");
    todoElementHolder.setAttribute("data-id", id);

    let todoElementTitle = document.createElement("p");
    todoElementTitle.classList.add("todo-title");

    let todoElementIsImportant = document.createElement("p");
    todoElementIsImportant.classList.add("important");

    let todoElementDateTime = document.createElement("p");
    todoElementDateTime.classList.add("todo-date");

    let todoCompleteButton = document.createElement("div");
    todoCompleteButton.classList.add("todo-complete-button");

    // Setting Hierarchy
    todoElementHolder.appendChild(todoElementTitle);
    if (isImportant) {
      todoElementHolder.appendChild(todoElementIsImportant);
    }
    todoElementHolder.appendChild(todoCompleteButton);
    todoElementHolder.appendChild(todoElementDateTime);

    // Setting Values
    todoElementTitle.innerText = title;
    todoElementDateTime.innerHTML = date;
    if (isCompleted) {
      todoCompleteButton.classList.add("complete");
      todoCompleteButton.innerHTML = "&check;";
    }

    //Adding Event Listeners
    todoElementHolder =
      TodoListBinding.addImportantToggleEventHandler(todoElementHolder);
    todoCompleteButton =
      TodoListBinding.addCompleteToggleEventHolder(todoCompleteButton);

    return todoElementHolder;
  }

  static generateTodoUniqueID() {
    const uniqueIDLength = 12;
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    let uniqueID = "";
    for (let i = 1; i <= uniqueIDLength; i++) {
      uniqueID += characters.charAt(Math.random() * charactersLength);
    }
    return uniqueID;
  }

  update() {
    /* Remove all the elements from the list */
    while (this.todoListElement.firstChild) {
      this.todoListElement.removeChild(this.todoListElement.firstChild);
    }

    for (const todo of this.todos) {
      this.todoListElement.appendChild(
        TodoListBinding.createTodoElement({
          id: todo.id,
          title: todo.title,
          date: todo.date,
          isCompleted: todo.isCompleted,
          isImportant: todo.isImportant,
        })
      );
    }
  }

  add({ title, date, isCompleted, isImportant }) {
    this.todos.push({
      id: TodoListBinding.generateTodoUniqueID(),
      title,
      date,
      isCompleted,
      isImportant,
    });
    this.update();
  }

  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.update();
  }
}
