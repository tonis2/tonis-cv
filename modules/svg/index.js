import { HTML } from "https://unpkg.com/kelbas";

const title = (title, size) => {
    return HTML`<svg xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:krita="http://krita.org/namespaces/svg/krita"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    width="100%"
                    height="auto"
                    viewBox="0 0 738 360">
                <defs>
                <filter id="f4" x="0" y="0" width="200%" height="200%">
                    <feDropShadow dx="20" dy="25" stdDeviation="0" flood-color="#a29282" flood-opacity="1"/>
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal"/>
                </filter>
                </defs>
                <path filter="url(#f4)" id="flag" transform="translate(21.6, 23.044776157)" fill="#e3cfae" fill-rule="evenodd" stroke="#000000" stroke-width="2.16" stroke-linecap="square" stroke-linejoin="bevel" d="M0 9.35522C239.4 168.955 513.12 -45.9648 694.8 9.35522C694.8 64.2192 694.8 155.659 694.8 283.675C522.12 157.675 380.16 401.035 0 283.675C0 155.659 0 64.2192 0 9.35522Z"/>
                <text>
                <textPath xlink:href="#flag" startOffset="0">
                    <tspan dx="100" dy="180" fill="black" font-size="${size || "200"}">${title}</tspan>
                </textPath>
                </text>
                </svg>`
}

const star = (color) => `<svg version="1.1" class="skill-star" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 487.222 487.222;" xml:space="preserve">
                              <path fill="${color}"  d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
                                c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
                                c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
                                c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
                                c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
                                C22.602,0.567,25.338,0.567,26.285,2.486z"/>
                          </svg>`;



export {title, star}