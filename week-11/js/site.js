// Release the dollar-sign from jQuery's control
$.noConflict();

// Re-introduce dollar sign scoped to self-executing
// function
(function($) {
  $('#masthead').html('OMG jQuery');
  $('html').removeClass('no-js').addClass('js');
})(jQuery);
