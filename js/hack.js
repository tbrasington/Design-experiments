$(document).ready(function(){
	
	$('body').on('touchmove', function(evt){evt.preventDefault();});
	
	eh();
	
	var correct = _.debounce(eh,300);
	
	$(window).resize(correct);
	
	function eh()
	{
	
		

		var letters = $('.letter'),
		letter_width = Math.ceil($(window).width()/letters.length);
	
		
		
		$('#wrapper').css({
			'width' : (letter_width * letters.length) + 1000			
			
		});
		
		
		_.each(letters, function(item){
			
			$(item).css({
				'width' : letter_width,
				'height' : $(window).height(),
				'font-size': Math.ceil(letter_width*2),
				'line-height' :  $(window).height()+ 'px'
				
			})
			
		});
		
		$('#ck').css({
			'left': -Math.ceil(letter_width*1.22),
			'font-size': (letter_width*2.038),
			
			});
	
	}
	
});
