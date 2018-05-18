class Component extends HTMLElement {
  async connectedCallback() {
    const svg = await this.loadSvg();
    this.appendChild(svg);
    this.dispatchEvent(new CustomEvent("load"));
  }

  loadSvg() {
    return new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest(),
        src = this.getAttribute("src");

      ajax.open("GET", src, true);
      ajax.send();
      ajax.onloadend = event => {
        if (event.target.responseXML) {
          let svg = event.target.responseXML.querySelector("svg");
          resolve(svg);
        }
      };
    });
  }
}

customElements.define("svg-el", Component);
