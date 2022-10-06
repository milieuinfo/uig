import { html } from 'lit-html';
import '../vl-cookie-consent.section';

export default {
    title: 'sections/cookie-consent',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const cookieConsentDefault = () => {
    return html` <vl-cookie-consent id="cookie-consent" data-vl-auto-open-disabled=""></vl-cookie-consent>
        <button
            id="button-open-cookie-consent"
            is="vl-button"
            onClick="document.querySelector('#cookie-consent').open();"
        >
            Open cookie-consent
        </button>`;
};
cookieConsentDefault.storyName = 'vl-cookie-consent - default';
