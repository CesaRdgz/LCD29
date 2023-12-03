class navbar extends HTMLElement{
    constructor(){
        super();
        this.noticia; 
    }

    static get observedAttributes(){
        return ['noticia'];
    }

    attributeChangedCallback(noticiaAttr, oldValue, noticiaValue){
        switch(noticiaAttr){
            case "noticia":
                this.noticia = noticiaValue;
            break;
        }
    }

    connectedCallback(){
        if (this.noticia === "false"){ 
            this.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
                    <div class="container-fluid">
                    <a class="navbar-brand d-block d-lg-none" href="../../index.html">
                        <img src="../../../IMG/2022-23/Escudo.png" height="80" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav mx-auto ">
                        <li class="nav-item dropdown">
                            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Temporada
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">2023-2024</a></li>
                            <li><a class="dropdown-item" href="../2022-23/index.html">2022-2023</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Equipo
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="../2023-24/plantilla.html">Plantilla</a></li>
                            <li><a class="dropdown-item" href="#">Aficion</a></li>
                            <li><a class="dropdown-item" href="#">Historia</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="noticias.html">Noticias</a>
                        </li>
                        <li class="nav-item d-none d-lg-block">
                            <a class="nav-link mx-2" href="index.html">
                            <img class="nav-img" src="../IMG/2022-23/Escudo.png" height="80" />
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="tablas.html">Tablas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="palmares.html">Palmarés</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-2" href="iconosDelClub.html">Iconos del club</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>`
        } else {
            this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
                <div class="container-fluid">
                <a class="navbar-brand d-block d-lg-none" href="../../index.html">
                    <img src="../../IMG/2022-23/Escudo.png" height="80" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto ">
                    <li class="nav-item dropdown">
                        <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Temporada
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">2023-2024</a></li>
                        <li><a class="dropdown-item" href="../../2022-23/index.html">2022-2023</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Equipo
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="../plantilla.html">Plantilla</a></li>
                        <li><a class="dropdown-item" href="#">Aficion</a></li>
                        <li><a class="dropdown-item" href="#">Historia</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="../noticias.html">Noticias</a>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <a class="nav-link mx-2" href="index.html">
                        <img class="nav-img" src="../../IMG/2022-23/Escudo.png" height="80" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="../tablas.html">Tablas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="../palmares.html">Palmarés</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-2" href="../iconosDelClub.html">Iconos del club</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>`
        }
    }
}

window.customElements.define("nav-bar", navbar);