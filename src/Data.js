import ManipulateDOM from "./DOM";

const ManipulateData = (() =>{
    let dataArray = [];
    const inputProject = document.querySelector('#addProjectTitle');
    const projectList = document.querySelector(".projectList");


    const projectMaker = (projectName, tasks) =>{
        return {projectName, tasks};
    };

    const taskMaker = (taskName, dueDate, status) =>{
        return {taskName, dueDate, status};
    };

    const renderProject = (object) =>{
        projectList.innerHTML = "";
        let projectArray = object.map(a => a.projectName);
        for(let i = 0; i < projectArray.length; i++){
            ManipulateDOM.createProjectElem(projectArray[i]);
        }
    }

    const addProject = () =>{
        inputProject.addEventListener("keydown", event=>{
            if(event.key == "Enter"){
                event.preventDefault();
                if(inputProject.value !== ""){
                    dataArray.push(projectMaker(inputProject.value));
                    renderProject(dataArray);
                }
                inputProject.value = "";
                ManipulateDOM.hideProjectForm();


            }
            event.stopPropagation();
        })
    }

    return {addProject}
})();

export default ManipulateData;