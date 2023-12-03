class randomNews extends HTMLElement{
    
    constructor(){
        super();
        this.news = []
        this.newsPre
        this.newsFase_1
        this.newsFase_2
        this.threeNews
        this.tiempoEnMilisegundos = 200
        this.noticia
    }

    static get observedAttributes(){
      return ['noticia'];
    }

    attributeChangedCallback(noticiaAttr, oldValue, noticiaValue){
        switch(noticiaAttr){
            case "noticia":
                this.noticia = noticiaValue;
                console.log(this.noticia)
            break;
        }
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

          this.ramdomizeNews();
        })

        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
    }

    ramdomizeNews() {
        console.log(this.newsFase_1)
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

        const indicesAleatorios = this.obtenerIndicesAleatorios(this.news.length, 3);
        this.threeNews = indicesAleatorios.map(indice => this.news[indice]);

    }

    obtenerIndicesAleatorios(max, cantidad) {
      const indices = [];
      while (indices.length < cantidad) {
          const indiceAleatorio = Math.floor(Math.random() * max);
          if (!indices.includes(indiceAleatorio)) {
              indices.push(indiceAleatorio);
          }
      }
      return indices;
  }

    connectedCallback(){

      this.cargarJSON();

      setTimeout(() => {
          console.log(this.threeNews)
          if(this.threeNews !== null || this.threeNews !== undefined){
          
            let htmlContent = `<div class="row row-noticias">`
            this.threeNews.forEach((noticia, index) => {
                htmlContent += 
                `<div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card">
                    <img class="card-img-top img-news" src="../${noticia.urlIMG}" alt="Card image cap">
                    <div class="card-body">
                      <h4 class="card-title">${noticia.titulo}</h4>
                      <p class="card-text">${noticia.subtitulo_card}</p>`

                      if(this.noticia === 'false'){
                        htmlContent += `<a href="Noticias/info/olimpicCoslada.html" class="btn btn-readMore">Leer más</a>`
                      } else {
                        htmlContent += `<a href="Noticias/info/olimpicCoslada.html" class="btn btn-readMore">Leer más</a>`
                      }
                      
                htmlContent +=
                    `</div>
                  </div>
                </div>`
            });
          
            htmlContent += `</div>`
            this.innerHTML = htmlContent
          }
      }, this.tiempoEnMilisegundos);
    }
  }

    window.customElements.define("random-news", randomNews);
    setTimeout(() => {
      const iniciarRandomNews = new randomNews();
    }, 1)

