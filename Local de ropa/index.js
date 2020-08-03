class Producto {

    constructor(talle, color, tipo) {
        this.talle = talle;
        this.color = color;
        this.tipo = tipo;
        
    }

}

let Zapato = new Producto( 
    35,
    "Marron",
    "Zapato",
)

let Zapato2 = new Producto( 
    39,
    "Azul",
    "Zapato",
)

let Zapato3 = new Producto( 
    42,
    "Negro",
    "Zapato",
)

let Remera = new Producto( 
    "L",
    "Rojo",
    "Remera",
)

let Remera2 = new Producto( 
    "XL",
    "Negra",
    "Remera",
)

let Remera3 = new Producto( 
    "S",
    "Verde",
    "Remera",
)

let Pantalon = new Producto( 
    "XL",
    "Rojo",
    "Pantalon",
)

let Pantalon2 = new Producto( 
    "M",
    "Negro",
    "Pantalon",
)

let Pantalon3 = new Producto( 
    "L",
    "Azul",
    "Pantalon",
)

let Pantaloncorto = new Producto( 
    "S",
    "Azul",
    "Gris",
)

let listaProductos = [];

listaProductos.push(Zapato, Zapato2, Zapato3, Remera, Remera2, Remera3, Pantalon, Pantalon2, Pantalon3, Pantaloncorto)

let listaAzul = listaProductos.filter(x => x.color === "Azul")

console.log("LISTA AZULES")
console.log(listaAzul)

let listacolorytalle = listaProductos.filter(x => x.color === "Rojo" && x.talle === "XL" )



console.log("LISTA COLOR Y TALLE")
console.log(listacolorytalle)

let listaverde = listaProductos.map(x=> ({
    talle : x.talle,
    tipo : x.tipo,
    color : "Verde",
    
}))


console.log("LISTA VERDE")
console.log(listaverde)

let primerElementoTalleS = listaProductos.find(x=> x.talle === "S")
console.log("Ubicacion Talle S")
console.log(primerElementoTalleS)




let pantalonposicion = listaProductos.findIndex(x=>x.tipo === "Pantalon")
console.log("Ubicacion del pantalon")
console.log(pantalonposicion)