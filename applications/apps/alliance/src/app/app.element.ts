import './app.element.scss';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'alliance';
        this.innerHTML = `
    <div class="wrapper">
      <h1>Alliance App</h1>
      <alliance-elements></alliance-elements>
      <alliance-components></alliance-components>
      <alliance-sections></alliance-sections>
    </div>
      `;
    }
}
customElements.define('applications-root', AppElement);
