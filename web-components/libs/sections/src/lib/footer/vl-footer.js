import { LitElement } from "lit";
import { awaitScript } from "../../utils/core";

awaitScript(
  "vl-footer-client",
  "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js"
)
  .then(() => {
    awaitScript(
      "vl-footer-polyfill",
      "https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-client/dist/index.js"
    ).finally(() => {
      customElements.define("vl-footer", VlFooter);
    });
  })
  .catch(() => {
    customElements.define("vl-footer", VlFooter);
  });

const props = {
  development: "data-vl-development",
  identifier: "data-vl-identifier",
};
const { development, identifier } = props;

export class VlFooter extends LitElement {
  static get properties() {
    return {
      [identifier]: { type: String },
      [development]: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  injectFooter() {
    const vlBody = document.querySelector('[is="vl-body"]');
    (vlBody || document.body).insertAdjacentHTML(
      "beforeend",
      '<div id="footer"></div>'
    );
  }

  vlwFooter() {
    return document.querySelector("footer[class=vlw__footer]");
  }

  footer() {
    return document.querySelector("#footer");
  }

  loadWidget() {
    const widgetUrl = this[development]
      ? `https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/${this[identifier]}`
      : `https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/${this[identifier]}`;

    window.vl.widget.client
      .bootstrap(widgetUrl)
      .then((widget) => {
        this.injectFooter();
        widget.setMountElement(document.getElementById("footer"));
        widget.mount().catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  render() {
    if (this.vlwFooter()) {
      this.vlwFooter().parentElement.remove();
    }
    if (this.footer()) {
      this.footer().remove();
    }
    this.loadWidget();
    this.injectFooter();
  }

  createRenderRoot() {
    return this;
  }
}
