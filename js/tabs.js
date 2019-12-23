(function() {
  const body = document.querySelector('.secons-screen__body'),
        tabs = document.querySelectorAll('.second-screen__left__item');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(evt) {
      body.style.top = `-${evt.target.dataset.value}%`;
    }) 
  }
})();