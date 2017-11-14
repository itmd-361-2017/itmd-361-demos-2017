// Release the dollar-sign from jQuery's control
$.noConflict();

// Re-introduce dollar sign scoped to self-executing
// function
(function($) {
  $('#username-form').append('<ul id="results">');
  $('#username-form').on('submit', function(e) {
    var username = $('#username').val();
    var url = 'https://api.github.com/users/' + username
    e.preventDefault();
    console.log("Form submitted! Let's get the info for", username);
    $.get(url, function(data) {
      //console.log("YOUR DATA:", data);
      $('#results').append(
        '<li>'
        + '<h2>' + data.name + '</h2>'
        + '<img src="' + data.avatar_url + '" />'
        + data.location
        + '</li>'
      );
    })
  });
})(jQuery);
