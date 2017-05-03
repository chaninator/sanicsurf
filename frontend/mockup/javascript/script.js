$(document).ready(function() {

  $("#sanicTheme").get(0).play();
  $('.sanic-hidden').hide();
  $('.active').show();

  if (window.matchMedia("(max-width: 500px)").matches) {
    $('.sanic').click(function(e) {
      e.preventDefault();
      console.log('clicked-mobile');
      var sanicId = $(this).data('sanic');
      console.log(sanicId);
      $('#sanic-info' + sanicId).modal();
      });
  } else {
    // hide show sanics based on selected
    $('.sanic').click(function(e) {
      e.preventDefault();
      console.log('clicked');
      var sanicId = $(this).data('sanic');
      console.log(sanicId);
      $('.sanic-hidden').hide();
      $('.sanic-display .info' + sanicId).show();
    });
  }

});
