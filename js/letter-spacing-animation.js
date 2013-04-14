$(document).ready(function(){
	
	set_type_size();
	
	$(window).resize(set_type_size);
	
	function set_type_size()
	{
		$("#wrapper").css({
			'font-size':  $(window).height()/10,
			'line-height' : $(window).height()/8 + 'px'
		});
	}
	
	setInterval(function()
	{
		
		var val = Math.random()*360; 
		$("#wrapper").css('letter-spacing', val);
	}
	, 500);
	
	
});
