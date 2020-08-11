class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
      
    }

}

let noticia3 = new Noticia(
    " Los siete juegos que nos ha vendido la nueva generacion",
    "Lo que nos espera...",
    "noticia3.jpg",
    "Puede que PS5 y Xbox Series X no cuenten a día de hoy con un futuro inmediato demasiado esperanzador, pero eso no quita que lo que está por venir en 2021 y más allá sea de lo más prometedor.  Ambas consolas tienen sobre la mesa auténticos portentos visuales que, junto a toda la retahíla de títulos que está por llegar, parecen soportar sobre sus hombros las razones que nos llevarán a comprar una consola de nueva generación. Puede que no sea este año y puede que tampoco a principios del siguiente, pero tarde o temprano acabaremos cayendo gracias a juegos como estos. El retorno de la mejor cara de Guerrilla Games parecía navegar en su tráiler entre la CGI y las escenas creadas con el motor del juego, pero si este es el nivel al que aspiran con Horizon Forbidden West, dudo mucho que acabemos recibiendo algo muy inferior a nivel jugable. Es, sin duda alguna, uno de los juegos más prometedores de la nueva generación. Uno que ya no tiene nada que demostrar porque ya desde su beta ha desplegado todo su potencial es Microsoft Flight Simulator. El simulador de vuelo de Microsoft ofrece una de las estampas más realistas y espectaculares de la nueva generación. Es, además, el único que podremos empezar a disfrutar este año. Tras demostrar de forma magistral que sus estudios sobre las enfermedades mentales podían trasladarse a la perfección a un videojuego, ahora en Ninja Theory quieren hacer lo propio con su investigación sobre el terror psicológico. Una ilusionante idea que se suma al hiperrealismo de sus escenas en Project Mara. Otro sobre el que no hubo lugar a dudas con su potencial fue Ratchet & Clank: Rift Apart. Sony hizo bien en asegurarse la colaboración de Insomniac Games para dar forma a su catálogo, y el vídeo con gameplay mostrando las bondades visuales de PS5 y su SSD da buena cuenta de ello. Otra acertada adquisición fue la de Ninja Theory por parte de Microsoft y, junto al Project Mara que mostrábamos unas líneas más arriba, Hellblade 2 también promete dejarnos temblando con su apartado visual. Hay muchas ganas de ver más sobre él, pero parece que la cosa va para largo. Cerramos con dos títulos que comparten un mismo espíritu: su pasión por las cuatro ruedas. Gran Turismo 7 y Forza Motorsport no han sido demasiado reveladores a nivel visual, pero lo que uno espera con estas dos sagas es contenido de la más alta calidad y aún está por llegar el día en que decepcionen.  ",
    "./news3.html"
)







let listnoticias = [];


listnoticias.push(noticia3,)

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