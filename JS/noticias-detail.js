class detalleNoticias extends HTMLElement{
    
    constructor(){
        super();
        this.news = []
        this.newsPre
        this.newsFase_1
        this.newsFase_2
        this.tiempoEnMilisegundos = 1000
        this.noticia
        this.noticiaSeleccionada = null;
        this.tituloNoticia = localStorage.getItem('tituloNoticia');
    }

    cargarJSON() {
        
      fetch("../../JSON/noticias.json")
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
          this.getAllNews();
          this.getNoticiaFromTitulo();
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

    getNoticiaFromTitulo(){
      this.news.forEach(noticia => {
        if(noticia.titulo === this.tituloNoticia){
          console.log(noticia)
          this.noticia = noticia
        }
      });
    }

    connectedCallback(){

      this.cargarJSON();
      setTimeout(() => {
        console.log(this.noticia.titulo)
            let htmlContent = `     
            <div>
                <h1 class="mt-4">${this.noticia.titulo}</h1>
                <h4>${this.noticia.subtitulo_card}</h4>
                <img src="../../../${this.noticia.urlIMG}" style="width: 100%;">
                <br>
                <br>`
                if(this.noticia.titulo_noticia){
                  htmlContent +=`<h4>${this.noticia.titulo_noticia}</h4>`
                }
                htmlContent += `<div class="articulo">
                  <p>${this.noticia.noticia}</p>
                </div>
                <br>
            </div>`
            this.innerHTML = htmlContent    
      }, this.tiempoEnMilisegundos);
    }

}

  window.customElements.define("gazzeta-detail-29", detalleNoticias);
  const iniciarNoticiasDetail = new detalleNoticias();
