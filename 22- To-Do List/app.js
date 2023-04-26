const TodoInput = document.querySelector("#todo-input");
const TodoButton = document.querySelector("#todo-button");

let todos = document.querySelector("#todo-ul");
let toplam = document.querySelector("#toplam");
let tamamlanan = document.querySelector("#tamamlanan");
let btnDelete = document.querySelector("#btn-delete");
let btnDo = document.querySelector("#btn-do");

// add todo
TodoButton.onclick = () => {
  todos.innerHTML += ` <li><i id="btn-do" class="fa-solid fa-check"></i> <p>${TodoInput.value}</p>  <i id="btn-delete" class="fa-regular fa-trash-can"></i></li>`;
  TodoInput.value = "";
  toplam.textContent++;
  if (toplam.textContent >= 1) {
    document.querySelector("#bord").style.borderColor = "transparent";
  } else {
    document.querySelector("#bord").style.borderColor = "red";
  }
};

// delete todo
document.addEventListener("click", (e) => {
  if (e.target.id == "btn-delete") {
    todos.removeChild(e.target.parentElement);
    toplam.textContent--;
    tamamlanan.textContent--;
  }
});

// done todo
document.addEventListener("click", (e) => {
  if (e.target.id == "btn-do") {
    tamamlanan.textContent++;
    e.target.parentElement.style.backgroundColor = "lightgreen";
    todos.appendChild((e.target.parentElement.className = "checked"));
  }
});


