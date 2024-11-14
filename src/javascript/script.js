$(window).on('scroll', function() {
  let header = $('#header');
  header.toggleClass('sticky', $(window).scrollTop() > 0);
});

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
