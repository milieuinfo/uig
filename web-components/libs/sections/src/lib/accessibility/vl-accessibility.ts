import { html, LitElement, css, unsafeCSS } from 'lit';
import '@domg-lib/elements';
import '@domg-lib/components';
// import '../functional-header';
// import '../grid';
// import '../titles';
// import '../introduction';
// import '../icon';
// import '../typography';
// import '../link';
// import '../side-navigation';
// import '../properties';
// import '../infoblock';
// import '../contact-card';
import { ComplianceStatus, EvaluationStatus } from './model/status.model';
import { header } from './child/header.accessibility';
import { title } from './child/title.accessibility';
import { content } from './child/content.accessibility';
import styles from './style/vl-accessibility.scss';

export class VlAccessibility extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }

    static get properties() {
        return {
            version: { type: String, attribute: 'data-vl-version', reflect: true },
            application: {
                type: String,
                attribute: 'data-vl-application',
                reflect: true,
            },
            date: { type: String, attribute: 'data-vl-date', reflect: true },
            dateModified: {
                type: String,
                attribute: 'data-vl-date-modified',
                reflect: true,
            },
            compliance: {
                type: String,
                attribute: 'data-vl-compliance',
                reflect: true,
            },
            evaluation: {
                type: String,
                attribute: 'data-vl-evaluation',
                reflect: true,
            },
            limitations: {
                type: Object,
            },
        };
    }

    private version: string;
    private application: string;
    private date: string;
    private dateModified: string;
    private compliance: ComplianceStatus;
    private evaluation: EvaluationStatus;
    private limitations: any;

    constructor() {
        super();
        this.version = '1.0.0';
        this.application = 'deze applicatie';
        this.date = '20 juli 2021';
        this.dateModified = '20 juli 2021';
        this.compliance = 'PARTIALLY_COMPLIANT';
        this.evaluation = 'NOT_EVALUATED';
    }

    render() {
        const props = {
            version: this.version,
            date: this.date,
            application: this.application,
            evaluation: this.evaluation,
            compliance: this.compliance,
            dateModified: this.dateModified,
            limitations: this.limitations,
        };
        return html`${header()} ${title(props)} ${content(props)}`;
    }
}

customElements.define('vl-accessibility', VlAccessibility);
