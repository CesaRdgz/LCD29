class cartaLeyenda extends HTMLElement{
    
    
    constructor(){
        super();
        this.leyendas
        this.tiempoEnMilisegundos = 200
    }

    cargarJSON() {
        
      fetch("../JSON/leyendas.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("La solicitud no se completó correctamente.");
          }
          return response.json();
        })
        .then(jsonData => {
          this.leyendas = jsonData.leyendas
        })
        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
      }

    connectedCallback(){
      this.cargarJSON();

      setTimeout(() => {
        
        if(this.leyendas !== null){
            let htmlContent = `  
            <div class="hr-container">
                <hr>
                <p>Temporada 2022-2023</p>
            </div>
            <div class="row lgndCard">`
            this.leyendas.forEach(leyenda => {
                if(leyenda.posicion == 'ENT'){
                    htmlContent += 
                    `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="carta-box-lgnds">
                        <div class="carta">    
                        <div class="cara-lgnds">
                            <div class="circulo-lgnds circulo-numero-lgnd">${leyenda.dorsal}</div>
                            <div class="circulo-lgnds circulo-escudo"><img class="escudo-card-lgnd" src="../IMG/2022-23/Escudo.png"></div>
                            <div class="row">
                                <img class="carta-cara-lgnds" src="../${leyenda.urlIMG}">
                                <h3 class="titulo-lgnd">${leyenda.apodo}</h3>
                                <div class="temp-lgnd">${leyenda.titulo}</div>
                                <div class="temp-lgnd">${leyenda.temporadas}</div>
                            </div>
                        </div>
                        <div class="cara detras-lgnds">
                            <div class="circulo-lgnds circulo-numero-lgnd">${leyenda.dorsal}</div>
                            <div class="circulo-lgnds circulo-escudo"><img class="escudo-card-lgnd" src="../IMG/2022-23/Escudo.png"></div>
                            <div class="datos-card">
                                <h5>Nombre: ${leyenda.nombre}</h5>
                                <h5>Apellido: ${leyenda.apellido}</h5></p>
                                <h5>Posicion: ${leyenda.posicion}</h5>
                                <h5>Partidos: ${leyenda.partidos}</h5>
                                <h5 class="italic">${leyenda.descripcion}</h5>
                            </div>
                        </div>    
                        </div>
                    </div>
                </div>`
                } else {
                    htmlContent += 
                    `<div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="carta-box-lgnds">
                        <div class="carta">    
                        <div class="cara-lgnds">
                            <div class="circulo-lgnds circulo-numero-lgnd">${leyenda.dorsal}</div>
                            <div class="circulo-lgnds circulo-escudo"><img class="escudo-card-lgnd" src="../IMG/2022-23/Escudo.png"></div>
                            <div class="row">
                                <img class="carta-cara-lgnds" src="../${leyenda.urlIMG}">
                                <h3 class="titulo-lgnd">${leyenda.apodo}</h3>
                                <div class="temp-lgnd">${leyenda.titulo}</div>
                                <div class="temp-lgnd">${leyenda.temporadas}</div>
                            </div>
                        </div>
                        <div class="cara detras-lgnds">
                            <div class="circulo-lgnds circulo-numero-lgnd">${leyenda.dorsal}</div>
                            <div class="circulo-lgnds circulo-escudo"><img class="escudo-card-lgnd" src="../IMG/2022-23/Escudo.png"></div>
                            <div class="datos-card">
                                <h5>Nombre: ${leyenda.nombre}</h5>
                                <h5>Apellido: ${leyenda.apellido}</h5></p>
                                <h5>Posicion: ${leyenda.posicion}</h5>
                                <h5>Goles: ${leyenda.goles}</h5>
                                <h5>Asistencias: ${leyenda.asistencias}</h5>
                                <h5>Partidos: ${leyenda.partidos}</h5>
                                <h5 class="italic">${leyenda.descripcion}</h5>
                            </div>
                        </div>    
                        </div>
                    </div>
                </div>`
                }
            
            });
            htmlContent += `</div>`
            this.innerHTML = htmlContent
        }
      }, this.tiempoEnMilisegundos);
    }
}

    window.customElements.define("carta-leyenda", cartaLeyenda);
    const iniciarLeyendas = new cartaLeyenda();
