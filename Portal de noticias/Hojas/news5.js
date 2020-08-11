class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
      
    }

}

let noticia5 = new Noticia(
    "Los músicos cobran muy poco por el streaming",
    "Spotify trae la solucion ",
    "noticia5.jpeg",
    "La industria de la música ha superado el punto de no retorno. El año pasado el 80% de los ingresos generados por los músicos de todo el punto provinieron de las plataformas de streaming, y no del formato físico, tan en decadencia. Sucede que tan radical reformulación del negocio ha provocado que unos agentes ganen y otros pierdan. A la cabeza de los primeros, Spotify, con un mercado cautivo de 270 millones de usuarios y una nueva y reciente valoración bursátil de $50.000 millones. Su CEO, Daniel Ek, tiene un mensaje para todos aquellos celosos de su éxito: trabajar más. Produce más. Ek ofreció una entrevista a Music Ally la semana pasada en la que respondía a las acusaciones de una parte de la industria, músicos principalmente, sobre su magro reparto de ingresos: Algunos artistas a los que les solía ir bien en el pasado puede que tengan dificultades en el escenario del futuro (...) donde no puedes grabar música una vez cada tres o cuatro años y creer que eso va a ser suficiente. Spotify no es injusta con sus músicos. Se trata de una narrativa falaz. Sucede que los músicos no trabajan lo suficiente. Conflicto. El origen del problema, ya muy antiguo, se encuentra en el modelo de remuneración de la plataforma. Por un lado, ajusta el dinero a percibir por cada escucha en base a las canciones más exitosas, un sistema que perjudica a los músicos de nicho o independientes. Por otro, no es particularmente generosa en relación a la competencia: Spotify entrega $1 de media por cada 229 escuchas; menos que Tidal (80), Apple Music (136) o Deezer (156). En su descargo, más que YouTube (1.449). Precariedad. Los rigores del algoritmo han reforzado la posición de los artistas y de los sellos más valiosos. Cuanto más se escucha una canción, más se promueve en los sistemas de recomendación de la plataforma, en un círculo vicioso similar al de Facebook y las noticias más leídas. Así las cosas, llegar a fin de mes por medio del streaming se ha convertido en una tarea titánica: 370.000 escuchas equivalen a unos $1.000. Aquí se desglosa algo más la equivalencia escucha/dinero. Un litro de leche: 311. Perezosos. ¿La opinión de Ek al respecto? Siento, realmente, que aquellos a los que no les está yendo bien en el streaming son predominantemente personas que quieren publicar música como solía hacerse. Los músicos, para ser exitosos, crear una relación continua con sus seguidores, lanzando discos o canciones al mismo tiempo que desarrollando un relato en torno a sus productos, un diálogo continuo con sus seguidores. Nada de concebir su arte como una mera pieza musical. Sesenta. Esto es algo en línea con algunos de los artistas más exitosos del presente, mitad músicos mitad narradores de su propia historia (Taylor Swift, Beyoncé, Drake, Kanye West y un largo etcétera). Pero también con prácticas más antiguas del pop. Mucho antes de que el álbum se convirtiera en la pieza musical por antonomasia, durante la década de los sesenta, los grupos producían sin cesar canciones, singles que trataban de exprimir toda su rentabilidad atiborrando las listas de éxitos. Durante aquella década, era habitual que los grupos compusieran, grabaran y publicaran decenas de canciones (para ellos o para otros grupos, como vimos a cuenta de Los Bravos); y que colocaran en el mercado un disco (o más) al año. The Beatles, por ejemplo, lanzaron diez discos entre 1965 y 1970; The Kinks, siete. Un estajanovismo forzado por las discográficas que imponía una presión extrema sobre muchos grupos, dependientes del ciclo de estreno-ventas-listas de la época. Tendencias del ayer, ¿tendencias del mañana? ",

    "./news5.html"
    ) 







let listnoticias = [];


listnoticias.push(noticia5,)

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