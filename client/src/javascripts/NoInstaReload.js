import $ from "jquery"

$(window).on("beforeunload", function(e) {
    return e.originalEvent.returnValue = "Si recargas la página perderas el progreso";
});