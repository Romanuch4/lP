(function() {
  const mobileMenuIcon = document.querySelector('.header__mobile'),
        mobileMenu = document.querySelector('.header__nav');
  let count = 0;

  mobileMenuIcon.addEventListener('click', function() {
    if(count === 1) {
      mobileMenu.style = `left: -1000px`;
      count = 0;
    }
    else {
      mobileMenu.style = `left: 0px`;
      count++;
    }
    mobileMenuIcon.classList.toggle('header-mobile-2');
  });
})();