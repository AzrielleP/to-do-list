import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showTaskByAdd();
ManipulateDOM.pressNo();
ManipulateDOM.showDeletePopUp();

ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.cancelAddTask();
ManipulateData.deleteProject();
ManipulateData.deleteTask();
ManipulateData.addTask();
ManipulateData.editTask();
ManipulateData.changeTaskStatus();
