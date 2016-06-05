//icon animation

var targetheta = Math.PI/2;
var targetradius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius]; //initially they are all on parking radius

var IconsAnimated = null;

function frame() {
    
    refreshIcons();
}

function WakeUpIcons() {
    if ( targetheta != theta ) {
        IconsAnimated = true;
    } else {
        for(var i=0; i<5; i++) {
            if (targetradius[i] != radius[i]) {
                IconsAnimated = true;
            }
        }
    }
    if (IconsAnimated) {
        IconsAnimated = setInterval(frame, framerate);
    }
}

