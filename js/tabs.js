(function() {
  const body = document.querySelector('.secons-screen__body'),
        tabs = document.querySelectorAll('.second-screen__left__item');
  function showTabs(evt) {
    body.style.top = `-${evt.target.dataset.value}%`;
  }

  function showTabs2(evt) {
    if(evt.key === 'Enter') {
      body.style.top = `-${evt.target.dataset.value}%`;
    }
  }

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', showTabs);
    tabs[i].addEventListener('keydown', showTabs2);
  }
})();