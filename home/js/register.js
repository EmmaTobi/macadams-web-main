
$(function () {
    showHideNav();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 60) {
            $("#topper").addClass("hide-top-nav");
            $("#back-to-top").fadeIn();
        } else {

            $("#topper").removeClass("hide-top-nav");
            $("#back-to-top").fadeOut();
        }
    }
});


$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 500, "easeInOutExpo");

    });

});