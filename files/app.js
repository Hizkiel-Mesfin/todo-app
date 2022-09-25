const sectionTodo = document.querySelector(".section-todo");

const listItems = document.querySelectorAll(".list-items");

const todos = document.querySelectorAll(".todo");
const itemsLeft = document.querySelector(".count");

itemsLeft.innerText = `${todos.length} items left`;

sectionTodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("radio")) {
    e.target.firstElementChild.classList.add("fa-circle-check");
    e.target.nextElementSibling.style.textDecoration = "line-through";
  } else if (e.target.classList.contains("fa-circle-check")) {
    e.target.classList.remove("fa-circle-check");
    e.target.parentElement.nextElementSibling.style.textDecoration = "none";
  }

  // Left items counter
  let counter = 0;
  todos.forEach((todo) => {
    if (todo.style.textDecoration === "line-through") {
      counter++;
    }
  });

  itemsLeft.innerText = `${todos.length - counter} items left`;

  // All, Active, Completed  and Clear completed functionality

  if (e.target.classList.contains("active")) {
    listItems.forEach((item) => {
      if (
        item.firstElementChild.lastElementChild.style.textDecoration ===
        "line-through"
      ) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  } else if (e.target.classList.contains("all")) {
    listItems.forEach((item) => {
      if (
        item.firstElementChild.lastElementChild.style.textDecoration ===
          "line-through" ||
        item.firstElementChild.lastElementChild.style.textDecoration === ""
      ) {
        item.classList.remove("hide");
      }
    });
  } else if (e.target.classList.contains("completed")) {
    listItems.forEach((item) => {
      if (item.firstElementChild.lastElementChild.style.textDecoration === "") {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  } else if (e.target.classList.contains("clear")) {
    listItems.forEach((item) => {
      if (
        item.firstElementChild.lastElementChild.style.textDecoration ===
        "line-through"
      ) {
        item.remove();
      }
    });
  }
});
