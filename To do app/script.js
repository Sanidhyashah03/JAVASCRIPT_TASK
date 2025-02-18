


const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


let tasks = [];
let taskId = 1;  

function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((taskObj) => {

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        
        const taskText = document.createElement("h3");
        taskText.textContent = taskObj.task;
        taskElement.appendChild(taskText);

   
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(taskObj);
        taskElement.appendChild(editButton);


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(taskObj);
        taskElement.appendChild(deleteButton);

       
        taskList.appendChild(taskElement);
    });
}

addButton.addEventListener("click", function () {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const newTask = {
            id: taskId++,
            task: taskValue
        };
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
    }
});


function editTask(taskDtl) {
    
    

const findTaskData = tasks.find((obj) => obj.id == taskId);
if (findTaskData) {
    findTaskData.taskId = newTask.trim(); 
    renderTasks(); 
}

    
}

function deleteTask(taskId) {
    tasks.splice(taskId, 1); 
    renderTasks(); 
}
