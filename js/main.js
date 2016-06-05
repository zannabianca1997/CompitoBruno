
//container transform easing
$('#iconContainer').css({
    '-webkit-transition': 'all '+TransitionTime/1000+'s ease',
    '-moz-transition': 'all '+TransitionTime/1000+'s ease',
    '-o-transition': 'all '+TransitionTime/1000+'s ease',
    'transition': 'all '+TransitionTime/1000+'s ease'
});
//open up container
$('#iconContainer').css('height',$('body').height())
//create the icons
ScaleIcons(); //Scale icons
//resizing
$(window).resize(function(){ //resizing of windows
    ScaleIcons();
    if(openedArgument) {
        $('#iconContainer').attr('class', 'col-md-3').css('height',GetIconDimension()*4/3+'px');
    } else {
        $('#iconContainer').css('height',$('body').height())
    }
}); 
