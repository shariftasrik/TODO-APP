let tasks = [];

const addTask = ()=> {
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.value.trim()

    if(text){
        tasks.push({text:text, completed: false});

        updateTasksList();
    }
    
};


updateTasksList = ()=> {
    const taskList =  document.getElementById('task-list')
    taskList.innerHTML = ''


    tasks.forEach(task =>
        {
            const listItem = document.createElement('li')

            listItem.innerHTML = `
            <div class="taskItem">
                <div class="task">
                    <input type="checkbox" class="checkbox"/>
                    <p>Finish this project</p>
                </div>
                <div class="icon">
                </div>
            </div>
            `
        }
    )
}

document.getElementById('newTask').addEventListener('click',
function(e){e.preventDefault()
    addTask();
}
)