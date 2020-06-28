(function() {

  var hamburger = {
    burgerNav: document.querySelector('.burgerNav'),
    projectContainer: document.querySelector('.projectContainer'),

    doToggle: function(e) {
      e.preventDefault();
      this.burgerNav.classList.toggle('expanded');
      this.projectContainer.classList.toggle('expanded');
    }
  };

  hamburger.burgerNav.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.projectContainer.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());