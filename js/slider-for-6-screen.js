(function () {
  const body = document.querySelector('.sixth-screen__slider__content'),
        navigator = document.querySelector('.sixth-screen__navigator');
  navigator.addEventListener('click', evt => moveBody(evt));
  navigator.addEventListener('keydown', evt => moveBody2(evt));

  function moveBody(evt) {
    if (evt.target.dataset.value == 0) {
      body.style.left = `0%`;
    } else if (evt.target.dataset.value == 100) {
      body.style.left = `-100%`;
    } else if (evt.target.dataset.value == 200) {
      body.style.left = `-200%`;
    }
  };

  function moveBody2(evt) {
    if(evt.key === 'Enter') {
      moveBody(evt);
    }
  }
})();