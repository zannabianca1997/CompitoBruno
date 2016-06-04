//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    if (!openedArgument) {
        unvisualize(".general");
        visualize(".argument");
    } else {
        unvisualize(openedArgument);
    }
    openedArgument = argument;
    visualize(openedArgument);
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        visualize(".general");
        unvisualize(".argument");
        unvisualize(openedArgument);
        openedArgument = null;
    }
}

//visualize class
function visualize(className) {
    var ArgElements = document.querySelectorAll(className);
    unfadeList(ArgElements,TransitionTime);
}
//unvisualize class
function unvisualize(className) {
    var ArgElements = document.querySelectorAll(className);
    fadeList(ArgElements,TransitionTime);
}
