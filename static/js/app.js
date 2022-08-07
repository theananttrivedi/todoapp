function initializeExistingNotes(notesList) {
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
}

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
