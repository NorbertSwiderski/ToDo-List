
    let addButton = document.querySelector('.app_addButton-js');

addButton.addEventListener("click", function(){
    
    const inputText = document.querySelector('.app_input-js').value;
    const taskList = document.querySelector('.task_list-js');

    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerText = inputText;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Usuń zadanie";
    deleteButton.setAttribute("onClick", "removeMe(this)");

    span.appendChild(deleteButton);
    div.appendChild(span);
    taskList.appendChild(div);
    // div.appendChild(span);
    // div.appendChild(deleteButton);
    // taskList.appendChild(div);
})
function removeMe(info) {
    info.parentElement.remove();
}

