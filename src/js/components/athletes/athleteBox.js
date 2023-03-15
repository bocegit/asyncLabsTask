class AthleteBox extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  };

  get boxData() {
    return this._boxData || {};
  }
  set boxData(boxData) {
    this._boxData = boxData;
  }

  connectedCallback() {
    this.render();
  };

  render() {
    this.shadow.innerHTML = `
    <div class="container" aria-label="athlete post">
      <athlete-info 
        avatar=${this._boxData.avatar} 
        name=${this._boxData.name} 
        age=${this._boxData.age} 
        club=${this._boxData.club} 
      >
      </athlete-info>
      <athlete-follow follow="false"> </athlete-follow>
    </div>
    `;
  };

}

customElements.define('athlete-box', AthleteBox);