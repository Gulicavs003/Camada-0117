class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
      
    }

}


let noticia2 = new Noticia(
    "Chrome ahora se chiva de qué anuncios hay en cada web",
    "¿Donde va la informacion?",
    "noticia2.jpg",
    "Una nueva extensión oficial de Google ha llegado a Chrome y su propósito no es otro que dejar claro qué anuncios hay en cada página web que visitas y quién está detrás de ellos. Un movimiento que se suma a otros hechos por Chrome en los últimos tiempos para mejorar la situación actual de la publicidad y la privacidad de cara al usuario, como por ejemplo la decisión de no permitir más rastreadores de terceros. La extensión, bajo el nombre de Ads Transparency Spotlight, ya está disponible en la tienda oficial de extensiones de Chrome. De momento en fase alpha (una versión en pruebas que puede dar muchos errores), pero cualquiera puede descargarla y usarla de forma gratuita. Una vez instalada aparecerá junto al resto de extensiones en la parte superior del navegador. Según Google, han diseñado esta nueva extensión para que sea más fácil para el usuario entender cómo y por qué se muestran los anuncios en las páginas web. Es algo similar a lo que hace 'Por qué este anuncio', un pequeño botón que aparece con cada anuncio que sea de Google Ads. En este caso se extiende a todos los anuncios, independientemente de que sean de Google o no. Una herramienta similar desplegó recientemente Apple en su navegador Safari. Se trata de Privacy Report y la idea detrás de ello es mostrar una lista de todos los rastreadores que tiene cada página web y a quién pertenecen. En este caso Safari también bloquea que se comparta la información entre distintas páginas para evitar el rastreo del usuario. Qué información ofrece Ads Transparency Spotlight Realmente depende de la página web que visitemos y la cantidad de anuncios y rastreadores que contenga. En primer lugar la extensión reflejará qué plataformas de anuncios hay en la página web, como por ejemplo la propia Google Ads. Luego mostrará la lista de empresas que han colocado código en esos anuncios para rastrear al usuario. Finalmente se muestra qué tipo de información recopilan: ubicación, datos demográficos, intereses, si se ha participado en alguna campaña de marketing del anunciante. Por otro lado, Ads Transparency Spotlight también muestra una lista de entidades presentes en esta página web, en otras palabras, las empresas que de algún modo u otro ofrecen herramientas o recopilan información. Aquí también entran empresas que pongan por ejemplo botones de redes sociales o cualquier otro script que no sea concretamente un anuncio o sea visible. Junto a cada una de ellas se ofrece un enlace para ir a la política de privacidad de la empresas (si es que la tiene). En general, Ads Transparency Spotlight busca recuperar en cierto modo la confianza de los usuarios hacia la publicidad. Otras medidas tomadas han sido la ya mencionada prohibición de los rastreadores de terceros (y la utilización de su propia alternativa) o por ejemplo la decisión de incluir un bloqueador de anuncios propio en Chrome. Además, los anuncios que ocupen demasiado espacio directamente los bloquea. ",
    "./news2.html"
    )







let listnoticias = [];


listnoticias.push(noticia2,)

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