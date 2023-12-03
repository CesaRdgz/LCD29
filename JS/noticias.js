class noticias extends HTMLElement{
    
    constructor(){
        super();
        this.news = []
        this.newsPre
        this.newsFase_1
        this.newsFase_2
        this.threeNews
        this.tiempoEnMilisegundos = 400
        this.noticia
        this.noticiaSeleccionada = null;
    }

    cargarJSON() {
        
      fetch("../JSON/noticias.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("La solicitud no se completó correctamente.");
          }
          return response.json();
        })
        .then(jsonData => {
          this.newsPre    = jsonData.noticias.pretemporada;
          this.newsFase_1 = jsonData.noticias.fase_1;
          this.newsFase_2 = jsonData.noticias.fase_2;
          console.log(this.newsPre)
          this.getAllNews();
          
        })

        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
    }

    getAllNews() {
        
        this.newsPre.pretemporada.forEach(noticia => {
          this.news.push(noticia)
        });
        
        for (const jornada in this.newsFase_1) {
          const noticiasFase_1 = this.newsFase_1[jornada];
          noticiasFase_1.forEach(noticia => {
            this.news.push(noticia);
          });
        }

        for (const jornada in this.newsFase_2) {
          const noticiasFase_2 = this.newsFase_2[jornada];
          noticiasFase_2.forEach(noticia => {
            this.news.push(noticia);
          });
        }
    }

    connectedCallback(){

      this.cargarJSON();

      setTimeout(() => {
        
            let htmlContent = ` <div class="row principal-col">
                                  <div class="col-12">
                                    <h1 class="titulo-noticias">La gazzeta del 29</h1>
                                  </div>
                                  `
            this.news.reverse()
            this.news.forEach((noticia, index) => {
              if (index === 0){
                htmlContent += 
                `
                  <div class="col-12 principal-col">
                    <div class="card" style="width:800px">
                      <img class="card-img-top" src="../../${noticia.urlIMG}" alt="Card image" style="width:100%; height: auto;">
                      <div class="card-body">
                        <h3 class="card-title">${noticia.titulo}</h3>
                        <p class="card-text">${noticia.subtitulo_card}</p>
                        <a href="#" class="btn btn-readMore">Leer más</a>
                      </div>
                    </div>
                  </div>`
              } else {
                htmlContent += 
                `<div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card" >
                    <img class="card-img-top img-news" src="../${noticia.urlIMG}" alt="Card image cap">
                    <div class="card-body">
                      <h4 class="card-title">${noticia.titulo}</h4>
                      <p class="card-text">${noticia.subtitulo_card}</p>
                      <a href="#" class="btn btn-readMore" onclick="openDetail('${noticia.titulo}')">Leer más</a>
                    </div>
                  </div>
                </div>`
                console.log(noticia.urlIMG)
              }
              
            });
          
            htmlContent += `</div>`
            this.innerHTML = htmlContent    
      }, this.tiempoEnMilisegundos);
    }
}

function openDetail(tituloNoticiaCompleta){
  localStorage.setItem('tituloNoticia', tituloNoticiaCompleta);
  console.log(tituloNoticiaCompleta)
  location.href ='/2023-24/Noticias/noticia-detail.html';   
}

  window.customElements.define("gazzeta-29", noticias);
  const iniciarNoticias = new noticias();
