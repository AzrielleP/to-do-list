const ManipulateDOM = (() => {

    const burgerNav = document.querySelector(".burgerNav");
    const projectContainer = document.querySelector(".projectContainer");
    const close = document.querySelector("#close");

    const inputProject = document.querySelector('#addProjectTitle');
    const addProjectButton = document.querySelector('.addProject');

    let projectList = document.querySelector(".projectList");


    const burgerToggle = ()=> {
      burgerNav.addEventListener('click', () =>{
            projectContainer.classList.toggle('expanded');
        })
        close.addEventListener("click", ()=>{
            projectContainer.classList.toggle('expanded');
        })
    };
    
    const showProjectForm = ()=>{
        addProjectButton.addEventListener("click", () =>{
            addProjectButton.style.display = "none";
            inputProject.style.display = "block";
        })
    };

    const hideProjectForm = () =>{
        addProjectButton.style.display = "block";
        inputProject.style.display = "none";
    }

    const createProjectElem = (array) =>{
        let name = document.createElement("p");
        name.textContent = array;
        projectList.appendChild(name);
    }

    
    return {
        burgerToggle, 
        showProjectForm, 
        createProjectElem, 
        hideProjectForm
    };
  
  })();
  
  export default ManipulateDOM;