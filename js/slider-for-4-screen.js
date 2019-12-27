(function() {
  const leftArrow = document.querySelector('.fourth-screen__left'),
        rightArrow = document.querySelector('.fourth-screen__right'),
        contentBox = document.querySelector('.fourth-screen__slider__content');
  
  function createSlider(left, right, content) {
    let count = 0;
    left.addEventListener('click', function() {
      if(count === 0) {
        count = -108;
      } else {
        count+=36;
      }
      content.style.left = `${count}%`;
    });

    right.addEventListener('click', function() {
      if(count === -108) {
        count = 0;
      } else {
        count-=36;
      }
      content.style.left = `${count}%`;
    });
  }

  createSlider(leftArrow, rightArrow, contentBox);
})();