//constants in the page

TransitionTime = 1000 //un secondo

//1 is just outside the page
Parking_radius = 0.15
framerate = 5 //frame ogni 5 millisecondi
//speeds of rotations and movements
//    they are deltas: multiplied for framerate
thetaspeed = framerate * 2*Math.PI/TransitionTime //un giro per transizione
radiusspeed = framerate * 1/TransitionTime //da fuori al centro in una transizione
 


var icon_names = {'Logo':0,'.simplicity':1,'.velocity':2,'.multimedia':3,'.opensorce':4};
