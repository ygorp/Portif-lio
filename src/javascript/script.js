$(window).on('scroll', function() {
  let header = $('#header');
  header.toggleClass('sticky', $(window).scrollTop() > 0);
});
