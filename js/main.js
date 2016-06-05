
//open up container
$('#iconContainer').css('height',$('body').height())
//create the icons
ScaleIcons(); //Scale icons
//resizing
$(window).resize(function(){ //resizing of windows
    maxRadius = Math.sqrt(Math.pow($(window).width(),2)+Math.pow($(window).height(),2)) + GetIconDimension()/2;
    ScaleIcons();
    if(openedArgument) {
        $('#iconContainer').css('height',GetIconDimension()*4/3+'px');
    } else {
        $('#iconContainer').css('height',$('body').height())
    }
    refreshIcons();
}); 

//Let's the game begins!!
WakeUpIcons();
