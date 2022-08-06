const addButton = document.querySelector(".right-title");
const taskForm = document.querySelector(".task-form");
const cancelButton = document.querySelector(".task-form-left-title");
const todoItems = document.querySelectorAll(".todo-item");
const todos = document.querySelector(".todos");
const todoCompleteButtons = document.querySelectorAll(".todo-complete-button");
const inputTitle = document.querySelector('input[name="title"]');
const inputDatetime = document.querySelector('input[name="datetime"]');
const inputDetail = document.querySelector('input[name="detail"]');
const inputIsimportant = document.querySelector('input[name="isimportant"]');
const addTodo = document.getElementById("add-todo");
addButton.addEventListener("click", () => {
  taskForm.classList.add("active");
});

cancelButton.addEventListener("click", () => {
  taskForm.classList.remove("active");
});

function addImportantToggleEventHandler(todoItem) {
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

function addCompleteToggleEventHolder(todoCompleteButton) {
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
  return todoCompleteButtons;
}

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

const inputFieldValues = {
  title: "",
  detail: "",
  datetime: "",
  isimportant: false,
};

function setInput() {
  inputFieldValues.title = inputTitle.value;
  inputFieldValues.detail = inputDetail.value;
  inputFieldValues.datetime = inputDatetime.value;
  inputFieldValues.isimportant = inputIsimportant.checked;
}

{
  /* <div class="todo-item">
<p class="todo-title">Revise Python</p>
<p class="todo-date">12 July</p>
<p class="important"></p>
<div class="todo-complete-button complete">&check;</div>
</div> */
}

function createNoteElement({ title, detail, datetime, isimportant }) {
  // Created Elements With respective Classes
  let todoItemHolder = document.createElement("div");
  todoItemHolder.classList.add("todo-item");

  let todoTitleHolder = document.createElement("p");
  todoTitleHolder.classList.add("todo-title");

  let todoIsimportantHolder = document.createElement("p");
  todoIsimportantHolder.classList.add("important");

  let todoDatetimeHolder = document.createElement("p");
  todoDatetimeHolder.classList.add("todo-date");

  let todoCompleteButtonHolder = document.createElement("div");
  todoCompleteButtonHolder.classList.add("todo-complete-button");

  // Setting Hierarchy
  todoItemHolder.appendChild(todoTitleHolder);
  if (isimportant) {
    todoItemHolder.appendChild(todoIsimportantHolder);
  }
  todoItemHolder.appendChild(todoCompleteButtonHolder);

  // Setting Values
  todoTitleHolder.innerText = title;
  todoIsimportantHolder.checked = isimportant;
  todoDatetimeHolder.innerText = datetime;

  //Adding Event Listeners
  todoItemHolder = addImportantToggleEventHandler(todoItemHolder);
  todoCompleteButtonHolder = addCompleteToggleEventHolder(
    todoCompleteButtonHolder
  );

  return todoItemHolder;
}

addTodo.addEventListener("click", () => {
  setInput();
  todos.appendChild(createNoteElement(inputFieldValues));
});
