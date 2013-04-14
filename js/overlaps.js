$(document).ready(function(){
	
	var letters = $('.letter');
	var letter_width = Math.ceil($(window).width()/letters.length);
	$('#wrapper').css('width', (letter_width * letters.length) + 1000)
	_.each(letters, function(item){
		
		$(item).css({
			'width' : letter_width,
			'height' : $(window).height(),
			'font-size': Math.ceil(letter_width*2),
			'line-height' :  $(window).height()+ 'px'
			
		})
		
	});
	
});
