class index extends HTMLElement{
    
    constructor(){
        super();
        this.news = []
        this.newsPre
        this.newsFase_1
        this.newsFase_2
        this.threeNews
        this.tiempoEnMilisegundos = 1000
        this.noticia
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
          this.getLast3News();
          
        })

        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
    }

    getLast3News() {
        
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

        this.news.reverse()
        this.news.slice(-3);
    }


    connectedCallback(){

      this.cargarJSON();

      setTimeout(() => {
        
            let htmlContent = `
                                <div id="carouselExampleDark" class="carousel carousel-dark slide col-carrousel" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner"> `
            this.news.forEach((noticia, index) => {
              if (index === 0){
                htmlContent += 
                ` <div class="carousel-item active" data-bs-interval="5000">`
              } else  {
                htmlContent += 
                ` <div class="carousel-item" data-bs-interval="5000">`
              }
                htmlContent +=
                ` <a href="#" onclick="openDetail('${noticia.titulo}')">
                    <img src="../../${noticia.urlIMG}" class="d-block w-100 carrousel-img" alt="...">
                    <div class="carousel-caption ">
                      <h5 class="text-white">${noticia.titulo}</h5>
                      <p class="text-white">${noticia.subtitulo_card}</p>
                    </div>
                  </a>
                  </div>`
            });
          
            htmlContent += `</div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>`
         this.innerHTML = htmlContent    
      }, this.tiempoEnMilisegundos);

    }

}

  function openDetail(tituloNoticiaCompleta){
    localStorage.setItem('tituloNoticia', tituloNoticiaCompleta);
    location.href ='/2023-24/Noticias/noticia-detail.html';   
  }

  window.customElements.define("index-carrousel-29", index);
  setTimeout(() => {
    const iniciarIndex = new index();
    }, 1000)