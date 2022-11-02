// accordian options

var action = "click";
var speed = "500";

$(document).ready(function () {
    $('li.q').on(action, function () {
        //get next element
        $(this).next()
            .slideToggle(speed)
                // select all other answers to close
                .siblings('li.a')
                    .slideUp();
    // get img for active question
    var img = $(this).children('img');
    //remorve rotate class for all img except the active one 
    $('img').not(img).removeClass('rotate');
    // toggle rotate class
    img.toggleClass('rotate');

    });

});