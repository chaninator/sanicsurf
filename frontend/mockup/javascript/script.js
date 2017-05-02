$(document).ready(function() {

  // $("#sanicTheme").get(0).play();
  $('.sanic-hidden').hide();
  $('.active').show();

  // hide show sanics based on selected
  $('.sanic').click(function(e) {
    e.preventDefault();
    console.log('clicked');
    var sanicId = $(this).data('sanic');
    console.log(sanicId);
    $('.sanic-hidden').hide();
    $('.sanic-display .info' + sanicId).show();
  });

  var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: [
      'overlay', 'button', 'escape'
    ],
    closeLabel: "Close",
    cssClass: [
      'custom-class-1', 'custom-class-2'
    ],
    onOpen: function() {
      console.log('modal open');
    },
    onClose: function() {
      console.log('modal closed');
    },
    beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      return false; // nothing happens
    }
  });
  // set content
  modal.setContent('<h1>here\'s some content</h1>');

  // add a button
  modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
  });

  // add another button
  modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
  });

  // open modal
  modal.open();

  // close modal
  modal.close();

});
