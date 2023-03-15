const css = `
  <style>
    .container {
      display: flex;
      align-items: center;
      justify-content: center
    }

    img {
      width: 80px;
      height: 80px;
    }

    .text {
      font-size: 20px;
      padding-left: 20px;
    }
  </style>
`;

class AthleteInfo extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  };

  connectedCallback() {
    this.render();
  };

  render() {
    this.shadow.innerHTML = `
    ${css}
    <div class="container" aria-label="athlete info">
      <div class="image">
        <img src=${this.getAttribute('avatar')} 
          onerror="this.onerror=null; 
          this.src='assets/laughing.svg';" 
          alt="athlete avatar" role="img" >
      </div>
      <div class="text">
        <p>Name: ${this.getAttribute('name')}</p>
      </div>
      <div class="text">
        <p>Age: ${this.getAttribute('age')}</p>
      </div>
      <div class="text">
        <p>Club: ${this.getAttribute('club')}</p>
      </div>
    </div>
    `;

    const img = this.shadow.querySelector('img');
    img.onerror = function(err) {
      this.onerror=null; 
      this.src="assets/laughing.svg";
    };
  };

}

customElements.define('athlete-info', AthleteInfo);