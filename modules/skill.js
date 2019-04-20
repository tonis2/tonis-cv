import { FRAGMENT } from "https://unpkg.com/kelbas";
import {star} from "./svg/index.js"

class Skills extends HTMLElement {

  connectedCallback() {
    const element = this.render()
    this.appendChild(element)
  }


  render() {
    const max = this.getAttribute("max") || 10;
    const level = this.getAttribute("level") || 0;
    const title = this.getAttribute("title") || "default";
    const image = this.getAttribute("img") || "default";
    const stars_container = [];
    for (let i = 0; i < max; i++) {
      const color = i > Number(level - 1) ? "#34495e" : "#f1c40f";
      stars_container.push(star(color));
    }

    return FRAGMENT`<skill-info>
                        <img src="${image}" alt="skill-img" />
                        <skill-title>${title}</skill-title>
                    </skill-info>
                    <skill-stars>
                        ${stars_container.map(item => item).join("")}
                    </skill-stars>`;

  }
}

customElements.define("skill-column", Skills);
