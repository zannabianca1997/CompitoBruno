//icon animation

var targetheta = 0;
var targetradius = [Parking_radius, Parking_radius, Parking_radius, Parking_radius, Parking_radius]; //initially they are all on parking radius

var IconsAnimated = false;

function WakeUpIcons() {
     IconsAnimated = setInterval(function () {
            var completed = true
            //controlliamo l'angolo
            if ( targetheta != theta ) {
                theta += thetaspeed; //move
                if (theta > targetheta) {
                    theta = targetheta; //ora sono uguali
                } else { completed = false; } //dobbiamo ancora girare
            }
            //controlliamo i raggi
            for(var i=0; i<5; i++) {
                if (Math.abs(radius[i] - targetradius[i]) > radiusspeed) { //non sono ancora abbastanza vicini
                    if (radius[i] < targetradius[i]) {
                        radius[i] += radiusspeed
                    } else 
                    if (radius[i] > targetradius[i]) {
                        radius[i] -= radiusspeed
                    }
                    completed = false;
                } else {
                    radius[i] = targetradius[i] //siamo arrivati
                }
            }
            //refreshiamo e verifichiamo il completamento
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

