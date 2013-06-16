$(document).ready( function() {

  // Makes tabs turn green when hovered over.
	$('.tab').hover( function(){
    $(this).toggleClass('green');
  });

  // For the slideshow.
  $('#slideshow-div').rsfSlideshow({
    interval: 5,
    transition: 500,
    // effect: 'slideLeft'
  });

  // Makes youtube button turn green when hovered.
  $('.youtube_button').hover( function(){
    $(this).toggleClass('green');
  });

	// Stops Youtube embedding from bugging out.
  $('iframe').each( function(){
    var url = $(this).attr("src");
    var char = "?";
    if(url.indexOf("?") != -1){
      var char = "&";
    }
    $(this).attr("src",url+char+"wmode=transparent");
  });

});