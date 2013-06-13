$(document).ready(function() {
	$('iframe').each(function(){
          var url = $(this).attr("src");
          var char = "?";
          if(url.indexOf("?") != -1){
                  var char = "&";
           }
          $(this).attr("src",url+char+"wmode=transparent");
    });
});