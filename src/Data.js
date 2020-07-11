import ManipulateDOM from "./DOM";

const ManipulateData = (() =>{
    //Data stores everything
    let data = [];

    const projectsContainer     = document.querySelector('.projectsContainer');
    const inputCreateProject = document.querySelector('#inputCreateProject');
    let projectList = document.querySelector('.projectList');

    /* From the addTaskForm */
    const taskList = document.querySelector(".taskList");
    const taskName = document.querySelector("#taskName");
    const dateDue = document.querySelector("#dateDue");
    const notes = document.querySelector("#notes");
    const projectCategory = document.querySelector(".projectCategory");
    const cancelButton = document.querySelector(".cancelButton");
    const saveButton = document.querySelector(".saveButton");

    let projectTitleName = document.querySelector(".projectName");
    
    const yesButton = document.querySelector(".yesButton");
    

    // Function Factories
    const projectMaker = (projectName, tasks) => {
        return {projectName, tasks};
    };

    const taskMaker = (taskName, dateDue, status, notes) => {
        return {taskName, dateDue, status, notes};
    };

    /* ==========================================================
       PROJECT PANE
       ==========================================================
    */

    // Add Project on Project Pane
    const addProject = () => {
        inputCreateProject.addEventListener("keydown", event=> {
            if(event.key == "Enter"){
                event.preventDefault();
                if(inputCreateProject.value !== ""){
                    data.push(projectMaker(inputCreateProject.value, []));
                    renderProject(data);
                }
                inputCreateProject.value = "";
                ManipulateDOM.hideProjectForm();
            }
            event.stopPropagation();
        })
    }

    // renderProject iterates over the data array and displays the elements inside the array to the webpage
    const renderProject = (object) =>{
        projectList.innerHTML = "";
        projectCategory.innerHTML= "";
        let projectArray = object.map(a => a.projectName);
        for(let i = 0; i < projectArray.length; i++){
            ManipulateDOM.createProject(projectArray[i]);
            ManipulateDOM.addProjectOption(projectArray[i]);
        }
    }

    const viewProjectTasks = () => {
        projectList.addEventListener("click", event =>{
            if(event.target !== event.currentTarget){
                // When a project name is clicked on the project pane, find that project name on the data array
                let openProject = data.findIndex(name => name.projectName == event.target.textContent );
                ManipulateDOM.displayProjectName(event.target.textContent);
                renderTask(data[openProject].tasks);  
                projectsContainer.classList.toggle('expanded');
            }
        })
    }


    /* ==========================================================
       TASK PANE
       ==========================================================
    */

     const deleteProject = () =>{
        yesButton.addEventListener("click", () =>{
            let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);
            data.splice(searchProject, 1);
            ManipulateDOM.hideWarningMessage();
            ManipulateDOM.deleteProjectName();
            ManipulateDOM.deleteTaskList();
            renderProject(data);
        })
    }

    const addTask = () => {
        saveButton.addEventListener('click', () => {
            // openProject finds the project name of the project that we're currently at
            let openProject = data.findIndex(name => name.projectName ==projectTitleName.textContent );

            //putInProject finds the project name on the data array based on what the user selected under the select element
            let putInProject = data.findIndex(name => name.projectName == projectCategory.value);
            
            // Put the data inside that project
            data[putInProject].tasks.push(taskMaker(
                taskName.value,
                dateDue.value,
                "Incomplete",
                notes.value
            ));

            renderTask(data[openProject].tasks);
            clearAddTaskForm();
            ManipulateDOM.hideTaskForm();
        })
    }

    const cancelAddTask = () => {
        cancelButton.addEventListener('click', () => {
            clearAddTaskForm();
            ManipulateDOM.hideTaskForm();
        })
    }

    const renderTask = (array) => {
        taskList.innerHTML = "";
        for(let i = 0; i < array.length; i++) {
            ManipulateDOM.createTaskElement(array[i], i);
        }
    }

    const clearAddTaskForm = () => {
        taskName.value = '';
        dateDue.value = '';
        notes.value = '';
    }

    const deleteTask = () => {
        document.addEventListener('click', event => {
            if(event.target.id == 'deleteTaskIcon') {
                /* Find the index of the task to be deleted */
                let parentNodeId = event.target.parentNode.id;
                let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);

                data[searchProject].tasks.splice(parentNodeId, 1);
                renderTask(data[searchProject].tasks);
            }
        })
    }

    const editTask = () => {
        document.addEventListener('click', event => {
            if(event.target.className == 'task') {
                ManipulateDOM.showTaskForm();
                let parentNodeId = Number(event.target.parentNode.id);
                let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);

                /* Load the data to the inputs */
                taskName.value = data[searchProject].tasks[parentNodeId].taskName;
                dateDue.value = data[searchProject].tasks[parentNodeId].dateDue;
                notes.value = data[searchProject].tasks[parentNodeId].notes;

                data[searchProject].tasks.splice(parentNodeId, 1);
                saveButton.addEventListener('click', editTaskData(searchProject, parentNodeId));
                renderTask(data[searchProject].tasks);
            }
        })

        function editTaskData(project, taskIndex) {
            data[project].tasks[taskIndex].taskName = taskName.value;
            data[project].tasks[taskIndex].dateDue = dateDue.value;
            data[project].tasks[taskIndex].notes = notes.value;
        }
    }

    const changeTaskStatus = () => {
        document.addEventListener('click', event => {
            if(event.target.className == 'taskStatus') {
                let parentNodeId = Number(event.target.parentNode.id);
                let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);

                let taskStatusToChange = data[searchProject].tasks[parentNodeId];
                if (event.target.checked) {
                    taskStatusToChange.status = 'Complete';        
                }
                
                else if(!event.currentTarget.checked) {
                    taskStatusToChange.status = 'Incomplete';
                }
               renderTask(data[searchProject].tasks);
            }
        })
    }

    return {
        addProject,
        viewProjectTasks, 
        addTask,
        cancelAddTask, 
        deleteProject,
        deleteTask, 
        editTask, 
        changeTaskStatus
    }
})();

export default ManipulateData;