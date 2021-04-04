// Generación del array "productos" con que voy a trabajar en mi proyecto *****
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
productos.push(new Producto(
    "8",
    "bicicletas",
    "CODIGO",
    "Giant",
    "Bicicleta Giant Propel Advanced Sl 0 Disc 2020",
    510000,
    0,
    2,
    1,
    "producto8.jpg",
    true
));
productos.push(new Producto(
    "9",
    "bicicletas",
    "CODIGO",
    "Orbea",
    "Bicicleta Orbea Gain M10 2019",
    374000,
    20,
    2,
    1,
    "producto9.jpg",
    false
));
productos.push(new Producto(
    "10",
    "bicicletas",
    "CODIGO",
    "Specialized",
    "Bicicleta Specialized Creo Sl E5 Comp 2020",
    412000,
    0,
    3,
    1,
    "producto10.jpg",
    false
));
productos.push(new Producto(
    "11",
    "bicicletas",
    "CODIGO",
    "Liv",
    "Bicicleta Liv Envi Advanced Pro 1 Disc 2021",
    437000,
    10,
    3,
    1,
    "producto11.jpg",
    true
));
productos.push(new Producto(
    "12",
    "bicicletas",
    "CODIGO",
    "Scott",
    "Bicicleta Scott Plasma RC 2021",
    628000,
    0,
    2,
    1,
    "producto12.jpg",
    true
));
productos.push(new Producto(
    "13",
    "bicicletas",
    "CODIGO",
    "Giant",
    "Bicicleta Giant TCR Advanced SL 1 Disc 2021",
    475000,
    0,
    2,
    1,
    "producto13.jpg",
    false
));
productos.push(new Producto(
    "14",
    "bicicletas",
    "CODIGO",
    "Specialized",
    "Bicicleta Specialized Turbo Levo Comp 29'' 2021",
    523000,
    0,
    2,
    1,
    "producto13.jpg",
    true
));
productos.push(new Producto(
    "15",
    "bicicletas",
    "CODIGO",
    "Cannondale",
    "Bicicleta Cannondale Scalpel Carbon 3 2021",
    482000,
    0,
    2,
    1,
    "producto15.jpg",
    false
));
productos.push(new Producto(
    "16",
    "bicicletas",
    "CODIGO",
    "Orbea",
    "Bicicleta Orbea Oiz M30 29'' 2020",
    342000,
    20,
    2,
    1,
    "producto16.jpg",
    false
));
productos.push(new Producto(
    "17",
    "bicicletas",
    "CODIGO",
    "Merida",
    "Bicicleta Merida Big Nine 100 2x 2021",
    118000,
    10,
    4,
    1,
    "producto17.jpg",
    false
));
productos.push(new Producto(
    "18",
    "bicicletas",
    "CODIGO",
    "Cannondale",
    "Bicicleta Cannondale Trail 7 2021",
    157000,
    0,
    4,
    1,
    "producto18.jpg",
    true
));
productos.push(new Producto(
    "19",
    "bicicletas",
    "CODIGO",
    "Giant",
    "Bicicleta Giant XTC Advanced SL 29 1 2021",
    423000,
    0,
    2,
    1,
    "producto19.jpg",
    false
));
productos.push(new Producto(
    "20",
    "bicicletas",
    "CODIGO",
    "Conor",
    "Bicicleta Conor Milano 28'' 2021",
    42000,
    0,
    3,
    1,
    "producto20.jpg",
    false
));
productos.push(new Producto(
    "21",
    "bicicletas",
    "CODIGO",
    "Ryme Bikes",
    "Bicicleta Ryme Dubai 28'' 2021",
    53000,
    15,
    0,
    1,
    "producto21.jpg",
    false
));
productos.push(new Producto(
    "22",
    "bicicletas",
    "CODIGO",
    "BH",
    "Bicicleta BH Ibiza 2021",
    68000,
    0,
    2,
    1,
    "producto22.jpg",
    true
));
productos.push(new Producto(
    "23",
    "componentes",
    "CODIGO",
    "Marzocchi",
    "Marzocchi Bomber Z2 E- Bike 29'' Air 130 Rail Boost",
    58000,
    15,
    3,
    1,
    "producto23.jpg",
    false
));
productos.push(new Producto(
    "24",
    "componentes",
    "CODIGO",
    "Specialized",
    "Manillar Carretera Specialized S-Works Shallow Bend Carbon",
    51000,
    8,
    4,
    2,
    "producto24.jpg",
    false
));
productos.push(new Producto(
    "25",
    "componentes",
    "CODIGO",
    "Sram",
    "Grupo Completo MTB Sram XX1 Eagle AXS DUB Boost 175mm 34T",
    123000,
    13,
    4,
    2,
    "producto25.jpg",
    false
));
productos.push(new Producto(
    "26",
    "componentes",
    "CODIGO",
    "Shimano",
    "Disco de freno Shimano 180mm Rt-MT800",
    9800,
    10,
    5,
    2,
    "producto26.jpg",
    false
));
productos.push(new Producto(
    "27",
    "componentes",
    "CODIGO",
    "Shimano",
    "Freno Shimano XTR 9000 Delantero",
    17800,
    0,
    4,
    2,
    "producto27.jpg",
    true
));
productos.push(new Producto(
    "28",
    "componentes",
    "CODIGO",
    "Shimano",
    "Freno Shimano XTR 9000 Trasero Post Resina Carbono X",
    19200,
    0,
    4,
    2,
    "producto28.jpg",
    true
));
productos.push(new Producto(
    "29",
    "componentes",
    "CODIGO",
    "Sram",
    "Freno Sram Code RSC A1 Delantero",
    25400,
    12,
    3,
    1,
    "producto29.jpg",
    false
));
productos.push(new Producto(
    "30",
    "componentes",
    "CODIGO",
    "Sram",
    "Freno Sram Code RSC A1 Trasero",
    25800,
    12,
    3,
    1,
    "producto30.jpg",
    false
));
productos.push(new Producto(
    "31",
    "componentes",
    "CODIGO",
    "Continental",
    "Cubierta Continental X-King 26x2.20 Rígida",
    2840,
    20,
    3,
    1,
    "producto31.jpg",
    true
));
productos.push(new Producto(
    "32",
    "componentes",
    "CODIGO",
    "Specialized",
    "Cubierta Specialized Ground Control Grid Tubeless Ready 29x2.3",
    5280,
    0,
    0,
    1,
    "producto32.jpg",
    true
));
productos.push(new Producto(
    "33",
    "componentes",
    "CODIGO",
    "Continental",
    "Cubierta Continental Grand Prix 5000 700 x 25",
    4860,
    15,
    5,
    1,
    "producto33.jpg",
    false
));
productos.push(new Producto(
    "34",
    "componentes",
    "CODIGO",
    "Continental",
    "Cubierta Continental Gatorskin 700 x 25",
    3590,
    12,
    5,
    1,
    "producto34.jpg",
    false
));
productos.push(new Producto(
    "35",
    "componentes",
    "CODIGO",
    "Maxxis",
    "Cubierta Maxxis Pursuer 700 x 25",
    2580,
    12,
    5,
    1,
    "producto35.jpg",
    false
));
productos.push(new Producto(
    "36",
    "componentes",
    "CODIGO",
    "Giant",
    "Cuadro Triatlón Giant Trinity Advanced Pro Tri 2020",
    258000,
    0,
    2,
    1,
    "producto36.jpg",
    true
));
productos.push(new Producto(
    "37",
    "componentes",
    "CODIGO",
    "Fizik",
    "Sillín Fizik Antares R1 Carbon",
    15400,
    0,
    5,
    2,
    "producto37.jpg",
    true
));
productos.push(new Producto(
    "38",
    "componentes",
    "CODIGO",
    "Selle Italia",
    "Sillín Selle Italia MAX SLR Gel Superflow",
    11900,
    0,
    4,
    2,
    "producto38.jpg",
    false
));
productos.push(new Producto(
    "39",
    "componentes",
    "CODIGO",
    "Specialized",
    "Ruedas MTB Specialized Stout SL Disc 29''",
    21800,
    0,
    4,
    2,
    "producto39.jpg",
    false
));
productos.push(new Producto(
    "40",
    "componentes",
    "CODIGO",
    "Mavic",
    "Ruedas MTB Mavic Crossmax Elite Carbon 29 Boost XD Intl.",
    111900,
    0,
    3,
    1,
    "producto40.jpg",
    true
));
productos.push(new Producto(
    "41",
    "accesorios",
    "CODIGO",
    "Topeak",
    "Alforjas Topeak Bolsa Trunkbag DXP Velcro",
    8090,
    0,
    3,
    1,
    "producto41.jpg",
    true
));
productos.push(new Producto(
    "42",
    "accesorios",
    "CODIGO",
    "Zefal",
    "Bolso Zefal Traveler 80",
    5600,
    15,
    5,
    1,
    "producto42.jpg",
    false
));
productos.push(new Producto(
    "43",
    "accesorios",
    "CODIGO",
    "Ortlieb",
    "Alforjas Ortlieb Sport-Roller Plus QL2.1 12.5L",
    5600,
    17,
    5,
    1,
    "producto43.jpg",
    false
));
productos.push(new Producto(
    "44",
    "accesorios",
    "CODIGO",
    "Cruz",
    "Portabici Techo Cruz Alu Bike",
    4800,
    27,
    5,
    1,
    "producto44.jpg",
    false
));
productos.push(new Producto(
    "45",
    "accesorios",
    "CODIGO",
    "Hast",
    "Portabici Techo Hast Fijación Cuadro",
    8900,
    0,
    3,
    1,
    "producto45.jpg",
    true
));
productos.push(new Producto(
    "46",
    "accesorios",
    "CODIGO",
    "Menabo",
    "Barras Porta Portón Menabo Stand Up 3",
    25600,
    0,
    4,
    1,
    "producto46.jpg",
    true
));
productos.push(new Producto(
    "47",
    "accesorios",
    "CODIGO",
    "BNB Rack",
    "Barras Porta BNB Rack 2 biker 4x4",
    55000,
    15,
    4,
    1,
    "producto47.jpg",
    false
));
productos.push(new Producto(
    "48",
    "accesorios",
    "CODIGO",
    "Garmin",
    "Pulsómetro de Bicicleta Garmin Edge 530 Pack",
    36700,
    8,
    4,
    1,
    "producto48.jpg",
    false
));
productos.push(new Producto(
    "49",
    "accesorios",
    "CODIGO",
    "Bryton",
    "Pulsómetro de Bicicleta Bryton Rider 750 T Cadencia, FC y Veloc.",
    33900,
    0,
    4,
    1,
    "producto49.jpg",
    true
));
productos.push(new Producto(
    "50",
    "accesorios",
    "CODIGO",
    "Polar",
    "Pulsómetro de Pulsera Polar Ignite Gen",
    19900,
    0,
    4,
    1,
    "producto50.jpg",
    true
));
productos.push(new Producto(
    "51",
    "accesorios",
    "CODIGO",
    "Garmin",
    "Pulsómetro de Pulsera Garmin Fenix 6 Solar Black Strap",
    69900,
    0,
    2,
    1,
    "producto50.jpg",
    true
));