//icon animation

var targetheta = 0;
var targetradius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius]; //initially they are all on parking radius

var IconsAnimated = false;

function WakeUpIcons() {
     IconsAnimated = setInterval(function () {
            var completed = true
            if ( targetheta != theta ) {
                theta += thetaspeed; //move
                if (theta > targetheta) {
                    theta = targetheta; //ora sono uguali
                } else { completed = false; } //dobbiamo ancora girare
            }
            refreshIcons();
            if (completed) {
                clearInterval(IconsAnimated);
                IconsAnimated = false;
            }
        }, framerate);
}

function SetTargetheta(value) {
    targetheta = value
    if (theta > targetheta) {
        theta -= 2*Math.PI
    }
    WakeUpIcons();
}

