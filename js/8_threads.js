$(document).ready(function()
{
	
	var art_canvas = document.createElement('canvas'),
		buffer_canvas = document.createElement('canvas');
		
		design_div = document.createElement('div');
		
		art_canvas.width = $(window).width()
		art_canvas.height = $(window).height()
		
		var font_size= $(window).width()/4
		
		//$("#wrapper").append(art_canvas);
		$("#wrapper").append(design_div);
		
			
		 
		var context = art_canvas.getContext('2d');
		context.fillStyle="#000";
		context.font= "900 italic "+font_size+"px nimbus-sans";
		context.fillText("threads", 0, font_size);
		
		var slice_it = get_images(art_canvas, $(window).width()/300, $(window).height(), 0);
		
		_.each(slice_it, function(item){
			$(design_div).append(item);
			$(item).css('margin-top', Math.random()*100);
		});
		
		function get_images(target_canvas, section_width, section_height, y_pos)
		{
			var image_array = [];
			
			for(var a = 0; a < 300; a++)
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

