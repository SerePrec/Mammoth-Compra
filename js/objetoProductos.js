
// Generación de los productos con que voy a trabajar en mi proyecto **********
//*****************************************************************************

// Decalaración del Array de productos, instanciando los respectivos objetos

const productos = [];

productos.push(new Producto(
    "1",
    "accesorios",
    "00001-B3",
    "podium",
    "Caramagnola plástica Podium 0.5L. versión eco. Color a granel.",
    450,
    0,
    50,
    10,
    "producto1.jpg",
    false
));
productos.push(new Producto(
    "2",
    "componentes",
    "M-MTB-0345",
    "maxxis",
    "Cubierta de kevlar Maxxis race king 29 x 2,15.",
    4750,
    0,
    15,
    5,
    "producto2.jpg",
    true
));
productos.push(new Producto(
    "3",
    "equipamiento",
    "N-CA-CI-50",
    "nutrisport",
    "Gel energizante Nutrisport con cafeína 50g. Express.",
    125,
    5,
    200,
    25,
    "producto3.jpg",
    false
));
productos.push(new Producto(
    "4",
    "equipamiento",
    "S-H-PREV.075-BC/RED/SM",
    "specialized",
    "Casco Specialized echelon II ruta. Verde FL / small.",
    15480,
    17,
    5,
    1,
    "producto4.jpg",
    true
));
productos.push(new Producto(
    "5",
    "accesorios",
    "Velo.St.12",
    "cateye",
    "Velocimetro Cateye inalámbrico ST-12.",
    3560,
    0,
    0,
    4,
    "producto5.jpg",
    true
));
productos.push(new Producto(
    "6",
    "componentes",
    "TUBOLITO.C.29/1.75-SP",
    "tubolito",
    "Cámara tubolito MTB 29 x 1.75.",
    450,
    0,
    18,
    10,
    "producto6.jpg",
    false
));
productos.push(new Producto(
    "7",
    "indumentaria",
    "S-S-SWOR.018-WT/42",
    "specialized",
    "Zapatillas Specialized S-Works de ruta. Blanco. Talle: 42.",
    14910,
    7,
    3,
    1,
    "producto7.jpg",
    false
));

// Guardo los productos en formato JSON y los almaceno en el sessionStorage.
// Como para simular que vienen de un servidor en la página de compra.

let productosJSON = JSON.stringify(productos);
sessionStorage.setItem("productos", productosJSON);
