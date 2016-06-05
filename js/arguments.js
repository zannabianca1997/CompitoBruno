//current opened argument
var openedArgument = null;

//open an argument
function openArgument(argument) {
    if (argument != openedArgument) {
        if (!openedArgument) {
            $(".general").stop().fadeOut(TransitionTime);
            $("#NavBar").stop().slideDown(TransitionTime);
            $('#iconContainer').stop().animate(
                {
                    'height':GetIconDimension()*4/3+'px',
                    'width':$(window).width()/4 //3 colonne
                }
                ,TransitionTime,
                function () {
                    $('#iconContainer').attr('class', 'col-md-3')
                }
            );
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
        refreshIcons();
    }
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        $(".general").stop().fadeIn(TransitionTime);
        $(".argument").stop().fadeOut(TransitionTime);
        $(openedArgument).stop().fadeOut(TransitionTime);
        $("#NavBar").stop().slideUp(TransitionTime);
        $('#iconContainer').stop().animate(
            {
                'height':$(window).height(),
                'width':$(window).width() //3 colonne
            }
            ,TransitionTime,
            function () {
                $('#iconContainer').attr('class', 'col-md-12')
            }
        );
        openedArgument = null;
        refreshIcons();
    }
}

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
