/* eslint-disable linebreak-style */
import ManipulateDOM from './DOM';
import ManipulateData from './Data';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showEditProjectForm();

ManipulateDOM.clickAddToShowForm();
ManipulateDOM.cancelDeleteProject();
ManipulateDOM.showWarningMessage();

ManipulateDOM.autofocusInput();

ManipulateData.showAndHideNoProjectImg();
ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.deleteProject();
ManipulateData.editProjectName();


ManipulateData.addTask();
ManipulateData.cancelAddTask();
ManipulateData.editTask();
ManipulateData.deleteTask();
ManipulateData.changeTaskStatus();
