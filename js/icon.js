//Icon adding, movement, positioning and resizing

//when a icon is pressed
function iconclick(argument) {
    //worse code ever
    if (argument == 'Logo'){
        openGenerals();
    } else if(argument != openedArgument){
        openArgument(argument); 
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

var theta = 0;
var radius = [1,1,1,1,1]; //initially they are all away

var fifth_of_a_turn = 2*Math.PI/5 //precalculated

var maxRadius = Math.sqrt(Math.pow($(window).width(),2)+Math.pow($(window).height(),2)) + GetIconDimension()/2;

function refreshIcons() {
    //radius just outside the windows
    for(var i=0; i<5; i++) {
        if(radius[i] != 1) {
            var iconRadius = radius[i]*maxRadius;
            var iconTheta = theta + fifth_of_a_turn*i;
            SetIconPos(i, -iconRadius*Math.sin(iconTheta), iconRadius*Math.cos(iconTheta))
            $(".icon:eq("+i+")").css("display","block") //visible, è dentro
        } else {
            $(".icon:eq("+i+")").css("display","none") //invisible, è fuori
        }
    }
}



