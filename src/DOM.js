/* eslint-disable linebreak-style */
const ManipulateDOM = (() => {
  /*
  FROM HTML: For burger menu and project container
  */

  const burgerIcon = document.querySelector('#burgerIcon');
  const projectsContainer = document.querySelector('.projectsContainer');
  const closeIcon = document.querySelector('#closeIcon');
  const inputCreateProject = document.querySelector('#inputCreateProject');
  const createProjectButton = document.querySelector('.createProjectButton');
  const projectNameContainer = document.querySelector('.projectNameContainer');
  const projectName = document.querySelector('.projectName');
  const projectList = document.querySelector('.projectList');

  /* For task pane and add task form */
  const noTaskImgContainer = document.querySelector('.noTaskImgContainer');
  const noProjectImgContainer = document.querySelector('.noProjectImgContainer');
  const editProjectNameIcon = document.querySelector('#editProjectNameIcon');
  const editProjectNameInput = document.querySelector('#editProjectNameInput');
  const addTaskButton = document.querySelector('.addTaskButton');
  const addTaskFormContainer = document.querySelector('.addTaskFormContainer');
  const projectCategory = document.querySelector('.projectCategory');
  const deleteProjectIcon = document.querySelector('#deleteProjectIcon');
  const taskList = document.querySelector('.taskList');
  const editButton = document.querySelector('.editButton');
  const addButton = document.querySelector('.addButton');

  /* For warning message */
  const warningPopupContainer = document.querySelector('.warningPopupContainer');
  const noButton = document.querySelector('.noButton');

  /* ==========================================================
       BURGER NAVIGATION MENU AND PROJECT PANE
       ==========================================================
    */

  const showProjectForm = () => {
    createProjectButton.addEventListener('click', () => {
      createProjectButton.style.display = 'none';
      inputCreateProject.style.display = 'block';
    });
  };

  const hideProjectForm = () => {
    createProjectButton.style.display = 'block';
    inputCreateProject.style.display = 'none';
    inputCreateProject.value = '';
  };

  const burgerToggle = () => {
    burgerIcon.addEventListener('click', () => {
      projectsContainer.classList.toggle('expanded');
    });
    closeIcon.addEventListener('click', () => {
      projectsContainer.classList.toggle('expanded');
      hideProjectForm();
    });
  };

  const createProject = (array) => {
    const createProjectName = document.createElement('p');
    createProjectName.textContent = array;
    projectList.appendChild(createProjectName);
  };

  /* ==========================================================
       TASK PANE
       ==========================================================
    */

  const displayProjectName = (name) => {
    projectName.textContent = name;
    projectNameContainer.style.display = 'flex';
    addTaskButton.style.display = 'block';
  };

  const showEditProjectForm = () => {
    editProjectNameIcon.addEventListener('click', () => {
      projectName.style.display = 'none';
      editProjectNameInput.style.display = 'block';
      editProjectNameInput.value = projectName.textContent;
      editProjectNameIcon.style.display = 'none';
      deleteProjectIcon.style.display = 'none';
    });
  };

  const hideEditProjectForm = () => {
    projectName.style.display = 'block';
    editProjectNameInput.style.display = 'none';
    editProjectNameInput.value = '';
    editProjectNameIcon.style.display = 'inline-block';
    deleteProjectIcon.style.display = 'inline-block';
  };

  const deleteProjectName = () => {
    projectName.textContent = '';
    projectNameContainer.style.display = 'none';
    addTaskButton.style.display = 'none';
  };

  /* ==========================================================
       ADD TASK
       ==========================================================
    */

  const showEditTaskForm = () => {
    addTaskFormContainer.style.display = 'flex';
    editButton.style.display = 'inline-block';
    addButton.style.display = 'none';
  };

  const showAddTaskForm = () => {
    addTaskFormContainer.style.display = 'flex';
    editButton.style.display = 'none';
    addButton.style.display = 'inline-block';
  }

  const hideTaskForm = () => {
    addTaskFormContainer.style.display = 'none';
  };

  const clickAddToShowForm = () => {
    addTaskButton.addEventListener('click', () => {
      showAddTaskForm();
    });
  };



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

    const taskName = document.createElement('p');
    taskName.textContent = object.taskName;
    taskName.className = 'taskName';

    const dateDue = document.createElement('p');
    dateDue.textContent = object.dateDue;
    dateDue.className = 'dateDue';

    const deleteTaskIcon = document.createElement('i');
    deleteTaskIcon.className = 'far fa-trash-alt fa-2x';
    deleteTaskIcon.id = 'deleteTaskIcon';

    if (object.status === 'Complete') {
      statusCheckbox.checked = true;
      taskName.style.color = '#c4c4c4';
      dateDue.style.color = '#c4c4c4';
    }

    taskDetails.append(taskName, dateDue);
    taskDetailsContainer.append(statusCheckbox, taskDetails);
    task.append(taskDetailsContainer, deleteTaskIcon);
    taskList.append(task);
  };

  const deleteTaskList = () => {
    taskList.innerHTML = '';
  };

  const addProjectOption = (name) => {
    const option = document.createElement('option');
    option.className = name;
    option.textContent = name;
    projectCategory.appendChild(option);
  };

  /* ==========================================================
        DELETING A PROJECT
       ==========================================================
    */
  const showWarningMessage = () => {
    deleteProjectIcon.addEventListener('click', () => {
      warningPopupContainer.style.display = 'flex';
    });
  };

  const hideWarningMessage = () => {
    warningPopupContainer.style.display = 'none';
  };

  const cancelDeleteProject = () => {
    noButton.addEventListener('click', () => {
      hideWarningMessage();
    });
  };

  /* ==========================================================
        AUTOFOCUS FUNCTION WHEN CREATING AND EDITING A PROJECT
       ==========================================================
    */

  const autofocusInput = () => {
    createProjectButton.addEventListener('click', () => {
      document.querySelector('#inputCreateProject').focus();
    });

    editProjectNameIcon.addEventListener('click', () => {
      document.querySelector('#editProjectNameInput').focus();
    });
  };

  /* ==========================================================
        DISPLAY IMAGES
       ==========================================================
    */

  const displayNoTaskImage = () => {
    noTaskImgContainer.style.display = 'block';
  };

  const hideNoTaskImage = () => {
    noTaskImgContainer.style.display = 'none';
  };

  const displayNoProjectImage = () => {
    noProjectImgContainer.style.display = 'block';
  };

  const hideNoProjectImage = () => {
    noProjectImgContainer.style.display = 'none';
  };

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
    showEditTaskForm,
    hideTaskForm,
    createTaskElement,
    deleteTaskList,
    addProjectOption,

    showWarningMessage,
    hideWarningMessage,
    cancelDeleteProject,

    autofocusInput,
    displayNoTaskImage,
    hideNoTaskImage,
    displayNoProjectImage,
    hideNoProjectImage,
  };
})();

export default ManipulateDOM;
