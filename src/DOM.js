const ManipulateDOM = (() => {

    const hamburger = {
      burgerNav: document.querySelector('.burgerNav'),
      projectContainer: document.querySelector('.projectContainer'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.burgerNav.classList.toggle('expanded');
        this.projectContainer.classList.toggle('expanded');
      }
    };
  
    
    const allowBurgerClick = hamburger.burgerNav.addEventListener('click', function(e) { hamburger.doToggle(e); });
    const showProject = hamburger.projectContainer.addEventListener('click', function(e) { hamburger.doToggle(e); });
  
    return {allowBurgerClick, showProject};
  
  })();
  
  export default ManipulateDOM;