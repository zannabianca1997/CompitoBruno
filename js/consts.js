//constants in the page

TransitionTime = 1000 //un secondo

//1 is just outside the page
Parking_radius = 0.15
framerate = 5 //frame ogni 5 millisecondi
//speeds of rotations and movements
//    they are deltas: multiplied for framerate
thetaspeed = framerate * 0.5*Math.PI/TransitionTime //mezzo giro per transizione
radiusspeed = framerate * 0.5/TransitionTime //da fuori al centro in mezza transizione
 


var icon_names = {'Logo':0,'.simplicity':1,'.velocity':2,'.multimedia':3,'.opensorce':4};
