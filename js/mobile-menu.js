(function() {
  const mobileMenuIcon = document.querySelector('.header__mobile'),
        mobileMenu = document.querySelector('.header__nav');
  let count = 0;

  function showMenu() {
    if(count === 1) {
      mobileMenu.style = `left: -1000px`;
      count = 0;
    }
    else {
      mobileMenu.style = `left: -46px`;
      count++;
    }
    mobileMenuIcon.classList.toggle('header-mobile-2');
  };

  function showMenu2(evt) {
    if(evt.key === 'Enter') {
      showMenu();
    }
  }

  mobileMenuIcon.addEventListener('click', showMenu);
  mobileMenuIcon.addEventListener('keydown', showMenu2);

})();