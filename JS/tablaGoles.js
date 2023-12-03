class tablasGoles extends HTMLElement{
    
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
          let htmlContent = `
          <section class="intro goles">
            <div class="bg-image" style="background-color: white;">
              <div class="mask d-flex align-items-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-body p-0">
                          <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style="position: relative; height: 100%">
                            <table class="table table-striped mb-0">
                              <thead style="background-color: #00018f;">
                                <tr>
                                  <th scope="col">Jugador</th>
                                  <th scope="col">Goles</th>
                                </tr>   
                              </thead>
                              <tbody>`
            this.jugadores.sort((a,b) => b.goles - a.goles)
            this.jugadores.forEach(jugador => {
              if (jugador.goles != 0){
                htmlContent += 
                `
                <tr>
                  <td>${jugador.apodo}</td>
                  <td>${jugador.goles}</td>
                </tr>
                `
              } 

            });
            htmlContent += `  </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`
            this.innerHTML = htmlContent
        }
      }, this.tiempoEnMilisegundos);
    }
}

    window.customElements.define("tabla-goles", tablasGoles);
    const iniciarTablaGoles = new tablasGoles();