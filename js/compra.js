// **************************************************************************//
// ************* Declaración de variables y constantes globales *************//
// **************************************************************************//

//Generales ***************************
let acumulado = 0;
let carritoUsuario = {};
let cuotas, importeCuota;
let email, nombre;
let usuario = "";

const interes3Cuotas = 8;
const interes6Cuotas = 12;
const interes12Cuotas = 20;
const interes18Cuotas = 30;

//DOM *********************************
const $btnAceptaCompra = $("#btnAceptaCompra");
const $contenedorCuotas = $("#contenedorCuotas");
const $contenedorResumenCompra = $("#contenedorResumenCompra");
const $divModalMensajes = $("#modalMensajes");
const $divModalMensajesFondo = $("#modalMensajesFondo");
const $formularioCompra = $("#formularioCompra");
const $importe = $(".importe p");
const $inputUsuario = $("#inputUsuario");
let $inputRadios; // debo esperar a que cargue la parte de las cuotas para definir esta variable de consulta
$(document).ready(function () {
    $inputRadios = $("[name='numCuotas']");
});
const $numItems = $("#numItems");


// Definición de clases *******************************************************
// Ver archivo clases.js ******************************************************


// **************************************************************************//
// ******************* Obtención de valores del storage *********************//
// **************************************************************************//

// Simulo obtener los productos de un servidor (sessionStorage) en formato JSON
let productosJSON = sessionStorage.getItem("productos");
let productosServidor;
let productos = [];

if (productosJSON) { // Esta verificación evita dar error si la pagina se abre independiente de la sesion. SOLO es útil proviniendo de index.html
    productosServidor = JSON.parse(productosJSON);

    // Ahora tengo un listado de objetos y al instanciarlos con la clase Productos, obtengo
    // un nuevo listado con objetos que tienen los métodos que el JSON no se pueden guardar, y puedo usarlos
    for (const objeto of productosServidor) {
        productos.push(new Producto(objeto)); //construyo mi objeto Producto (con métodos) en base a los objetos del storage (sin métodos)
    }
}

let dolarVenta = parseFloat(sessionStorage.getItem("dolar"));


// **************************************************************************//
// *********************** Definiciones de funciones ************************//
// **************************************************************************//

// Funciones de carga de Usuario y Carrito ************************************
//*****************************************************************************

const inicioCompra = () => { // Inicializa la página
    validarUsuario(); // recoje el valor del usuario
    if (!cargarCarrito(usuario) || carritoUsuario.length == 0 || !productosJSON || !dolarVenta) { // recoje el carrito actual
        // si no hay carrito por algún motivo, o no se puede obtener la lista de productos o el dolar del sessionStorage,
        // redirige a la página anterior del proceso. Ej: Esto puede pasar al recargar la página una vez terminada
        // la compra o si la pagina se abre independiente de la sesion.

        console.log("No hay carrito que procesar, se redirige a index.html"); // para control interno
        location.assign("index.html");
        return;
    }

    mostrarResumenCompra(); // carga el contenido HTML relativo a la selección de productos previa
    actualizarIconoCarrito();
    animarResumenCompra();
};


function validarUsuario() { // si hay  un usuario cargado, lo setea en el input (que en este caso no tiene habilitado el boton de logueo).
    // Si no se trata de una compra sin un usuario cargado. Es posible porque igualmente se piden todos los datos para la venta
    let user = localStorage.getItem("usuario");
    if (user) {
        $inputUsuario.val(user);
        usuario = user;
    }
    $inputUsuario.attr("disabled", true);
}


function cargarCarrito(user) { // se carga el carrito actual del localStorage
    let carritoGuardado = localStorage.getItem("carritoUsuario");
    carritoGuardado = JSON.parse(carritoGuardado);

    if (carritoGuardado && carritoGuardado.usuario == user && carritoGuardado.miSeleccion.length != 0) {
        carritoUsuario = carritoGuardado;
        console.log(carritoUsuario); // Información de control interno
        return true;
    } else {
        return false;
    }

}


// Funciones relacionadas a mostrar el resumen de compra **********************
//*****************************************************************************

function mostrarResumenCompra() { //genera el HTML para la zona de resumen de compra

    let arrayFilas = []; // trabajo con un array para evitar múltiples regeneraciones del DOM
    let total = 0;

    for (const item of carritoUsuario.miSeleccion) { //generación del HTML de las filas de la tabla del resumen de compra
        let productoItem = productos.find(prod => prod.id == item.id);
        let fila = `
            <tr>
                <td><img src="img/productos/${productoItem.imagen}" class="card-img-top" alt=""></td>
                <td>${productoItem.descripcion}</td>
                <td class="text-center">${item.cant}x</td>
                <td class="text-right font-weight-bold">$${formatoPrecio(productoItem.precioVF())}</td>
            </tr>`;

        arrayFilas.push(fila);
        total += (productoItem.precioVF() * item.cant);
    }

    $contenedorResumenCompra.append(arrayFilas); // inserto el HTML de la tabla en el contenedor por medio de un array
    acumulado = total
    $importe.html("Total de compra $" + formatoPrecio(total)); // inserto el HTML del total en el elemento predefinido correspondiente

    // finalmente calculo el importe de cada cuota según su interés y genero dinámicamente el HTML
    // del interior del contenedor de cuotas
    let importeC3 = (acumulado * (1 + interes3Cuotas / 100) / 3);
    let importeC6 = (acumulado * (1 + interes6Cuotas / 100) / 6);
    let importeC12 = (acumulado * (1 + interes12Cuotas / 100) / 12);
    let importeC18 = (acumulado * (1 + interes18Cuotas / 100) / 18);

    $contenedorCuotas.html(`
            <div class="form-check">
                <input class="form-check-input" type="radio" name="numCuotas" id="inputRadio1"
                    value="1" checked>
                <label class="form-check-label" for="inputRadio1">
                    <span>1 Cuota de $${formatoPrecio(acumulado)}</span>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="numCuotas" id="inputRadio2"
                    value="3">
                <label class="form-check-label" for="inputRadio2">
                <span>3 Cuotas de $${formatoPrecio(importeC3)}</span><i> (Int.: ${interes3Cuotas}%) Total: $${formatoPrecio(importeC3*3)}</i>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="numCuotas" id="inputRadio3"
                    value="6">
                <label class="form-check-label" for="inputRadio3">
                <span>6 Cuotas de $${formatoPrecio(importeC6)}</span><i> (Int.: ${interes6Cuotas}%) Total: $${formatoPrecio(importeC6*6)}</i>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="numCuotas" id="inputRadio4"
                    value="12">
                <label class="form-check-label" for="inputRadio4">
                <span>12 Cuotas de $${formatoPrecio(importeC12)}</span><i> (Int.: ${interes12Cuotas}%) Total: $${formatoPrecio(importeC12*12)}</i>
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="numCuotas" id="inputRadio5"
                    value="18">
                <label class="form-check-label" for="inputRadio5">
                <span>18 Cuotas de $${formatoPrecio(importeC18)}</span><i> (Int.: ${interes18Cuotas}%) Total: $${formatoPrecio(importeC18*18)}</i>
                </label>
            </div>`);
}


function animarResumenCompra() { // genera animaciones concatenadas de la columna resumen de compra y el sector de cuotas
    $(document).ready(function () { // verifica que este listo el documento
        $contenedorResumenCompra.find("tr").each(function (indice) { // sobre cada <tr> itera y aplica una animación
            if (indice == $contenedorResumenCompra.find("tr").length - 1) { //si es el último elemento aplica una animación
                //con 2 concatenaciones, cosa que no ocurre con los demás pasos de la iteración.
                $(this).delay(indice * 150).animate({
                    opacity: "1"
                }, 500, function () { // al terminar la animación de este último elemento, llama a animar $importe
                    $importe.slideDown(200, function () { // al termianr la animación, anima $contenedorCuotas
                        $contenedorCuotas.parent().slideDown(1000);
                    });
                });
                return false;
            }
            $(this).delay(indice * 150).animate({ //asigna animaciones con un delay creciente para que inicien secuencialmente
                opacity: "1"
            }, 500);
        });
    });
}


// Funciones de envío de la información de compra al "servidor" ***************
//*****************************************************************************

function enviarPago() {
    $divModalMensajes.addClass("show");
    $divModalMensajesFondo.addClass("show");
    $divModalMensajes.find(".modal-body h4").text("Enviando Datos...");

    let URLPAGAR = "https://jsonplaceholder.typicode.com/posts";
    const dataCompra = generarDataCompra();

    // SIMULACIÓN DE AJAX POST
    $.ajax({
        method: "POST",
        url: URLPAGAR,
        data: dataCompra,
        success: function (respuesta) {
            //console.log(respuesta) //control interno para verificar respuesta
            console.log("%c----- PAGO ACEPTADO -----",
                "color:white; background-color: green; padding: 3px"); // Infomación de control interno

        },
        complete: function () {
            $divModalMensajes.find(".modal-body h4").text("Validando Pago...");
            // Simulo un tiempo de unos segundos de validación del pago una vez
            // que obtengo la respuesta del servidor y completo sucess
            setTimeout(function () {
                $divModalMensajes.removeClass("show");
                $divModalMensajesFondo.removeClass("show");
                $divModalMensajes.find(".modal-body h4").text("");
                
                cargarDetalleCompra(carritoUsuario.miSeleccion); // llamo a la funcion para cargar el HTML del detalle de compra
                console.log("Mi Carrito:", carritoUsuario); // info de control interno
                verificarReposicion(); // llamo a verificar si hay productos que reponer (por debajo o en el punto de repedido)

                carritoUsuario.miSeleccion = []; //Se pone a cero el carrito una vez concretada la compra
                localStorage.setItem("carritoUsuario", JSON.stringify(carritoUsuario)); // actualizo el carritoUsuario actual en el localStorage
                actualizarIconoCarrito();
            }, 3000);
        }
    });
}


function generarDataCompra() {
    //Capturo los datos del usuario, tarjeta y forma de pago
    nombre = $("#inputNombre").val();
    const apellido = $("#inputApellido").val();
    email = $("#inputEmail").val();
    const direccion = $("#inputDireccion").val();
    const tarjetaCreditoNum =
        $("#tarjetaCredito input").eq(0).val() +
        $("#tarjetaCredito input").eq(1).val() +
        $("#tarjetaCredito input").eq(2).val() +
        $("#tarjetaCredito input").eq(3).val();
    const tarjetaCreditoNombre = $("#inputNomTarjeta").val();
    const tarjetaCreditoVtoMes = $("#inputMM").val();
    const tarjetaCreditoVtoAnio = $("#inputAA").val();
    const tarjetaCreditoCVV = $("#inputCVV").val();

    cuotas = parseInt($inputRadios.filter(":checked").val()); // Capturo que input del tipo radio esta seleccionado
    switch (cuotas) { // en base al valor del input, asigno las variables de cuotas e importeCuota que utilizo en el detalle de compra
        case 1:
            importeCuota = acumulado;
            break;
        case 3:
            importeCuota = (acumulado * (1 + interes3Cuotas / 100) / 3);
            break;
        case 6:
            importeCuota = (acumulado * (1 + interes6Cuotas / 100) / 6);
            break;
        case 12:
            importeCuota = (acumulado * (1 + interes12Cuotas / 100) / 12);
            break;
        case 18:
            importeCuota = (acumulado * (1 + interes18Cuotas / 100) / 18);
            break;
        default:
            break;
    }

    const pagoTotal = cuotas * importeCuota;

    let compra = new Compra(
        nombre,
        apellido,
        email,
        direccion,
        tarjetaCreditoNum,
        tarjetaCreditoNombre,
        tarjetaCreditoVtoMes,
        tarjetaCreditoVtoAnio,
        tarjetaCreditoCVV,
        carritoUsuario,
        cuotas,
        pagoTotal
    );

    return compra;
}


// Funciones relacionadas a mostrar el detalle final de la compra *************
//*****************************************************************************

function cargarDetalleCompra(vectorComprado) { // carga el detalle final de la compra en la página
    const $checkOutCompra = $("#checkOutCompra");
    const $padre = $checkOutCompra.parent();
    $checkOutCompra.remove(); // remueve de la página toda la parte que ya no voy a usar en esta fase

    //Creo un div que va a contener todo el HTML que voy a generar por partes de 
    //manera dinámica en base a los datos de vectorComprando y de los valores relativos a las cuotas seleccionadas
    //y algunos datos introducidos por el usuario
    let productoItem;
    let codigoHTML = `
        <div id="detalleCompra">
            <h2 class="text-center mt-5">Muchas Gracias Por Su Compra!</h2>
            <p class="text-center font-weight-bold font-italic mb-3">${nombre}, en unos minutos recibirás en tu casilla de e-mail 
                ${email} los detalles para coordinar la entrega</p>
            <h4>Detalle de compra</h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan="2">PRODUCTO</th>
                        <th class="text-center" scope="col">CANTIDAD</th>
                        <th class="" scope="col">SUBTOTAL</th>
                    </tr>
                </thead>
                <tbody>`;

    for (let item of vectorComprado) {
        productoItem = productos.find(producto => producto.id == item.id);
        codigoHTML += `
                    <tr>
                        <th scope="row">${vectorComprado.indexOf(item)+1}</th>
                        <td><img src="img/productos/${productoItem.imagen}" class="card-img-top" alt=""></td>
                        <td>${productoItem.descripcion}</td>
                        <td class="text-center">${item.cant}</td>
                        <td class="text-right font-weight-bold">$${formatoPrecio(productoItem.precioVF() * item.cant)}</td>
                    </tr>`;
    }

    codigoHTML += `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="text-center font-weight-bold" >TOTAL</td>
                        <td class="text-right font-weight-bold" >$${formatoPrecio(acumulado)}</td>
                    </tr>
                </tbody>
            </table>
            <div class="formaPago">
                <h4>Forma De Pago</h4>
                <p>${cuotas} Cuota/s de: $${formatoPrecio(importeCuota)}</p>
                <p>Total a pagar (*): $${formatoPrecio(cuotas*importeCuota)}</p>
            </div>
            <p class="leyenda">(*)Incluye impuestos y financiación</p>`;

    $padre.append(codigoHTML);
    window.scrollTo(0, 0); // Hago scroll hasta el inicio de la página para asegurar que se visualice bien desde el inicio el contenido
    $("#detalleCompra").animate({ //Animación de aparición suave
        opacity: "1"
    }, 1500);
}


function actualizarIconoCarrito() { //refresca el contador del ícono carrito
    let contador = 0;
    for (const producto of carritoUsuario.miSeleccion) {
        contador += producto.cant;
    }
    $numItems.text(contador);
}


// Funciones auxiliares  ******************************************************
//*****************************************************************************

function verificarReposicion() { // verifica si es necesario reponer productos al finalizar la compra
    for (let producto of productos) {
        if (producto.repedir()) { //si es necesario repedir, lo muestra por consola a modo de simular un control interno
            console.log(
                "Es necesario reponer el stock de:\n" +
                "- " + producto.descripcion + "\n" +
                "Se encuentra " + (producto.ptoRepedido - producto.stock) + " unidades por debajo del punto de repedido"
            );
        }
    }
}


// **************************************************************************//
// ******************************** Eventos *********************************//
// **************************************************************************//

$formularioCompra.submit(function (e) { // Evento "submit" del formulario de compra
    e.preventDefault(); // freno su acción por defecto

    //Llamo a la función que capturan los valores ingresados y simulan el
    //envío al servidor
    enviarPago();
});


// **************************************************************************//
// ******************************* Ejecución ********************************//
// **************************************************************************//

inicioCompra();