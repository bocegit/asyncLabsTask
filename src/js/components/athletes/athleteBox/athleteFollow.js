const css = `
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center
    }
  </style>
`;

class AthleteFollow extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  };

  static get observedAttributes() {
    return ['follow'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop === 'follow' && oldVal !== newVal) this.render(); 
  }

  connectedCallback() {
    this.render();
  };

  changeFollow() {
    if (this.getAttribute('follow') === 'false') this.setAttribute('follow', 'true');
    else this.setAttribute('follow', 'false');
  };

  render() {
    this.shadow.innerHTML = `
    ${css}
    <div class="container">
      <button type="button">${ (this.getAttribute('follow') === "false") ? "Follow" : "Unfollow" }</button>
    </div>
    `;

    const btn = this.shadow.querySelector('button');
    btn.addEventListener('click', this.changeFollow.bind(this));
  };

}

customElements.define('athlete-follow', AthleteFollow);