import { html } from 'lit';
import { ComplianceStatus } from '../model/status.model';

export const sideNavigation = ({ complianceStatus }: { complianceStatus: ComplianceStatus }) => {
    return html` <div
        is="vl-column"
        data-vl-size="4"
        data-vl-medium-size="4"
        data-vl-small-size="4"
        data-vl-extra-small-size="0"
    >
        <nav is="vl-side-navigation" id="side-nav-accessibility" aria-label="inhoudsopgave">
            <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
            <div is="vl-side-navigation-content">
                <ul is="vl-side-navigation-group">
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li
                        style=${complianceStatus === 'FULLY_COMPLIANT' && 'display: none'}
                        is="vl-side-navigation-item"
                        data-vl-parent
                    >
                        <a is="vl-side-navigation-toggle" href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                        <a is="vl-side-navigation-toggle" href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>`;
};
