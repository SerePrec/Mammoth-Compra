// **************************************************************************//
// ************************* Carga de los productos *************************//
// **************************************************************************//

const URLJSON = "data/productos.json";
const productos = [];

function productosAjax() {
    return $.ajax({
        method: "GET",
        url: URLJSON,
        dataType: "json",
        success: function (respuesta) {
            //console.log(respuesta);

            for (const objeto of respuesta) {
                //construyo mi objeto Producto (con métodos que voy a utilizar) en base
                //a los objetos creados a partir del JSON recibido del servidor (sin métodos)
                //y los pusheo al array productos 
                productos.push(new Producto(objeto));
            }
            //console.log(productos);

            // Guardo los productos en formato JSON y los almaceno en el sessionStorage.
            // Como para simular que vienen de un servidor en la página de compra.
            let productosJSON = JSON.stringify(productos);
            sessionStorage.setItem("productos", productosJSON);
        }
    });
}

// **************************************************************************//
// ************************ Carga de valor del dólar ************************//
// **************************************************************************//

const URLDOLAR = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
let valoresDolar = [];
let dolarCompra, dolarVenta;

function dolarAjax() {
    return $.ajax({
        method: "GET",
        url: URLDOLAR,
        dataType: "json",
        success: function (respuesta) {
            //console.log(respuesta);
            valoresDolar = respuesta;
            dolarOficial(valoresDolar);
            // Con una animación una vez que obtenemos la respuesta, actualiza el valor en la página
            $(".dolar")
                .slideUp("slow", function () {
                    $(this)
                        .children("p").text(`${dolarCompra.toFixed(2)} / ${dolarVenta.toFixed(2)}`)
                        .parent().slideDown("slow");
                })
        },
    });
}

// Recorre el array devuelto por el servidor y obtiene la cotización del Dolar Oficial
function dolarOficial(vectorDolar) { 
    for (const valor of vectorDolar) {
        if (valor.casa.nombre == "Dolar Oficial") {
            //lo paso a número decimal, pero debo convertir las "," en "." para que lo tome
            dolarCompra = parseFloat(valor.casa.compra.replace(",", "."));
            dolarVenta = parseFloat(valor.casa.venta.replace(",", "."));
            sessionStorage.setItem("dolar", dolarVenta);
        }
    }
}
