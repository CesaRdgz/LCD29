class footer extends HTMLElement{
    constructor(){
        super();
        this.clickCount = 0; 
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
        if(this.noticia === false){
            this.innerHTML = `
            <footer class="footer" style="background-color: darkgray; width: 100%; height: 10em; margin: 0px;">
                <p class="text-footer" id="LCD29"><img src="../IMG/2022-23/Escudo.png" class="img-footer"> Los Cracks del 29</p>
                <p class="text-footer" id="copyright">© Copyright Los Cracks del 29. Página Oficial de Los Cracks del 29</p>
                <p class="text-footer" ><a href="https://instagram.com/loscracksdel_29?igshid=YmMyMTA2M2Y=" id="instagram" target="_blank"><i class="bi bi-instagram"></i></a></p>
                <p class="text-footer" ><a href="mailto:loscracksdel29@gmail.com" id="email" target="_blank"><i class="bi bi-envelope"></i></a></p>
            </footer>`
        } else {
            this.innerHTML = `
            <footer class="footer" style="background-color: darkgray; width: 100%; height: 10em; margin: 0px;">
                <p class="text-footer" id="LCD29"><img src="../../IMG/2022-23/Escudo.png" class="img-footer"> Los Cracks del 29</p>
                <p class="text-footer" id="copyright">© Copyright Los Cracks del 29. Página Oficial de Los Cracks del 29</p>
                <p class="text-footer" ><a href="https://instagram.com/loscracksdel_29?igshid=YmMyMTA2M2Y=" id="instagram" target="_blank"><i class="bi bi-instagram"></i></a></p>
                <p class="text-footer" ><a href="mailto:loscracksdel29@gmail.com" id="email" target="_blank"><i class="bi bi-envelope"></i></a></p>
            </footer>`
        }
        this.easterEgg()
    }

    easterEgg() {
        const secret = document.getElementById("LCD29");
        secret.addEventListener('click', () => {
            this.clickCount++;
            if (this.clickCount == 24) {
                window.open('https://shattereddisk.github.io/rickroll/rickroll.mp4', '_blank');
                this.clickCount = 0;
            }
        });
    }
}

window.customElements.define("web-footer", footer);