import { HTML } from "https://unpkg.com/kelbas";

class Links extends HTMLElement {
    connectedCallback() {
      const element = this.render()
      this.appendChild(element)
    }
  
    render() {
      return HTML`<section id="cv-links">
                      <span class="links-title">Get in contact now!</span>
                      <a target="_blank" href="https://www.linkedin.com/in/tonis-anton-776a15145/">LinkedIn</a>
                      <a target="_blank" href="https://github.com/tonis2">Github</a>
                      <a target="_blank" href="mailto:geotrupes.dev@gmail.com">E-mail</a>
                  </section>`;
    }
  }
  
  customElements.define("links-element", Links);