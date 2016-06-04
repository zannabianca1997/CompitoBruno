
//fading animations
function fade(obj,time) {
    var clock = time;
    var id = setInterval(frame, framerate);
    function frame() {
        if (clock < 0) {
            obj.style.display = 'none';
            clearInterval(id);
        } else {
            clock -= framerate;
            obj.style.opacity = clock/time;
        }
    }
}
function fadeList(objs,time) {
    var clock = time;
    var id = setInterval(frame, framerate);
    function frame() {
        if (clock < 0) {
            for (var i = 0; i < objs.length; i++) {
                objs[i].style.display = 'none';
            }
            clearInterval(id);
        } else {
            clock -= framerate;
            for (var i = 0; i < objs.length; i++) {
                objs[i].style.opacity = clock/time;
            }
        }
    }
}
function unfade(obj,time) {
    obj.style.display = 'inherit'; //prima fallo apparire
    var clock = 0;
    var id = setInterval(frame, framerate);
    function frame() {
        if (clock > time) {
            clearInterval(id);
        } else {
            clock += framerate;
            obj.style.opacity = clock/time;
        }
    }
}
function unfadeList(objs,time) {
    for (var i = 0; i < objs.length; i++) {
        objs[i].style.display = 'inherit';
    }
    var clock = 0;
    var id = setInterval(frame, framerate);
    function frame() {
        if (clock > time) {
            clearInterval(id);
        } else {
            clock += framerate;
            for (var i = 0; i < objs.length; i++) {
                objs[i].style.opacity = clock/time;
            }
        }
    }
}
