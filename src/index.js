import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showTaskForm();

ManipulateData.addProject();
ManipulateData.viewProjectTasks();
ManipulateData.cancelAddTask();