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
	
	var colour = new Array('#000', '#fff'),
	background_colour = new Array('#fff', '#000'),
	opt = 0;
	
	setInterval(function()
	{
		opt = Math.round(Math.random());
		console.log(opt)
		var val = Math.random()*360; 
		$("#wrapper").css({
			'letter-spacing':  val,
			'color' : colour[opt],
			'background' : background_colour[opt]
		});
	}
	, 500)
});
