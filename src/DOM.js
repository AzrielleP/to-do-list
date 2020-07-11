const ManipulateDOM = (() => {

    /*FROM HTML: For burger menu and project container */
    const burgerIcon            = document.querySelector('#burgerIcon');
    const projectsContainer     = document.querySelector('.projectsContainer');
    const closeIcon             = document.querySelector('#closeIcon');
    const inputCreateProject    = document.querySelector('#inputCreateProject');
    const createProjectButton   = document.querySelector('.createProjectButton');
    const projectNameContainer  = document.querySelector('.projectNameContainer');
      let projectName           = document.querySelector('.projectName');
      let projectList           = document.querySelector('.projectList');

    /*For task pane and add task form */
    const editProjectNameIcon   = document.querySelector('#editProjectNameIcon');
    const editProjectNameInput  = document.querySelector('#editProjectNameInput');
    const addTaskButton         = document.querySelector('.addTaskButton');
    const addTaskFormContainer  = document.querySelector('.addTaskFormContainer');
    const projectCategory       = document.querySelector('.projectCategory');
    const deleteProjectIcon     = document.querySelector('#deleteProjectIcon');
      let taskList              = document.querySelector(".taskList");
    
    /* For warning message */
    const warningPopupContainer                 = document.querySelector(".warningPopupContainer");
    const noButton              = document.querySelector(".noButton");

    /* ==========================================================
       BURGER NAVIGATION MENU AND PROJECT PANE
       ==========================================================
    */
    const burgerToggle = () => {
      burgerIcon.addEventListener('click', () => {
            projectsContainer.classList.toggle('expanded');
        })
      closeIcon.addEventListener('click', () => {
            projectsContainer.classList.toggle('expanded');
            hideProjectForm();
        })
    };
    
    const showProjectForm = () => {
        createProjectButton.addEventListener('click', () => {
            createProjectButton.style.display = 'none';
            inputCreateProject.style.display = 'block';
        })
    };

    const hideProjectForm = () => {
        createProjectButton.style.display = 'block';
        inputCreateProject.style.display = 'none';
    }

    const createProject = (array) => {
        let createProjectName = document.createElement('p');
        createProjectName.textContent = array;
        projectList.appendChild(createProjectName);
    }

     /* ==========================================================
       TASK PANE 
       ==========================================================
    */

    const displayProjectName = (name) => {
        projectName.textContent = name;
        projectNameContainer.style.display = 'flex';
        addTaskButton.style.display = 'block';
    }

    const showEditProjectForm = () => {
        editProjectNameIcon.addEventListener('click', () => {
            projectName.style.display = 'none';
            editProjectNameInput.style.display = 'block';
            editProjectNameInput.value = projectName.textContent;
            editProjectNameIcon.style.display = 'none';
            deleteProjectIcon.style.display = 'none';
        })
        
    }

    const hideEditProjectForm = () => {
        projectName.style.display = 'block';
        editProjectNameInput.style.display = 'none';
        editProjectNameInput.value = '';
        editProjectNameIcon.style.display = 'inline-block';
        deleteProjectIcon.style.display = 'inline-block';
    }

    const deleteProjectName = () => {
        projectName.textContent = '';
        projectNameContainer.style.display = 'none';
        addTaskButton.style.display = 'none';
    }

    /* ==========================================================
       ADD TASK 
       ==========================================================
    */

    const clickAddToShowForm = () =>{
        addTaskButton.addEventListener('click', () => {
            showTaskForm();
        })
    }

    const showTaskForm = () => {
        addTaskFormContainer.style.display = 'flex';
    }

    const hideTaskForm = () => {
        addTaskFormContainer.style.display = 'none';
    }

    const createTaskElement = (object, position) => {
        const task = document.createElement('div');
        task.className = 'task';
        task.id = position;

        const taskDetails = document.createElement('div');
        taskDetails.className = 'taskDetails';

        const taskDetailsContainer = document.createElement('div');
        taskDetailsContainer.className = 'taskDetailsContainer';

        const statusCheckbox = document.createElement('input');
        statusCheckbox.type = 'checkbox';
        statusCheckbox.className = 'taskStatus';
       
        let taskName = document.createElement('p');
        taskName.textContent = object.taskName;
        taskName.className = 'taskName';

        let dateDue = document.createElement('p');
        dateDue.textContent = object.dateDue;
        dateDue.className = "dateDue";

        const deleteTaskIcon = document.createElement('i');
        deleteTaskIcon.className = 'far fa-trash-alt fa-2x';
        deleteTaskIcon.id = 'deleteTaskIcon';
        
        if(object.status == 'Complete'){
            statusCheckbox.checked = true;
        }
        
        taskDetails.append(taskName, dateDue);
        taskDetailsContainer.append(statusCheckbox, taskDetails)
        task.append(taskDetailsContainer, deleteTaskIcon);
        taskList.append(task);
    }

    const deleteTaskList = () => {
        taskList.innerHTML = '';
    }

    const addProjectOption = (projectName) => {
        let option = document.createElement('option');
        option.className = projectName;
        option.textContent = projectName;
        projectCategory.appendChild(option);
    }

    /* ==========================================================
        DELETING A PROJECT
       ==========================================================
    */
    const showWarningMessage = () => {
        deleteProjectIcon.addEventListener('click', () => {
            warningPopupContainer.style.display = 'flex';
        })
    }

    const hideWarningMessage = () => {
        warningPopupContainer.style.display = 'none';
    }

    const cancelDeleteProject = () => {
        noButton.addEventListener('click', () => {
            hideWarningMessage();
        })
    }

    /* ==========================================================
        AUTOFOCUS FUNCTION WHEN CREATING AND EDITING A PROJECT
       ==========================================================
    */

    const autofocusInput = () => {
        createProjectButton.addEventListener('click', () => {
            document.querySelector('#inputCreateProject').focus();
        })

        editProjectNameIcon.addEventListener('click', () => {
            document.querySelector('#editProjectNameInput').focus();
        })

    }

    return {
        burgerToggle, 
        showProjectForm, 
        hideProjectForm,

        createProject,
        displayProjectName, 
        showEditProjectForm,
        hideEditProjectForm,
        deleteProjectName,

        clickAddToShowForm,
        showTaskForm,
        hideTaskForm,
        createTaskElement,
        deleteTaskList,
        addProjectOption,
        
        showWarningMessage,
        hideWarningMessage,
        cancelDeleteProject,

        autofocusInput
    };
  
  })();
  
  export default ManipulateDOM;