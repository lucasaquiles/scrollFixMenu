/* 
	plugin name :	scrollFixedMenu.jquery.js 1.0
	development  : 	twitter/Lucas_Aquiles
	source code :	github.com.br/lucasaquiles/scrollFix.git
*/
(function(jQuery){

	jQuery.fn.scrollFixedMenu = function(options){
		
		element = this
		
		var settings = $.extend( {
		  'minHeight'         : 100,
		  'buttonToTop':{id:'', show:false} // top or bottom
		}, options);
		
		buttonToTop = settings.buttonToTop.show

		function doHeader(minHeight){
			//console.log(settings.minHeight+" --> scroll: "+$(window).scrollTop())
			console.log($(window).scrollTop())
			
			if($(window).scrollTop() <= minHeight){
				
					element.removeClass('full');

					if(buttonToTop){
						$('#'+settings.buttonToTop.id).fadeOut();
					}

			}else{
					element.addClass('full');
							
					if(buttonToTop){
						$('#'+settings.buttonToTop.id).fadeIn();
					}
			} 
			
			$(this+' a[href = "#"]').removeClass('current').each(function(index) {
				var section = $(this).attr('href');
						
						//console.log(index)							
				if($(window).scrollTop() >= $(section).offset().top) {
				 $(this+' a').removeClass('current');
				  $(this+' a[href='+section+']').addClass('current');
				}
				
				doHeader()
			});
		}
		


		function moveToTop(){
			$('#'+settings.buttonToTop.id).click(function(){
			
				$('html, body').animate({scrollTop : 0}, 300);
				return false;
			});	
		}
		
		
		element.addClass('full'); 
		doHeader(settings.minHeight)
		$(window).scroll(function(){
				doHeader(settings.minHeight)
		})
		
		$('#'+element.attr('id')+' a').click(function (){
				var anchor = $(this).attr('href');
				$('html, body').animate({scrollTop: $(anchor).offset().top}, 300);
				
				
				doHeader()
				return false;
		    })

		if(buttonToTop){
			
			moveToTop();
		}    
	}
	
	
	
})(jQuery);
