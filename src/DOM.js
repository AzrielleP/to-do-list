const ManipulateDOM = (() => {

    const burgerNav = document.querySelector(".burgerNav");
    const projectContainer = document.querySelector(".projectContainer");
    const close = document.querySelector("#close");

    const inputProject = document.querySelector('#addProjectTitle');
    const addProjectButton = document.querySelector('.addProject')

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

    return {burgerToggle, showProjectForm};
  
  })();
  
  export default ManipulateDOM;