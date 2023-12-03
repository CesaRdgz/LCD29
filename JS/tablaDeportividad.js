class tablasDeportividad extends HTMLElement{
    
    constructor(){
        super();
        this.equipos
        this.tiempoEnMilisegundos = 200
    }

    cargarJSON() {
        
      fetch("../JSON/tablaDeportividad.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("La solicitud no se completó correctamente.");
          }
          return response.json();
        })
        .then(jsonData => {
          this.equipos = jsonData.equipos
        })
        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
      }

    connectedCallback(){
      this.cargarJSON();
      
      setTimeout(() => {
        
        if(this.equipos !== null){
          let htmlContent = `
          <section class="intro">
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
                                  <th scope="col">Equipo</th>
                                  <th scope="col">Puntos</th>
                                </tr>
                              </thead>
                              <tbody>`
            this.equipos.sort((a,b) => a.puntos - b.puntos)
            this.equipos.forEach(equipo => {
                htmlContent += 
                `
                <tr>
                  <td>${equipo.nombre}</td>
                  <td>${equipo.puntos}</td>
                </tr>
                `
            });
            htmlContent += `         
                              </tbody>
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

    window.customElements.define("tabla-deportividad", tablasDeportividad);
    const iniciarTablaDeportividad = new tablasDeportividad();
