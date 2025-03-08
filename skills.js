
// Skills section
$('.progress').waypoint(function() {
    $('.technique .progress-bar').each(function() {
        $(this).html("width", $(this).attr("aria-valuenow") + '%');
    });
    }, {
    offset: '80%'
    });
    