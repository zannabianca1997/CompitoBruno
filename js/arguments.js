//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    if (!openedArgument) {
        $(".general").stop().fadeOut(TransitionTime);
        $("#NavBar").stop().slideDown(TransitionTime);
        $('#iconContainer').attr('class', 'col-md-3').css('height',GetIconDimension()*4/3+'px');
        setTimeout(function(){
            $(argument).stop().fadeIn(TransitionTime);
            $(".argument").stop().fadeIn(TransitionTime);
        }, TransitionTime) //arrivano finita la transizione
    } else {
        $(openedArgument).stop().fadeOut(TransitionTime/2,function(){
            $(argument).stop().fadeIn(TransitionTime/2); //substituting goes duble speed
        });
    }
    openedArgument = argument;
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        $(".general").stop().fadeIn(TransitionTime);
        $(".argument").stop().fadeOut(TransitionTime);
        $(openedArgument).stop().fadeOut(TransitionTime);
        $("#NavBar").stop().slideUp(TransitionTime);
        $('#iconContainer').attr('class', 'col-md-12').css('height',$('body').height());
        openedArgument = null;
    }
}

//when a icon is pressed
function iconclick(argument) {
    if(argument != openedArgument) {
        openArgument(argument);
    } else {
        openGenerals() 
    }
}
