//Icon adding, movement, positioning and resizing

var icons = $(".icon"); //find div objects

function ScaleIcons() {
    iconDimension = GetIconDimension()
    $(".icon>img").each(function (index) { 
        $(this).css('transform-origin','top left')
               .css('transform','scale(' + iconDimension/$(this).width() + ',' + iconDimension/$(this).height() + ')');
    });
}

function GetIconDimension() {
    return ($(document).width()/4 - 10);
}
