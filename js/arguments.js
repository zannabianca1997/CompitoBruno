//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    closeGenerals(); //arguments display instantly
    closeArgument();
    openedArgument = argument;
    visualize(openedArgument);
}
//open general elements, close argument ones
function openGenerals() {
    visualize(".general");
    unvisualize(".argument");
    closeArgument();
}
    
//close general elements, open argument ones
function closeGenerals() {
    unvisualize(".general");
    visualize(".argument");
}


//close current opened argument
function closeArgument() {
    if (openedArgument != null) {
        unvisualize(openedArgument);
        openedArgument = null; //nothing is open now
    }
}

FadingTime = 1000 //un secondo

//visualize class
function visualize(className) {
    var ArgElements = document.querySelectorAll(className);
    unfadeList(ArgElements,FadingTime);
}
//unvisualize class
function unvisualize(className) {
    var ArgElements = document.querySelectorAll(className);
    fadeList(ArgElements,FadingTime);
}
