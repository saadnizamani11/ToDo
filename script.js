let addToDoBtn = document.getElementById('addToDo');
let Delall = document.getElementById('Delall');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoBtn.addEventListener('click', function () {
    let para = document.createElement('P');
    para.innerText = inputField.value;
    para.classList.add('paragraph-styling');
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener('dblclick', function () {
        toDoContainer.removeChild(para);
    });
});
Delall.addEventListener('click', function () {
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }
});
