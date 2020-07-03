import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showTaskForm();
ManipulateDOM.pressNo();
ManipulateDOM.showDeletePopUp();

ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.cancelAddTask();
ManipulateData.deleteProject();
ManipulateData.deleteTask();