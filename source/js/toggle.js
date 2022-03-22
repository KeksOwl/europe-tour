const navBlock = document.querySelector('.main-nav');
const navToggler = navBlock.querySelector('.main-nav__toggle');

navBlock.classList.remove('main-nav--nojs');

navToggler.addEventListener('click', function() {
  if (navBlock.classList.contains('main-nav--closed')) {
    navBlock.classList.remove('main-nav--closed');
    navBlock.classList.add('main-nav--opened');
  } else {
    navBlock.classList.remove('main-nav--opened');
    navBlock.classList.add('main-nav--closed');
  }
});
