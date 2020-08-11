class Noticia {

    constructor(titulo, subtitulo, imgSrc, contenido, linkhref ) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.imgSrc = imgSrc;
        this.contenido = contenido;
        this.linkhref = linkhref
      
    }

}

let noticia4 = new Noticia(
    "Google invierte 450 millones de euros en ADT",
    "alarmas y seguridad para la familia Nest",
    "noticia4.jpg",
    "Google ha llegado a un acuerdo con ADT, la conocida empresa de soluciones de seguridad. La firma de Mountain View invertirá 450 millones de dólares en ADT y se hará así con un 6,6% de la empresa de Florida. El objetivo es impulsar la venta de los productos de domótica de su familia Nest, que ahora formarán parte de la oferta de los 20.000 técnicos que trabajan para ADT en las instalaciones de esos sistemas de seguridad en oficinas, locales de todo tipo y hogares. Ambas empresas quieren tratar de llegar a más clientes tanto en el ámbito doméstico como en el profesional, y también han indicado que el objetivo es colaborar en el desarrollo de futuros productos en el ámbito de la seguridad doméstica. Si todo va bien ese acuerdo de colaboración irá aún más allá y se invertirán 300 millones de dólares a partes iguales para realizar labores de marketing, de desarrollo de producto y de formación de empleados para impulsar todas esas soluciones. Se espera que con el tiempo los productos de Nest se conviertan en pilar de la oferta de hogar inteligente de ADT, decía Rishi Chandra, responsable de la familia de productos de Nest. Gracias a esa colaboración, explicaba Chandra, se intentará que la eficacia de las soluciones de seguridad den menos falsas alarmas, proporcionen más formas de recibir notificaciones y una mejor detección de potenciales incidentes dentro y alrededor del hogar",
    "./news4.html"
)







let listnoticias = [];


listnoticias.push(noticia4,)

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