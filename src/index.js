import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showEditProjectForm();

ManipulateDOM.clickAddToShowForm();
ManipulateDOM.cancelDeleteProject();
ManipulateDOM.showWarningMessage();

ManipulateDOM.autofocusInput();

ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.deleteProject();
ManipulateData.editProjectName();

ManipulateData.addTask();
ManipulateData.cancelAddTask();
ManipulateData.deleteTask();
ManipulateData.editTask();
ManipulateData.changeTaskStatus();
