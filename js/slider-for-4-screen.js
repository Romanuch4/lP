(function() {
  const leftArrow = document.querySelector('.fourth-screen__left'),
        rightArrow = document.querySelector('.fourth-screen__right'),
        contentBox = document.querySelector('.fourth-screen__slider__content');
  
  function createSlider(left, right, content) {
    let count = 0;
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(width <= 1250 && width > 1170) {
      function moveLeft() {
        if(count === 0) {
          count = -208;
        } else {
          count+=52;
        }
        content.style.left = `${count}%`;
      }
  
      function moveRight() {
        if(count === -208) {
          count = 0;
        } else {
          count-=52;
        }
        content.style.left = `${count}%`;
      }

    } else if(width <= 1170) {
      function moveLeft() {
        if(count === 0) {
          count = -600;
        } else {
          count+=120;
        }
        content.style.left = `${count}%`;
      }
  
      function moveRight() {
        if(count === -600) {
          count = 0;
        } else {
          count-=120;
        }
        content.style.left = `${count}%`;
      }
    } else {
      function moveLeft() {
        if(count === 0) {
          count = -108;
        } else {
          count+=36;
        }
        content.style.left = `${count}%`;
      }
  
      function moveRight() {
        if(count === -108) {
          count = 0;
        } else {
          count-=36;
        }
        content.style.left = `${count}%`;
      }
    }


    function moveLeft2(evt) {
      if(evt.key === 'Enter') {
        moveLeft();
      }
    }

    function moveRight2(evt) {
      if(evt.key === 'Enter') {
        moveRight();
      }
    }

    left.addEventListener('click', moveLeft);
    left.addEventListener('keydown', moveLeft2);

    right.addEventListener('click', moveRight);
    right.addEventListener('keydown', moveRight2);
  }

  createSlider(leftArrow, rightArrow, contentBox);
})();