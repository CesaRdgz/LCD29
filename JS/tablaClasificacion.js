class tablasClasificacion extends HTMLElement{
    
    constructor(){
        super();
        this.fase_1
        this.clasUltJor
        this.tiempoEnMilisegundos = 200
    }

    cargarJSON() {
        
      fetch("../JSON/clasificacion.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("La solicitud no se completó correctamente.");
          }
          return response.json();
        })
        .then(jsonData => {
          this.fase_1 = jsonData.fase_1;

        })
        .catch(error => {
          console.error("Error al cargar el archivo JSON:", error);
        });      
      }

    connectedCallback(){
      this.cargarJSON();
      setTimeout(() => {
        
        if(this.fase_1 !== null){

          let htmlContent = `
          <section class="intro ">
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
                                  <th scope="col">Posicion</th>
                                  <th scope="col">Equipo</th>
                                  <th scope="col">J</th>
                                  <th scope="col">G</th>
                                  <th scope="col">E</th>
                                  <th scope="col">P</th>
                                  <th scope="col">GF</th>
                                  <th scope="col">GC</th>
                                  <th scope="col">DG</th>
                                  <th scope="col">PTS</th>
                                </tr>   
                              </thead>
                            <tbody>`      

            this.fase_1.sort(function(a, b) {
              if (a.puntos > b.puntos) {
                return -1;
              } else if (a.puntos < b.puntos) {
                return 1;  
              } else {
                if (a.diferencia_goles > b.diferencia_goles && a.jugados === b.jugados) {
                  return -1; 
                } else if (a.diferencia_goles < b.diferencia_goles && a.jugados === b.jugados) {
                  return 1;  
                } else {
                  return 0;  
                }
              }
            });

            this.fase_1.forEach((equipo, index) => {
                htmlContent += 
                `
                <tr>
                  <td>${index + 1}</td>
                  <td>${equipo.nombre}</td>
                  <td>${equipo.jugados}</td>
                  <td>${equipo.ganados}</td>
                  <td>${equipo.empates}</td>
                  <td>${equipo.derrotas}</td>
                  <td>${equipo.goles_favor}</td>
                  <td>${equipo.goles_contra}</td>
                  <td>${equipo.diferencia_goles}</td>
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

    window.customElements.define("tabla-clasificacion", tablasClasificacion);
    const iniciarTablaClasificacion = new tablasClasificacion();
