class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
      
    }

}



let noticia6 = new Noticia(
    "Sony avisa de que Dualshock 4 no funcionará con juegos exclusivos de Playstation 5",
    "La compatibilidad de su nueva consola, aún a examen",
    "noticia6.jpg",
    "Más dudas en torno a las aún no del todo claras noticias en torno a la retrocompatibilidad de Playstation 5: el mando actual de Sony, Dualshock 4, no será compatible con los juegos exclusivos de la nueva consola. De momento sabemos que buena parte de los títulos de PS4 serán compatibles con PS5, y en ellos podremos seguir empleando el DualShock 4. El problema radica en los juegos nativos de la consola que saldrá a la venta las próximas Navidades. Afirma Sony en su blog oficial que pensamos que los juegos de PS5 deberían sacar partido de las nuevas características y funciones que llevaremos a la plataforma, incluyendo las del mando inalámbrico DualSense. Hacen con ello clara referencia a la respuesta háptica y los gatillos L2 y R2 adaptativos, que proporcionarán una respuesta sensorial más realista a lo que veamos en el juego. Aparte de eso, el blog avisa de que periféricos especializados como volantes, sticks arcade y mandos para simuladores de vuelo funcionarán en PS4 y PS5, así como los cascos inalámbricos Platinum y Gold y los auriculares que se conecten por USB o jack. La aplicación de control de cascos no será compatible con PS5. Los mandos third party licenciados por Playstation tendrán la misma compatibilidad que los oficiales de Sony y tanto los mandos de PS Move como el controlador de Playstation VR también funcionarán en los correspondientes juegos VR de PS5. En cualquier caso, para productos de third parties, Sony recomienda consultar con el fabricante. Aunque esta falta de compatibilidad de DualShock 4 con los juegos exclusivos de PS4 supone una pequeña traba para que Playstation 5 y Playstation 4 tracen un puente de entendimiento total, no es una cuestión sorprendente. Al fin y al cabo, Dualshock 3 no era compatible con PS4. Sin embargo, el salto que el controlador dio entre sus versiones 3 y 4 fue mucho mayor que el que dará con la cuarta y la quinta. Mientras que Xbox parece estar haciendo un esfuerzo especial en que dispositivos de Xbox Series X se entiendan con consolas anteriores y que desde el primer día haya un catálogo abundante en retrocompatibilidad y que se remonta a la primera Xbox, Sony está centrada en la nueva PS5 y sus correspondientes nuevos juegos. Las distintas presentaciones que nos han brindado Sony y Microsoft de sus catálogos parecen dejar claro por dónde van los tiros: juegos de impacto contra retrocompatibilidad y Game Pass. Sin duda, dos estrategias de aproximación al mercado que dividirán aún más a los jugadores. De momento, Sony sigue cojeando en el aspecto de entenderse con su propio pasado.",

    "./news6.html"
)





let listnoticias = [];


listnoticias.push(noticia6 )

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