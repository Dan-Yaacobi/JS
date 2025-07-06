const inputText = document.getElementById("taskInput")
const submitButton = document.getElementById("addTaskBtn")
const doList = document.getElementById("taskList")
const totalTasks = document.getElementById("total_tasks")
const tasksCompleted = document.getElementById("tasks_completed")
let tasksCount = 0
let taskCompleteCount = 0

function taskComplete(task){
    if (task.style.textDecoration == "line-through"){
        task.style.textDecoration = "none"
        updateCompletedTasks(-1)
    }
    else{
        task.style.textDecoration = "line-through"
        updateCompletedTasks(1)
    }
}

function deleteTask(task){
    updateTotalTasks(-1)
    task.remove()
}

function updateTotalTasks(amount){
    tasksCount += amount;
    totalTasks.textContent = `Total tasks: ${tasksCount}`
}

function updateCompletedTasks(amount){
    taskCompleteCount += amount;
    tasksCompleted.textContent = `Completed tasks: ${taskCompleteCount}`
}

submitButton.addEventListener("click", () => {
    if (!inputText.value == ""){
        console.log("empty")
        let newAdd = document.createElement("li")
        newAdd.textContent = inputText.value
        inputText.value = ""
        doList.appendChild(newAdd)
        createButtons(newAdd)
        updateTotalTasks(1)
        
    }
})

function createButtons(task){
    const completeButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    completeButton.textContent = "Complete"
    deleteButton.textContent = "Delete"

    completeButton.addEventListener("click" , () =>taskComplete(task))
    deleteButton.addEventListener("click", () => deleteTask(task))
    task.appendChild(completeButton)
    task.appendChild(deleteButton)
}