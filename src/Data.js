import ManipulateDOM from "./DOM";

const ManipulateData = (() =>{
    //Data stores everything
    let data = [];

    const inputProject = document.querySelector('#addProjectTitle');
    const projectList = document.querySelector(".projectList");
    const tasksList = document.querySelector(".tasksList");
    const taskTitle = document.querySelector("#taskTitle");
    const dateDue = document.querySelector("#dateDue");
    const projectCategory = document.querySelector(".projectCategory");
    let projectTitleName = document.querySelector(".projectName");
    const notes = document.querySelector("#notes");
    const cancelButton = document.querySelector(".cancelButton");
    const saveButton = document.querySelector(".save");
    const yesOption = document.querySelector(".yes");
    //const task = document.querySelector(".task");

    // Function Factories
    const projectMaker = (projectName, tasks) =>{
        return {projectName, tasks};
    };

    const taskMaker = (taskName, dueDate, status, notes) =>{
        return {taskName, dueDate, status, notes};
    };

    // Project related
    const addProject = () =>{
        inputProject.addEventListener("keydown", event=>{
            if(event.key == "Enter"){
                event.preventDefault();
                if(inputProject.value !== ""){
                    data.push(projectMaker(inputProject.value, []));
                    renderProject(data);
                    ManipulateDOM.addProjectOption(inputProject.value);
                }
                inputProject.value = "";
                ManipulateDOM.hideProjectForm();
            }
            event.stopPropagation();
        })
    }

    const renderProject = (object) =>{
        projectList.innerHTML = "";
        let projectArray = object.map(a => a.projectName);
        for(let i = 0; i < projectArray.length; i++){
            ManipulateDOM.createProjectElem(projectArray[i]);
        }
    }

    const viewProjectTasks = ()=>{
        let openProject = null;
        projectList.addEventListener("click", event =>{
            if(event.target !== event.currentTarget){
                openProject = data.findIndex(name => name.projectName == event.target.textContent );
                ManipulateDOM.createProjectTitle(event.target.textContent);
                renderTask(data[openProject].tasks);            
                addTask(openProject); 
            }
        })
    }

    const deleteProject = () =>{
        yesOption.addEventListener("click", () =>{
            let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);
            data.splice(searchProject, 1);
            ManipulateDOM.hideDeletePopUp();
            ManipulateDOM.deleteProjectTitle();
            renderProject(data);
        })
    }

    //Task Related

    const addTask = (projectPage) =>{
        saveButton.addEventListener("click", () =>{
            //Find the index of the project name first
            let putInProject = data.findIndex(name => name.projectName == projectCategory.value);
            
            // Put the data inside that project
            data[putInProject].tasks.push(taskMaker(
                taskTitle.value,
                dateDue.value,
                "Incomplete",
                notes.value
            ));
            renderTask(data[projectPage].tasks);
            clearTaskForm();
            ManipulateDOM.hideTaskForm();
        })
    }

    const cancelAddTask = () =>{
        cancelButton.addEventListener("click", () =>{
            clearTaskForm();
            ManipulateDOM.hideTaskForm();
        })
    }

    const renderTask = (array) =>{
        tasksList.innerHTML = "";
        for(let i = 0; i< array.length; i ++){
            ManipulateDOM.createTaskElement(array[i],i);
        }
    }

    const clearTaskForm = () =>{
        taskTitle.value = "";
        dateDue.value = "";
        notes.value = "";
    }

    const deleteTask = ()=>{
        document.addEventListener("click", event =>{
            if(event.target.id == "taskToTrash"){
                let parentNodeId = event.target.parentNode.id;
                let searchProject = data.findIndex(name => name.projectName == projectTitleName.textContent);
                data[searchProject].tasks.splice(parentNodeId, 1);
                renderTask(data[searchProject].tasks);
            }
        })
    }

    return {addProject,viewProjectTasks, cancelAddTask, deleteProject, deleteTask}
})();

export default ManipulateData;