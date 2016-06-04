//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    closeGenerals(); //arguments display instantly
    closeArgument();
    visualize(argument);
    openedArgument = argument;
}
    
//close general elements, open argument ones
function closeGenerals() {
    unvisualize("#general");
    visualize("#argument");
}

//close general elements, open argument ones
function openGenerals() {
    visualize("#general");
    unvisualize("#argument");
}

//close current opened argument
function closeArgument() {
    if (openedArgument) {
        unvisualize(openedArgument);
    }
}

FadingTime = 1000 //un secondo

//visualize class
function visualize(className) {
    var ArgElements = document.querySelectorAll(className);
    /*for (var i = 0; i < ArgElements.length; i++) {
        ArgElements[i].style.display = 'inherit';
    }*/
    unfadeList(ArgElements,FadingTime);
}
//unvisualize class
function unvisualize(className) {
    var ArgElements = document.querySelectorAll(className);
    fadeList(ArgElements,FadingTime);
}
