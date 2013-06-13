$(document).ready(function() {

	$('.tab').hover( function(){
        $(this).toggleClass('green');
    });

    $('.youtube_button').hover( function(){
        $(this).toggleClass('green');
    });

	// Stops Youtube embedding from bugging out.
	$('iframe').each(function(){
          var url = $(this).attr("src");
          var char = "?";
          if(url.indexOf("?") != -1){
                  var char = "&";
           }
          $(this).attr("src",url+char+"wmode=transparent");
    });

});