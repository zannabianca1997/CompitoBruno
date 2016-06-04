//current opened argument
openedArgument = null;

//open an argument
function openArgument(argument) {
    if (!openedArgument) {
        $(".general").fadeOut(TransitionTime);
        $(".argument").fadeIn(TransitionTime);
    } else {
        $(openedArgument).fadeOut(TransitionTime);
    }
    openedArgument = argument;
    $(openedArgument).fadeIn(TransitionTime);
}
//open general elements, close argument ones
function openGenerals() {
    if (openedArgument) {
        $(".general").fadeIn(TransitionTime);
        $(".argument").fadeOut(TransitionTime);
        $(openedArgument).fadeOut(TransitionTime);
        openedArgument = null;
    }
}
