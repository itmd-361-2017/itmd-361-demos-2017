// Release the dollar-sign from jQuery's control
$.noConflict();

// Re-introduce dollar sign scoped to self-executing
// function
(function($) {
  $('#masthead').html('OMG jQuery');
  $('html').removeClass('no-js').addClass('js');

  $('a[href^="http"]').on('click', function(e) {
    // open a new window (this is BAD PRACTICE, but a good first
    // example for events):
    window.open($(this).attr('href'));
    e.preventDefault();
  });

})(jQuery);
