
//for title
const parentDiv = document.createElement('div');
document.body.appendChild(parentDiv);
const h1 = document.createElement('h1');
h1.innerHTML = 'ToDo List';
parentDiv.appendChild(h1);


//todo count
var totalRemainingTasks = 0;
const todoCount = document.createElement('h2');
todoCount.innerHTML = `Total Remaining Tasks ${totalRemainingTasks}`

parentDiv.appendChild(todoCount);


//for list
const ul = document.createElement('ul');
parentDiv.appendChild(ul);


// input field
const input = document.createElement('input');
input.setAttribute('placeholder', 'Add todo task');
input.setAttribute('type','text');
parentDiv.appendChild(input);


//Add button
const addBtn = document.createElement('button');
addBtn.innerText='Add'
parentDiv.appendChild(addBtn);


//Delete Button
const delBtn = document.createElement('button');
delBtn.innerText='Delete';
parentDiv.appendChild(delBtn);

//complete Button
const completeBtn = document.createElement('button');
completeBtn.innerText = 'Mark Complete';
parentDiv.appendChild(completeBtn);

//adding task to list
addBtn.onclick = () =>{
    if(input.value){
        const newLi = document.createElement('li');
        newLi.innerHTML = `<input type="checkbox">${input.value}</input>`
        ul.appendChild(newLi);
        totalRemainingTasks ++;
        todoCount.innerHTML = `Total Remaining Tasks ${totalRemainingTasks}`
        input.value="";
    }

}


//deleting task
delBtn.onclick = () => {
    let list = ul.getElementsByTagName('li');
    let tasksArr = Array.from(list);
    
    for(let task of tasksArr){
        let checkbox = task.querySelector("input[type='checkbox']");
        if(checkbox.checked){
            ul.removeChild(task);
            totalRemainingTasks--;
            if(totalRemainingTasks < 0) {
                totalRemainingTasks = 0;
            }
            todoCount.innerHTML = `Total Remaining Tasks ${totalRemainingTasks}`

        }
    }
}

completeBtn.onclick = () => {
    let list = ul.getElementsByTagName('li');
    let tasksArr = Array.from(list);


    for(let task of tasksArr){
        let checkbox = task.querySelector("input[type='checkbox']");
        if(checkbox.checked){
            task.style.textDecoration= "line-through";
            totalRemainingTasks--;
            if(totalRemainingTasks < 0) {
                totalRemainingTasks = 0;
            }
            todoCount.innerHTML = `Total Remaining Tasks ${totalRemainingTasks}`
            checkbox.checked = false;

        }
}
}