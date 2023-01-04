import { html } from 'lit';
import { wcagLink } from './wcag-link.section';
import { AccessibilityStatus, COMPLIANCE_STATUS, EVALUATION_STATUS } from '../vl-accessibility.model';

export const complianceStatus = ({ complianceStatus, evaluationStatus }: AccessibilityStatus) => {
    const complianceTemplate = () => {
        switch (complianceStatus) {
            case COMPLIANCE_STATUS.FULLY_COMPLIANT:
                return html`Deze website voldoet volledig aan de ${wcagLink()}.`;
                break;
            case COMPLIANCE_STATUS.PARTIALLY_COMPLIANT:
                return html`Deze website voldoet gedeeltelijk aan de ${wcagLink()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;
                break;
            case COMPLIANCE_STATUS.NOT_COMPLIANT:
                return html`Deze website voldoet niet aan de ${wcagLink()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;
                break;
            default:
                return null;
                break;
        }
    };
    return html` <div id="compliance-status" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
        <h2 is="vl-h2">Nalevingsstatus</h2>
        ${evaluationStatus === EVALUATION_STATUS.NOT_EVALUATED
            ? html`Deze website voldoet niet aan de ${wcagLink()}.`
            : complianceTemplate()}
    </div>`;
};
