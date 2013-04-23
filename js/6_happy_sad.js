$(document).ready(function()
{
	
	var title = 'happy / sad';
		title = title.split("");
		title = _.shuffle(title).toString()
		title = title.replace(",", '')
		document.title = title;
	var happy_canvas = document.createElement('canvas'),
		sad_canvas = document.createElement('canvas'),
		buffer_canvas = document.createElement('canvas');
		
		design_div = document.createElement('div');
		
		happy_canvas.width = $(window).width()
		happy_canvas.height = $(window).height()
		sad_canvas.width = $(window).width()
		sad_canvas.height = $(window).height()
		
		$("#wrapper").append(design_div)

		var context = happy_canvas.getContext('2d');
		context.fillStyle="#000";
		context.font= "bold " + Math.round($(window).width()/4)+"px brandon-grotesque";
		context.fillText("happy", 0, Math.round($(window).width()/4));
		
		secondary = sad_canvas.getContext('2d');
		secondary.fillStyle="#000";
		secondary.font= "bold " + Math.round($(window).width()/4)+"px brandon-grotesque";
		secondary.fillText("sad", 0, Math.round($(window).width()/4));
			 
		var happy_images_top= get_images(happy_canvas,  happy_canvas.width/6, happy_canvas.height/2, 0);
		var happy_images_bottom = get_images(happy_canvas,  happy_canvas.width/6, happy_canvas.height/2, happy_canvas.height/2);
		
		var sad_images_top = get_images(sad_canvas,  sad_canvas.width/6, sad_canvas.height/2,0);
		var sad_images_bottom = get_images(sad_canvas,  sad_canvas.width/6, sad_canvas.height/2, sad_canvas.height/2);
		
		var mixed_top = happy_images_top.concat(sad_images_top);
		var mixed_bottom = happy_images_bottom.concat(sad_images_bottom);
		
		var shuffled_top = _.shuffle(mixed_top).slice(0,6)
		var shuffled_bottom = _.shuffle(mixed_bottom).slice(0,6);
	
		_.each(shuffled_top, function(item)
		{
			$(design_div).append(item)	
		});
		_.each(shuffled_bottom, function(item)
		{
			$(design_div).append(item)	
		});
		
		function get_images(target_canvas, section_width, section_height, y_pos)
		{
			var image_array = [];
			
			for(var a = 0; a < 6; a++)
			{
				image_array[a] = new Image();
				buffer_canvas.width = section_width;
				buffer_canvas.height = section_height;
			 
	
				buffer_canvas.getContext('2d').drawImage(target_canvas, section_width*a, y_pos, section_width, section_height, 0, 0, section_width, section_height);
				image_array[a].src = buffer_canvas.toDataURL("image/png");
				
			}
			
			return image_array;

		}
			
		
});

