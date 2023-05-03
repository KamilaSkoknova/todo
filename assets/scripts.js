const input = document.querySelector("#task"); 
const btn = document.querySelector("#btn");
const task = document.querySelector(".todoList");


btn.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    if (newTodo.innerText != "") {
        task.appendChild(newTodo);
        input.value = "";
    }
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="bi bi-check-square-fill ms-2"></i>';
    completedBtn.classList.add('checkbtn');
    newTodo.appendChild(completedBtn);
}

task.addEventListener('click', checked);

function checked(event) {
    const item = event.target;
    if (item.classList[0] === "bi" ) {
        item.classList.add('active');
    }
}
