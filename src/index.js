import ManipulateDOM from './DOM.js';
import ManipulateData from './Data.js';

ManipulateDOM.burgerToggle();
ManipulateDOM.showProjectForm();
ManipulateDOM.showTaskForm();

ManipulateData.addProject();
ManipulateData.addTask();
ManipulateData.cancelAddTask();