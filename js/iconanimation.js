//icon animation

var targetheta = Math.PI/2;
var targetradius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius]; //initially they are all on parking radius

var IconsAnimated = false;

function WakeUpIcons() {
    if ( !(targetheta == theta) ) {
        if ( targetheta < theta ) { targetheta += 2*Math.PI } //rotazione solo destrorsa
        IconsAnimated = true;
    } else {
        for(var i=0; i<5; i++) {
            if (targetradius[i] != radius[i]) {
                IconsAnimated = true;
                break; //ne basta 1
            }
        }
    }
    if (IconsAnimated) {
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
}

