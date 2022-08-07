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
const modal = document.querySelector(".todo-item-modal-container");
const deleteButton = document.querySelector(".todo-delete-button");
const cancelButtonModal = document.querySelector(".cancel-button");
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
// todoItems.forEach((todoItem) => {
//   todoItem.addEventListener("click", (e) => {
//     // Todo doesn't have a p tag with important class
//     if (todoItem.querySelector('p[class="important"]') === null) {
//       const pElementWithImportantClass = document.createElement("p");
//       pElementWithImportantClass.classList.add("important");
//       todoItem.appendChild(pElementWithImportantClass);
//     } else {
//       todoItem.querySelector('p[class="important"]').remove();
//     }
//   });
// });

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

function formatDate(dateString) {
  if (dateString === "" || dateString === null || dateString === undefined)
    return "";
  const date = new Date(dateString);
  if (String(date.valueOf()) === NaN) return "";
  return (
    date.getDate() + " " + date.toLocaleString("default", { month: "long" })
  );
}

function setInput() {
  inputFieldValues.title = inputTitle.value;
  inputFieldValues.detail = inputDetail.value;
  inputFieldValues.datetime = formatDate(inputDatetime.value);
  inputFieldValues.isimportant = inputIsimportant.checked;
}

function setInputReset() {
  inputTitle.value = "";
  inputDetail.value = "";
  inputDatetime.value = "";
  inputIsimportant.checked = false;
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
  todoItemHolder.appendChild(todoDatetimeHolder);

  // Setting Values
  todoTitleHolder.innerText = title;
  todoIsimportantHolder.checked = isimportant;
  todoDatetimeHolder.innerHTML = datetime;

  //Adding Event Listeners
  // todoItemHolder = addImportantToggleEventHandler(todoItemHolder);
  todoCompleteButtonHolder = addCompleteToggleEventHolder(
    todoCompleteButtonHolder
  );

  return todoItemHolder;
}

function addNoteToTheToDoList() {
  setInput();
  let note = createNoteElement(inputFieldValues);
  note.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.querySelector(".todo-title").innerHTML);
    console.log(e.currentTarget.querySelector(".todo-title").innerHTML);

    openTodoItemWindow({
      node: e.currentTarget,
    });
  });
  todos.prepend(note);
  setInputReset();
  taskForm.classList.remove("active");
}
inputTitle.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length === 0) {
    addTodo.removeEventListener("click", addNoteToTheToDoList);
    addTodo.style.color = "var(--gray2)";
  } else {
    addTodo.style.color = "rgb(0, 149, 246)";
    addTodo.addEventListener("click", addNoteToTheToDoList);
  }
});

function openTodoItemWindow({ node }) {
  modal.classList.add("active");
  deleteButton.addEventListener("click", () => {
    node.remove();
    modal.classList.remove("active");
  });
}
todoItems.forEach((todoItem) => {
  todoItem.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.querySelector(".todo-title").innerHTML);
    console.log(e.currentTarget.querySelector(".todo-title").innerHTML);

    openTodoItemWindow({
      node: e.currentTarget,
    });
  });
});
