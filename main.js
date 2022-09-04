const squares = document.querySelector('.squares');

squares.addEventListener('click', function (event) {

  let curEl = event.target;
  
  if(curEl.className != 'squares') {
    curEl.style.background = 'red';
    squares.append(curEl);
  }

  
})