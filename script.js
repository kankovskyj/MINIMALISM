$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 20000);
});

$("#turnBack").click(function() {
    $('html, body').animate({
        scrollTop: $("#here").offset().top
    }, 2000);
});

// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $('html, body').stop();
});