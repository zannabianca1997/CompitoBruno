//Icon adding, movement, positioning and resizing

icons=[];

function AddIcons() {
    for (var i = 0; i < icon_names.length; i++) {
        icons[i] = $("#"+icon_names[i])
        
        
    }
}

function GetIconDimension() {
    return ($(document).width()/4 - 10);
}
