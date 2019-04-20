import {title} from "./svg/index.js"

class Title extends HTMLElement {
    connectedCallback() {
      const element = this.render()
      this.appendChild(element)
    }
  
    render() {
        const text_title = this.getAttribute("title")
        const text_size = this.getAttribute("text-size")
        return title(text_title, text_size)
    }
  }
  
  customElements.define("title-element", Title);