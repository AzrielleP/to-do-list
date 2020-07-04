const ManipulateDOM = (() => {

    /*FROM HTML: For burger menu and project container */
    const burgerNav = document.querySelector(".burgerNav");
    const projectContainer = document.querySelector(".projectContainer");
    const close = document.querySelector("#close");
    const inputProject = document.querySelector('#addProjectTitle');
    const addProjectButton = document.querySelector('.addProject');
    let projectTitleName = document.querySelector(".projectName");
    const projectTitleContainer = document.querySelector(".projectTitleContainer");
    const projectCategory = document.querySelector(".projectCategory");

    /*FROM HTML: For task list and task form */
    const addTaskButton = document.querySelector(".addTask");
    const formContainer = document.querySelector(".formContainer");
    
    const popUp = document.querySelector(".popupContainer");
    const noOption = document.querySelector(".no");
    const projectTrash = document.querySelector("#projectTrash");
    
    let projectList = document.querySelector(".projectList");
    let taskList = document.querySelector(".tasksList");

    /*For burger and project container*/
    const burgerToggle = ()=> {
      burgerNav.addEventListener('click', () =>{
            projectContainer.classList.toggle('expanded');
        })
        close.addEventListener("click", ()=>{
            projectContainer.classList.toggle('expanded');
            hideProjectForm();
        })
    };
    
    const showProjectForm = ()=>{
        addProjectButton.addEventListener("click", () =>{
            addProjectButton.style.display = "none";
            inputProject.style.display = "block";
        })
    };

    const hideProjectForm = () =>{
        addProjectButton.style.display = "block";
        inputProject.style.display = "none";
    }

    const createProjectElem = (array) =>{
        let name = document.createElement("p");
        name.textContent = array;
        projectList.appendChild(name);
    }

    /*For tasklist and task form */
    const showTaskByAdd = () =>{
        addTaskButton.addEventListener("click", ()=>{
            showTaskForm();
        })
    }
    const showTaskForm = ()=>{
        formContainer.style.display = "flex";
    }

    const hideTaskForm = () =>{
        formContainer.style.display = "none";
    }

    const createTaskElement = (object, position) =>{
        const div = document.createElement("div");
        div.className = "task";
        div.id = position;

        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "taskStatus";

        let taskName = document.createElement("p");
        taskName.className = "taskName";
        taskName.textContent = object.taskName;

        let dueDate = document.createElement("p");
        dueDate.className = "dueDate";
        dueDate.textContent = `Due ${object.dueDate}`;

        const trashCan = document.createElement("i");
        trashCan.className = "far fa-trash-alt fa-2x";
        trashCan.id = "taskToTrash";

        div.append(input, taskName, dueDate, trashCan);
        taskList.append(div);
    }

    const createProjectTitle = (title) =>{
        projectTitleName.textContent = title;
        projectTitleContainer.style.display = "flex";
        addTaskButton.style.display = "block";
    }

    const deleteProjectTitle = () =>{
        projectTitleName.textContent = "";
        projectTitleContainer.style.display = "none";
        addTaskButton.style.display = "none";
    }

    const deleteTasksList = ()=>{
        taskList.innerHTML = "";
    }

    const addProjectOption = (projectName) =>{
        let option = document.createElement("option");
        option.className = projectName;
        option.textContent = projectName;
        projectCategory.appendChild(option);
    }

    const showDeletePopUp = () =>{
        projectTrash.addEventListener("click", ()=>{
            popUp.style.display = "flex";
        })
    }

    const hideDeletePopUp = () =>{
        popUp.style.display = "none";
    }

    const pressNo = ()=>{
        noOption.addEventListener("click", ()=>{
            hideDeletePopUp();
        })
    }

    const statusComplete = (task)=>{
        task.checked = true;
        task.parentNode.style.backgroundColor = "#E5E5E5";
    }

    const statusIncomplete = (task) =>{
        task.style.backgroundColor = "#5C9EAD";
    }

    return {
        burgerToggle, 
        showProjectForm, 
        createProjectElem,
        createProjectTitle, 
        deleteProjectTitle,
        deleteTasksList,
        addProjectOption,
        hideProjectForm,
        showTaskByAdd,
        showTaskForm,
        hideTaskForm,
        createTaskElement,
        hideDeletePopUp,
        pressNo,
        showDeletePopUp,
        statusComplete,
        statusIncomplete
    };
  
  })();
  
  export default ManipulateDOM;