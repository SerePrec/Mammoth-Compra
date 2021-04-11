// **************************************************************************//
// ****Código asociado a elementos básicos comunes a todas las páginas*******//
// **************************************************************************//

$(document).ready(function () {

    // Asociaciones de eventos relacionados al botón fijo para ir al principio
    // o final de la página. Con transición de scroll suave
    $("#botonMenu .botonMenu__link").click(() => {
        $("#botonMenu").toggleClass("active");
    });

    $("#botonMenu a.botonMenu__item:first-child").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: "0"
        }, 2000);
    });

    $("#botonMenu a.botonMenu__item:last-child").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".social").offset().top
        }, 2000);
    });

    // Eventos para el acordeón del sitemap que se ve en versión mobile 
    $(".mapaSitioAccordion .card-header").click(function (e) {
        $(this).toggleClass("desplegado");
    })
});