class cartaJugador extends HTMLElement{
    
    
    constructor(){
        super();
        this.jugadores
        this.tiempoEnMilisegundos = 200
    }

    cargarJSON() {
        
      fetch("../JSON/jugadores.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("La solicitud no se completó correctamente.");
          }
          return response.json();
        })
        .then(jsonData => {
          this.jugadores = jsonData.equipo
        })
        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
      }

    connectedCallback(){
      this.cargarJSON();
      
      setTimeout(() => {
        
        if(this.jugadores !== null){
            let htmlContent = `<div class="row">`
            this.jugadores.forEach(jugador => {
            htmlContent += 
            `<div class="col-lg-3 col-md-6 col-sm-12">
              <div class="carta-box">
                  <div class="carta">    
                  <div class="cara">
                      <div class="franja-card">
                          <div class="row azul-oscuro"></div>
                          <div class="row azul"></div>
                          <div class="row azul-oscuro"></div>
                          <div class="row azul"></div>
                          <div class="row azul-oscuro"></div>
                      </div>
                      <div class="nombre-card">${jugador.apodo}</div>
                      <div class="circulo circulo-numero">${jugador.dorsal}</div>
                      <div class="circulo circulo-escudo"><img class="escudo-card" src="../IMG/2022-23/Escudo.png"></div>
                      <img class="carta-cara" src="../${jugador.urlIMG}">
                  </div>
                  <div class="cara detras">
                      <div class="franja-card">
                          <div class="row azul-oscuro"></div>
                          <div class="row azul"></div>
                          <div class="row azul-oscuro"></div>
                          <div class="row azul"></div>
                          <div class="row azul-oscuro"></div>
                      </div>
                      <div class="circulo circulo-numero">${jugador.dorsal}</div>
                      <div class="circulo circulo-escudo"><img class="escudo-card" src="../IMG/2022-23/Escudo.png"></div>
                      <div class="datos-card">
                          <h5>Nombre: ${jugador.nombre}</h5>
                          <h5>Apellido: ${jugador.apellido}</h5></p>
                          <h5>Posicion: ${jugador.posicion}</h5>
                          <h5>Dorsal: ${jugador.dorsal}</h5>
                      </div>
                  </div>    
                  </div>
              </div>
          </div>`
            });
            htmlContent += "</div>"
            this.innerHTML = htmlContent
        }
      }, this.tiempoEnMilisegundos);
      

    }

}

    window.customElements.define("carta-jugador", cartaJugador);
    const iniciarPlantilla = new cartaJugador();
