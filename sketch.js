$(document).ready(function(){
	var pics = 30;																																			var numPerRow = Math.floor(512/(pics +2));
	var change = "n";
	$('#container div').height(pics + 'px');
	$('#container div').width(pics + 'px');
	var $box = $('#container');
	for(var i=0; i < (numPerRow * numPerRow); i++)
	{
		$box.prepend('<div id ="' + i + '"></div>');	
	}
	$('#container div').mouseenter(function(){
		$(this).css("background-color", "aqua");
	});
	$(document).on('click', 'button', function(){		
		$('#container div').css('background-color', '#FAFAFA');
		change = prompt("would you like to change the box size (y/n)?");
		if(change === "y")
        {
	        restart();
	        for(var i=0; i < ((numPerRow * numPerRow)-256); i++)
			{
				$box.prepend('<div></div>');	
			}

		}
	});
});


var restart = function(){
    pics = prompt("How many pixels would you like to make the side of each box?");
    numPerRow = Math.floor(512/(pics +2));
	$('#container div').height( pics + 'px');
	$('#container div').width( pics  + 'px');
	                                                                                                                                                                                                                                       
};
