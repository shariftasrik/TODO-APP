let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
    }

};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    //console.log({tasks});
    updateStats();

};

const deleteTask = (index) => {
    tasks.splice(index,1);
    updateTasksList();
    updateStats();
};

const editTask = (index) => {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = tasks[index].text;

    tasks.splice(index,1);
    updateTasksList();
    updateStats();
};

const updateStats = ()=> {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = (totalTasks === 0) ? 0 : (completeTasks/totalTasks) * 100;
    const progressBar = document.getElementById("progress");


    progressBar.style.width = `${progress}%`;
}

const updateTasksList = () => {
    const taskList = document.getElementById("task-list")
    taskList.innerHTML = "";


    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? "completed" : ""}">
                    <input type="checkbox" class="checkbox" ${
                        task.completed ? "checked" : ""
                    }/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="./images/edit.png" onClick="editTask(${index})" />
                    <img src="./images/delet.png" onClick="deleteTask(${index})" />
                </div>
            </div>
            `;

        listItem.addEventListener("change", () => toggleTaskComplete(index));
        taskList.append(listItem);
    });
};

document.getElementById("newTask").addEventListener("click",function (e) {
        e.preventDefault();
        addTask();
    }
);