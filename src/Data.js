/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable linebreak-style */
import ManipulateDOM from './DOM';

const ManipulateData = (() => {
  // Data stores everything
  const data = [];

  const projectsContainer = document.querySelector('.projectsContainer');
  const inputCreateProject = document.querySelector('#inputCreateProject');
  const editProjectNameInput = document.querySelector('#editProjectNameInput');
  const projectList = document.querySelector('.projectList');

  // From the addTaskForm
  const taskList = document.querySelector('.taskList');
  const taskName = document.querySelector('#taskName');
  const dateDue = document.querySelector('#dateDue');
  const notes = document.querySelector('#notes');
  const projectCategory = document.querySelector('.projectCategory');
  const cancelButton = document.querySelector('.cancelButton');
  const addButton = document.querySelector('.addButton');
  const editButton = document.querySelector('.editButton');

  const projectName = document.querySelector('.projectName');
  const yesButton = document.querySelector('.yesButton');

  // Function Factories
  const projectMaker = (projectName, tasks) => {
    return { projectName, tasks };
  };

  const taskMaker = (taskName, dateDue, status, notes) => {
    return { taskName, dateDue, status, notes };
  };

  /* ==========================================================
       PROJECT PANE
       ==========================================================
    */

  const showAndHideNoProjectImg = () => {
    if (data.length === 0) {
      ManipulateDOM.displayNoProjectImage();
    } else {
      ManipulateDOM.hideNoProjectImage();
    }
  };

  /* renderProject iterates over the data array
  and displays the elements inside the array to the webpage */
  const renderProject = (object) => {
    projectList.innerHTML = '';
    projectCategory.innerHTML = '';
    const projectArray = object.map((a) => a.projectName);
    for (let i = 0; i < projectArray.length; i += 1) {
      ManipulateDOM.createProject(projectArray[i]);
      ManipulateDOM.addProjectOption(projectArray[i]);
    }
  };

  // Add Project on Project Pane
  const addProject = () => {
    inputCreateProject.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (inputCreateProject.value !== '') {
          data.push(projectMaker(inputCreateProject.value, []));
          renderProject(data);
        }
        ManipulateDOM.hideProjectForm();
        showAndHideNoProjectImg();
      }
      event.stopPropagation();
    });
  };

  /* ==========================================================
       TASK PANE
       ==========================================================
    */
  const renderTask = (array) => {
    taskList.innerHTML = '';
    if (array.length === 0) {
      ManipulateDOM.displayNoTaskImage();
    } else if (array.length !== 0) {
      ManipulateDOM.hideNoTaskImage();
      for (let i = 0; i < array.length; i += 1) {
        ManipulateDOM.createTaskElement(array[i], i);
      }
    }
  };

  const clearTaskForm = () => {
    taskName.value = '';
    dateDue.value = '';
    notes.value = '';
  };

  const viewProjectTasks = () => {
    projectList.addEventListener('click', (event) => {
      if (event.target !== event.currentTarget) {
        /* When a project name is clicked on the project pane,
        find that project name on the data array */
        const openProject = data.findIndex(
          (name) => name.projectName === event.target.textContent
        );
        ManipulateDOM.displayProjectName(event.target.textContent);
        renderTask(data[openProject].tasks);
        projectsContainer.classList.toggle('expanded');
      }
    });
  };

  /* EDIT AND DELETE A PROJECT */
  const editProjectName = () => {
    editProjectNameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const searchProject = data.findIndex(
          (name) => name.projectName === projectName.textContent
        );
        if (editProjectNameInput.value !== '') {
          data[searchProject].projectName = editProjectNameInput.value;
          projectName.textContent = editProjectNameInput.value;
          renderProject(data);
        }
        inputCreateProject.value = '';
        ManipulateDOM.hideEditProjectForm();
      }
      event.stopPropagation();
    });
  };

  const deleteProject = () => {
    yesButton.addEventListener('click', () => {
      const searchProject = data.findIndex(
        (name) => name.projectName === projectName.textContent
      );
      data.splice(searchProject, 1);
      
      ManipulateDOM.hideWarningMessage();
      ManipulateDOM.deleteProjectName();
      ManipulateDOM.deleteTaskList();
      renderProject(data);
      projectsContainer.classList.toggle('expanded');
      ManipulateDOM.hideNoTaskImage();
      showAndHideNoProjectImg();
      ManipulateDOM.hideTaskForm();
    });
  };

  /* ADDING A TASK */

  const addTask = () => {
    addButton.addEventListener('click', () => {
      // openProject finds the project name of the project that we're currently at
      const openProject = data.findIndex(
        (name) => name.projectName === projectName.textContent
      );

      /* putInProject finds the project name on the data array
      based on what the user selected under the select element */
      const putInProject = data.findIndex(
        (name) => name.projectName === projectCategory.value
      );

      // Put the data inside that project
      if (taskName.value !== '') {
        data[putInProject].tasks.push(
          taskMaker(taskName.value, dateDue.value, 'Incomplete', notes.value)
        );

        renderTask(data[openProject].tasks);
        clearTaskForm();
        ManipulateDOM.hideTaskForm();
      }
    });
  };

  const cancelAddTask = () => {
    cancelButton.addEventListener('click', () => {
      clearTaskForm();
      ManipulateDOM.hideTaskForm();
    });
  };

  /* DELETE AND EDIT A TASK */

  const deleteTask = () => {
    document.addEventListener('click', (event) => {
      if (event.target.id === 'deleteTaskIcon') {
        /* Find the index of the task to be deleted */
        const parentNodeId = event.target.parentNode.id;
        const searchProject = data.findIndex(
          (name) => name.projectName === projectName.textContent
        );

        data[searchProject].tasks.splice(parentNodeId, 1);
        renderTask(data[searchProject].tasks);
      }
    });
  };

  const editTask = () => {
    let searchProject, parentNodeId;

    // Display the data of the task to be editted
    taskList.addEventListener('click', (event) => {
      if (event.target.className === 'taskName') {
        ManipulateDOM.showEditTaskForm();
        parentNodeId = event.target.parentNode.parentNode.parentNode.id;
        searchProject = data.findIndex(
          (name) => name.projectName === projectName.textContent
        );

        /* Load the data to the inputs */
        taskName.value = data[searchProject].tasks[parentNodeId].taskName;
        dateDue.value = data[searchProject].tasks[parentNodeId].dateDue;
        notes.value = data[searchProject].tasks[parentNodeId].notes;
      }
    });

    const editTaskData = (project, taskIndex) => {
      data[project].tasks[taskIndex].taskName = taskName.value;
      data[project].tasks[taskIndex].dateDue = dateDue.value;
      data[project].tasks[taskIndex].notes = notes.value;
    };

    editButton.addEventListener('click', () => {
      editTaskData(searchProject, parentNodeId);
      renderTask(data[searchProject].tasks);
      clearTaskForm();
      ManipulateDOM.hideTaskForm();
    });
  };

  const changeTaskStatus = () => {
    document.addEventListener('click', (event) => {
      if (event.target.className === 'taskStatus') {
        const parentNodeId = Number(event.target.parentNode.parentNode.id);
        const searchProject = data.findIndex(
          (name) => name.projectName === projectName.textContent
        );

        const taskStatusToChange = data[searchProject].tasks[parentNodeId];

        if (event.target.checked) {
          taskStatusToChange.status = 'Complete';
        } else if (!event.currentTarget.checked) {
          taskStatusToChange.status = 'Incomplete';
        }
        renderTask(data[searchProject].tasks);
      }
    });
  };

  return {
    showAndHideNoProjectImg,
    addProject,
    viewProjectTasks,
    editProjectName,
    addTask,
    cancelAddTask,
    deleteProject,
    deleteTask,
    editTask,
    changeTaskStatus,
  };
})();

export default ManipulateData;
