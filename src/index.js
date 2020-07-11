import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();

ManipulateDOM.clickAddToShowForm();
ManipulateDOM.cancelDeleteProject();
ManipulateDOM.showWarningMessage();

ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.deleteProject();

ManipulateData.addTask();
ManipulateData.cancelAddTask();
ManipulateData.deleteTask();
ManipulateData.editTask();
ManipulateData.changeTaskStatus();
