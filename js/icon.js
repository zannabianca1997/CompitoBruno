//Icon adding, movement, positioning and resizing

var icons = $(".icon"); //find div objects

function ScaleIcons() {
    iconDimension = GetIconDimension()
    $(".icon>img").each(function (index) { 
        $(this).css('transform-origin','top left')
               .css('transform','scale(' + iconDimension/$(this).width() + ',' + iconDimension/$(this).height() + ')');
    });
    icons.css({
	    'width': iconDimension+'px',
	    'height': iconDimension+'px',
	    'border-radius': iconDimension/2+'px'
	}) //arrotondo le icone
}

function GetIconDimension() {
    return ($(document).width()/4 * 3/4 ); //3 colums , 3 quarter of that
}

//set the icon position in relation to
function SetIconPos(x,y){}

