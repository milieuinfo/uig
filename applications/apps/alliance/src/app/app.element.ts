import './app.element.scss';

export class AppElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'alliance';
        this.innerHTML = `
    <div class="wrapper">
      <h1>Alliance App</h1>
      <alliance-breadcrumb></alliance-breadcrumb>
      <alliance-toaster></alliance-toaster>
    </div>
      `;
    }
}
customElements.define('applications-root', AppElement);
