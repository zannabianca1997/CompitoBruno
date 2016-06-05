//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    if (!openedArgument) {
        $(".general").fadeOut(TransitionTime);
        $("#NavBar").slideDown(TransitionTime);
        $('#iconContainer').attr('class', 'col-md-3').css('height',GetIconDimension()*4/3+'px');
        setTimeout(function(){
            $(argument).fadeIn(TransitionTime);
            $(".argument").fadeIn(TransitionTime);
        }, TransitionTime) //arrivano finita la transizione
    } else {
        $(openedArgument).fadeOut(TransitionTime);
        $(argument).fadeIn(TransitionTime);
    }
    openedArgument = argument;
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        $(".general").fadeIn(TransitionTime);
        $(".argument").fadeOut(TransitionTime);
        $(openedArgument).fadeOut(TransitionTime);
        $("#NavBar").slideUp(TransitionTime);
        $('#iconContainer').attr('class', 'col-md-12').css('height',$('body').height());
        openedArgument = null;
    }
}
