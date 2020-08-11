class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref,direccion ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
        this.direccion = direccion
      
    }

}

let noticia1 = new Noticia(
    "Diseño supersonico aleatorio ",
    "Mas rapido que el Concorde",
    "noticia1.jpg",
    "Los planes de Virgin Galactic para los viajes del futuro no se van a limitar a su nueva nave espacial turística presentada hace unos días. El fabricante aeroespacial, en colaboración con Rolls-Royce prepara un nuevo supersónico comercial digno sucesor del ya mítico Concorde de Boeing. Mach 3 es el nombre provisional que tiene y, por si no era obvio, su velocidad punta espera ser de Mach 3.Difícil conseguir la belleza nostálgica que evoca el Concorde, pero el avión supersónico de Virgin Galactic sí que conseguirá la velocidad del Concorde y también la superará, si todo va según lo planeado. Mientras que el Concorde alcanzaba un máximo de Mach 2,04 (unos 2.500 km/h), el supersónico de Virgin Galactic espera llegar a Mach 3 (unos 3.600 km/h). Según indica la compañía, el avión estará diseñado para tener entre 9 y 12 asientos para pasajeros, dependiendo de la configuración. Muy lejos de los 128 pasajeros que albergaba el Concorde en sus tiempos. Esta reducción tan drástica probablemente tenga un efecto directo en el precio de los billetes, haciendo que volar en el Mach 3 de Virgin Galactic sea honor de sólo unos pocos que puedan permitírselo. Aún falta bastante para que veamos a este avión alzar el vuelo. El diseño del prototipo acaba de pasar las revisiones de Mission Concept Review de la NASA. Ahora es trabajo de Virgin Galactic y Rolls-Royce hacerlo realidad más allá de diseños a ordenador. También hay que conseguir que vuele a Mach 3 y, sobre todo, que no reviente en la hazaña. Otros desafíos que tiene por delante son el de cómo lidiar con el ruido que genera un supersónico, los materiales adecuados para que aguante las altas tensiones y temperaturas o algo tan sencillo como encontrar la manera de que sea rentable un avión que consume tantos recursos.  ",
    "./news.html",
   
)







let listnoticias = [];


listnoticias.push(noticia1,)





listnoticias.forEach(x=>{
    createCard(x);

})



function createCard(Noticia){
    
let containerProducts = document.getElementById("container-productos");
let div_card = document.createElement("div"); 
div_card.classList.add("card")
let h1_card = document.createElement("h1")
h1_card.textContent =  Noticia.titulo 
h1_card.classList.add("h1-text")
div_card.appendChild(h1_card)
let h2_card = document.createElement("h2")
h2_card.textContent =  Noticia.subtitulo 
h2_card.classList.add("h2-text")
div_card.appendChild(h2_card)
let img_card = document.createElement("img");
img_card.classList.add("img-card");
img_card.src = "../Img/" + Noticia.imgSrc
div_card.appendChild(img_card);
let p_card = document.createElement("p")
p_card.textContent =  Noticia.contenido
p_card.classList.add("card-text")
div_card.appendChild(p_card)


containerProducts.appendChild(div_card); 
}

 


