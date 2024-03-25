// ON LOAD ----------------------------------START
$(window).on("load", function () {
    setTimeout(function () {
        $(".animate").bind("inview", function (event, isInView) {
            if (isInView) {
                var animate = $(this).attr("data-animation");
                var speedDuration = $(this).attr("data-duration");
                var $t = $(this);
                setTimeout(function () {
                    $t.removeClass("animate");
                    $t.addClass(animate + " animate__animated");
                }, speedDuration);
            }
        });
    });
});
// ON LOAD ----------------------------------END