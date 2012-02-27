/* 
	plugin name :	scrollFixedMenu.jquery.js 1.0
	development  : 	twitter/Lucas_Aquiles
	source code :	github.com.br/lucasaquiles/scrollFix.git
*/
(function(jQuery){

	jQuery.fn.scrollFixedMenu = function(options){
		
		element = this
		
		var settings = $.extend( {
		  'minHeight'         : 100
		}, options);
		
		function doHeader(minHeight){
			//console.log(settings.minHeight+" --> scroll: "+$(window).scrollTop())
			console.log($(window).scrollTop())
			
			if($(window).scrollTop() <= minHeight){
				
					element.removeClass('full');
			}else{
					element.addClass('full');		
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
	}
	
	
	
})(jQuery);
