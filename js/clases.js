// Definición de clases *******************************************************
//*****************************************************************************

// Defino esta clase para poder incorporar métodos a los objetos de productos que vienen en formato JSON
// ya que en este formato no se pueden guardar funciones
class Producto {
    constructor(objeto) { // el constructor toma como parámetro un objeto, que va a ser el proveniente del array tomado del storage
        this.id = objeto.id;
        this.categoria = objeto.categoria.toLowerCase();
        this.codigo = objeto.codigo;
        this.marca = objeto.marca.toUpperCase(); // transforma a mayúsculas
        this.descripcion = capitalizar(objeto.descripcion);
        this.precioLista = objeto.precioLista;
        this.descuento = objeto.descuento;
        this.stock = objeto.stock;
        this.ptoRepedido = objeto.ptoRepedido;
        this.vendible = (objeto.stock > 0); // si el stock al cargar es menor a cero se setea false
        this.imagen = objeto.imagen;
        this.destacado = objeto.destacado;
    }

    precioLF() { // devuelve precio de venta final
        return this.precioLista * 1.21 * dolarVenta;
    }

    precioVF() { // devuelve precio de venta final
        return (this.precioLista * (1 - (this.descuento / 100)) * 1.21) * dolarVenta;
    }

    consultaVenta(cant) { // consulta si la cantidad demandada se puede vender
        return (this.stock >= cant);
    }

    vender(cant) { // ejecuta cambios de stock al hacer la venta
        if (cant >= 0 && this.consultaVenta(cant)) {
            this.stock = this.stock - cant;
            this.vendible = (this.stock > 0);
            return true;
        }
        return false;
    }

    ingresar(cant) { // ejecuta cambios de stock al hacer un ingreso / compra a proveedor
        if (cant >= 0) {
            this.stock = this.stock + cant;
            this.vendible = (this.stock > 0);
            return true;
        }
        return false;
    }

    repedir() { // consulta si se llegó al punto de repedido
        return (this.ptoRepedido >= this.stock);
    }
}

class ItemCarrito {
    constructor(objetoProducto, cantidad) {
        this.id = objetoProducto.id;
        this.prod = objetoProducto.descripcion;
        this.cant = cantidad;
    }
}

class CarritoUsuario {
    constructor(usu, carr) {
        this.usuario = usu;
        this.miSeleccion = carr;
    }
}

class Compra {
    constructor(nombre, apellido, email, direcc, tarjNum, tarjNom, tarjCVV, carrito, cuotas, total) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direcc = direcc;
        this.tarjetaNumero = tarjNum;
        this.tarjetaNombre = tarjNom;
        this.tarjetaCVV = tarjCVV;
        this.carrito = carrito;
        this.cuotas = cuotas;
        this.pagoTotal = total;
    }
}


// Funciones que se utilizan en las clases ************************************
// **************************************************************************** 

function capitalizar(frase) { // Es una funcion auxiliar que uso internamente en el constructor del los objetos Producto. Capitaliza la primer letra de cada palabra del string ingresado
    frase = frase.toString(); // convierto el valor ingresado a string para asegurarme 

    const texto = frase.split(" "); // convierto el string ingresado a un array separando palabras

    const capitalizado = texto.map(x => { // genero un nuevo array con map, capitalizando las palabras
        let primerLetra = x.charAt(0);
        let primerLetraCapital = primerLetra.toUpperCase();
        return x.replace(primerLetra, primerLetraCapital);
    });

    frase = capitalizado.join(" "); // devuelvo string con palabras espaciadas

    return frase;
}
