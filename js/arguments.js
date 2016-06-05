//current opened argument
var openedArgument = null;

//open an argument
function openArgument(argument) {
    if (argument != openedArgument) {
        if (!openedArgument) {
            $(".general").stop().fadeOut(TransitionTime);
            $("#NavBar").stop().slideDown(TransitionTime);
            shrinkiconContainer();
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
        
        targetradius = [1,1,1,1,1]; targetradius[icon_names[argument]] = 0; //tutti fuori a parte lei
        SetTargetheta(Math.PI*2 - fifth_of_a_turn*icon_names[argument]);
    }
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        $(".general").stop().fadeIn(TransitionTime);
        $(".argument").stop().fadeOut(TransitionTime);
        $(openedArgument).stop().fadeOut(TransitionTime);
        $("#NavBar").stop().slideUp(TransitionTime);
        enlargeiconContainer()
        openedArgument = null;
        
        targetradius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius];//ritornare in parcheggio
        SetTargetheta(0);
    }
}

function shrinkiconContainer() {
    $('#iconContainer').stop().animate(
        {
            'height':GetIconDimension()*4/3+'px',
            'width':$(window).width()/4 //3 colonne
        }
        ,TransitionTime,
        function () {
            $('#iconContainer').css('width',"").attr('class', 'col-md-3') //lascio di nuovo il controllo a bootstrap
        }
    );
    KeepIconInPlace();
}

function enlargeiconContainer() {
    $('#iconContainer').stop().animate(
        {
            'height':$(window).height(),
            'width':$(window).width() //3 colonne
        }
        ,TransitionTime,
        function () {
            $('#iconContainer').css('width',"").attr('class', 'col-md-12')//lascio di nuovo il controllo a bootstrap
        }
    );
    KeepIconInPlace();
}

//per una transizione contimua a refresharle
function KeepIconInPlace() {
    var clock = TransitionTime
    var iconcheck = setInterval(function(){
        refreshIcons();
        clock -= framerate;
        if ( clock < 0 ) {clearInterval(iconcheck);}
     }, framerate);
}
