//Icon adding, movement, positioning and resizing

//when a icon is pressed
function iconclick(argument) {
    targetheta = Math.PI/2 - fifth_of_a_turn*icon_names[argument]
    WakeUpIcons();
    if (argument == 'Logo'){
        openGenerals(); 
    } else if(argument != openedArgument){
        openArgument(argument); //worse code ever
    } else {
        openGenerals(); 
    }
}

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
    return ($(window).width()/4 * 3/4 ); //3 colums , 3 quarter of that
}

//set the icon position in relation to
function SetIconPos(index,x,y){
    $(".icon:eq("+index+")").css({
        'left': ($('#iconContainer').width()/2+x)+"px",
        "top": ($('#iconContainer').height()/2-y)+"px"
    });
}

//movements

var theta = Math.PI/2;
var radius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius]; //initially they are all on parking radius

var fifth_of_a_turn = 2*Math.PI/5 //precalculated

function refreshIcons() {
    //radius just outside the windows
    var maxRadius = Math.sqrt(Math.pow($(window).width(),2)+Math.pow($(window).height(),2)) + GetIconDimension()/2;
    for(var i=0; i<5; i++) {
        var iconRadius = radius[i]*maxRadius;
        var iconTheta = theta + fifth_of_a_turn*i;
        SetIconPos(i, iconRadius*Math.cos(iconTheta), iconRadius*Math.sin(iconTheta))
    }
}



