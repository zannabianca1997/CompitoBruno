//Icon adding, movement, positioning and resizing

var icons=[];

function AddIcons() {
    iconDimension = GetIconDimension()
    icons = $(".icon").toArray();
    document.write("" + iconDimension +", <br>"+ icons + "<br>")
    $(".icon>img").each(function (index) { 
        $(this).css('transform-origin','top left')
               .css('transform','scale(' + iconDimension/$(this).width() + ',' + iconDimension/$(this).height() + ')');
        document.write("" + $(this).width() + ", " + $(this).height() + "  -  ")
    });
}

function GetIconDimension() {
    return ($(document).width()/4 - 10);
}
