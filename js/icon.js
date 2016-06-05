//Icon adding, movement, positioning and resizing


function ScaleIcons() {
    iconDimension = GetIconDimension()
    $(".icon>img").each(function (index) { 
        $(this).css('transform-origin','top left')
               .css('transform','scale(' + iconDimension/$(this).width() + ',' + iconDimension/$(this).height() + ')');
    });
    $(".icon").css({
	    'width': iconDimension+'px',
	    'height': iconDimension+'px',
	    'border-radius': iconDimension/2+'px'
	}) //arrotondo le icone
}

function GetIconDimension() {
    return ($(document).width()/4 * 3/4 ); //3 colums , 3 quarter of that
}

function SetIconStartPos() {
    SetIconPos(0,0,0);
    SetIconPos(1,100,100);
    SetIconPos(2,-100,100);
    SetIconPos(3,100,-100);
    SetIconPos(4,-100,-100);
}

//set the icon position in relation to
function SetIconPos(index,x,y){
    $(".icon:eq("+index+")").css({
        'left': ($('#iconContainer').width()/2+x)+"px",
        "top": ($('#iconContainer').height()/2+y)+"px"
    });
}

