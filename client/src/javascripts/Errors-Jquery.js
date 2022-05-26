import $ from "jquery"

$(document).on("ready", function() {
    $("closebtn").on("click", function () {
        $("alerta").fadeOut(2500);
    });
});