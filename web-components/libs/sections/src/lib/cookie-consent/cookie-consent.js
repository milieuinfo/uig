import { vlElement, define } from '../../../utils/core';
import '../../../components/button';
import '../../../components/form-grid';
import '../../modal';
import { analytics } from './child/analytics';
import './cookie-consent-opt-in';

import buttonStyles from '../../../components/button/styles.scss';
import formGridStyles from '../../../components/form-grid/styles.scss';
import modalStyles from '../../modal/styles.scss';

export class VlCookieConsent extends vlElement(HTMLElement) {
    static get _observedAttributes() {
        return ['analytics', 'owner', 'link'];
    }

    constructor() {
        super(`
      <style>
        ${buttonStyles}
        ${formGridStyles}
        ${modalStyles}
      </style>

      <vl-modal data-vl-title="Cookie-toestemming" data-vl-not-cancellable>
        <div is="vl-form-grid" data-vl-is-stacked slot="content">
          <div is="vl-form-column">
            <span data-vl-owner>Departement Omgeving</span> maakt op de websites waarvoor zij verantwoordelijk is gebruik van "cookies" en vergelijkbare internettechnieken. Cookies zijn kleine "tekstbestanden" die worden gebruikt om onze websites en apps beter te laten werken en jouw surfervaring te verbeteren. Zij kunnen worden opgeslagen in de context van de webbrowser(s) die je gebruikt bij het bezoeken van onze website(s).
          </div>
          <div is="vl-form-column">
            Er zijn verschillende soorten cookies, en deze hebben ook een verschillende doelstelling en geldigheidsduur. Een beperkt aantal cookies (essenti&#235;le cookies) zijn absoluut noodzakelijk, deze zijn altijd anoniem. Andere cookies dragen bij aan het gebruikscomfort, je hebt de keuze om deze al dan niet te aanvaarden.</div>
          <div is="vl-form-column">
            Op <a id="link" href="https://www.omgevingvlaanderen.be/privacy" target="_blank">https://www.omgevingvlaanderen.be/privacy</a> vind je meer informatie over de manier waarop <span data-vl-owner>Departement Omgeving</span> omgaat met uw privacy:
            <ul>
              <li>ons privacybeleid, vertaald in de Privacyverklaring</li>
              <li>algemene informatie over de nieuwe Privacywet</li>
              <li>de contactgegevens van de functionaris voor gegevensbescherming of DPO</li>
            </ul>
          </div>
          <div is="vl-form-column">
            De cookie-toestemming die je geeft is van toepassing op meerdere websites, subsites en apps van <span data-vl-owner>Departement Omgeving</span>. Welke dit zijn, vind je via de Privacyverklaring. Je kunt naderhand een eerdere toestemming intrekken of wijzigen.
          </div>
        </div>
      </vl-modal>
    `);

        this._optIns = {};
        this._cookieConsentCookieName = 'cookie-consent';
        this._cookieConsentDateCookieName = 'cookie-consent-date';
        this._cookieConsentResetDate = new Date('2019/05/14');

        if (!this._isFunctionalOptInDisabled) {
            this._addFunctionalOptIn();
        }
        this._processOptIns();
        this._element.appendChild(this._getButtonTemplate());
        if (!this._isAutoOpenDisabled) {
            this._open();
        }
    }

    /**
     * Opent de cookie-consent ook al werd deze eerder getoond aan de gebruiker.
     * @return {void}
     */
    open() {
        this._open(true);
    }

    /**
     * Sluit de cookie-consent.
     * @return {void}
     */
    close() {
        this._modalElement.close();
        this._setCookie(this._cookieConsentCookieName, true);
        this._setCookie(this._cookieConsentDateCookieName, new Date().getTime());
        this._submitOptIns();
    }

    /**
     * Verwijdert al de cookies en herstelt de opt-in waarden naar de initiële toestand.
     * @return {void}
     */
    reset() {
        this._deleteCookie(this._cookieConsentCookieName);
        this._deleteCookie(this._cookieConsentDateCookieName);
        Object.values(this._optIns).forEach((optIn) => {
            this._deleteCookie(optIn.name);
            this._resetOptInValue(optIn);
            if (optIn.callback && optIn.callback.deactivated) {
                optIn.callback.deactivated();
            }
        });
    }

    /**
     * Voeg een opt-in toe.
     * @param {object} optIn - De opt-in optie met attributen.
     * @param {string} optIn.name - De naam van de opt-in optie.
     * @param {string} optIn.label - Het label van de opt-in optie die getoond zal worden aan de gebruiker.
     * @param {string} optIn.description - De beschrijving van de opt-in optie die getoond zal worden aan de gebruiker.
     * @param {boolean} optIn.value - De standaard opt-in optie waarde die bepaalt of de opt-in standaard geactiveerd wordt.
     * @param {boolean} optIn.mandatory - Indien de opt-in verplicht is, zal de opt-in standaard geactiveerd worden en kan deze niet gewijzigd worden door de gebruiker.
     * @param {function} optIn.callback - De callback functies.
     * @param {function} optIn.callback.activated - Functie die aangeroepen wordt wanneer de gebruiker de cookie-consent bevestigt en de opt-in geactiveerd werd.
     * @param {function} optIn.callback.deactivated - Functie die aangeroepen wordt wanneer de gebruiker de cookie-consent bevestigt en de opt-in gedactiveerd werd.
     * @return {void}
     */
    addOptIn(optIn) {
        this._processOptIn(optIn);
    }

    /**
     * Voegt aan een opt-in een callback toe die aangeroepen wordt wanneer de opt-in geactiveerd wordt.
     * @param {string} name - De opt-in optie naam.
     * @param {function} callback - Callback functie.
     */
    addOptInActivatedCallback(name, callback) {
        if (this._optIns[name]) {
            this._optIns[name].callback.activated = callback;
        }
    }

    /**
     * Voegt aan een opt-in een callback toe die aangeroepen wordt wanneer de opt-in gedeactiveerd wordt.
     * @param {string} name - De opt-in optie naam.
     * @param {function} callback - Callback functie.
     */
    addOptInDeactivatedCallback(name, callback) {
        if (this._optIns[name]) {
            this._optIns[name].callback.deactivated = callback;
        }
    }

    /**
     * Bepaalt of een opt-in actief is of niet op basis van de naam.
     * @param {string} name - De opt-in optie naam.
     * @return {boolean}
     */
    isOptInActive(name) {
        return this._optIns[name] ? this._optIns[name].value : false;
    }

    get _isAutoOpenDisabled() {
        return this.getAttribute(VlCookieConsent.attributePrefix + 'auto-open-disabled') != undefined;
    }

    get _isFunctionalOptInDisabled() {
        return this.getAttribute(VlCookieConsent.attributePrefix + 'auto-opt-in-functional-disabled') != undefined;
    }

    get _cookiePrefix() {
        return 'vl-cookie-consent-';
    }

    get _modalElement() {
        return this._element;
    }

    get _formGridElement() {
        return this._element.querySelector('[is="vl-form-grid"]');
    }

    get _optInElementen() {
        return this.querySelectorAll('vl-cookie-consent-opt-in');
    }

    get _ownerElements() {
        return this._shadow.querySelectorAll('[data-vl-owner]');
    }

    get _linkElement() {
        return this._shadow.querySelector('#link');
    }

    _getButtonTemplate() {
        const filteredOptIns = Object.values(this._optIns).filter((optIn) => optIn.name !== 'functional');
        const text = filteredOptIns.length > 0 ? 'Bewaar keuze' : 'Ik begrijp het';
        const template = this._template(`
      <button is="vl-button" slot="button">${text}</button>
    `);
        template.querySelector('button').addEventListener('click', () => {
            this.close();
        });
        return template;
    }

    _getOptInTemplate(optIn) {
        if (optIn) {
            const checked = optIn.value || optIn.mandatory ? `${VlCookieConsent.attributePrefix}checked` : '';
            const mandatory = optIn.mandatory ? `${VlCookieConsent.attributePrefix}mandatory` : '';
            const template = this._template(`
        <div is="vl-form-column">
          <vl-cookie-consent-opt-in ${VlCookieConsent.attributePrefix}label="${optIn.label}" ${VlCookieConsent.attributePrefix}description="${optIn.description}" ${checked} ${mandatory}></vl-cookie-consent-opt-in>
        </div>
      `);
            template.querySelector('vl-cookie-consent-opt-in').addEventListener('input', (event) => {
                const checked = event && event.currentTarget ? event.currentTarget.checked : false;
                optIn.value = checked;
            });
            return template;
        }
    }

    _open(forced) {
        if (
            forced ||
            !this._getCookieConsentCookie() ||
            !this._heeftCookieConsentDateCookie() ||
            !this._isCookieConsentCookieGeldig()
        ) {
            this._modalElement.open();
        }
    }

    _resetOptInValue(optIn) {
        const match = [...this._optInElementen].find((optIn) => {
            return (optIn.id = optIn.name);
        });
        if (match) {
            optIn.value = optIn.getAttribute(VlCookieConsent.attributePrefix + 'checked') != undefined;
        }
    }

    _processOptIns() {
        this._optInElementen.forEach((optIn) => {
            this._processOptIn({
                name: optIn.id,
                label: optIn.getAttribute(VlCookieConsent.attributePrefix + 'label'),
                description: optIn.getAttribute(VlCookieConsent.attributePrefix + 'description'),
                value: optIn.getAttribute(VlCookieConsent.attributePrefix + 'checked') != undefined,
                mandatory: optIn.getAttribute(VlCookieConsent.attributePrefix + 'mandatory') != undefined,
            });
        });
    }

    _processOptIn({ name, label, description, value, mandatory, callback: { activated, deactivated } = {} }) {
        if (!this._bevatOptIn(name)) {
            const storedValue = this._getCookie(name);
            const optIn = (this._optIns[name] = {
                name: name,
                label: label,
                description: description,
                value: storedValue !== undefined ? storedValue : value,
                callback: {
                    activated: activated,
                    deactivated: deactivated,
                },
                mandatory: !!mandatory,
            });
            const optInTemplate = this._getOptInTemplate(optIn);
            if (optInTemplate) {
                this._formGridElement.appendChild(optInTemplate);
            }
        }
    }

    _submitOptIns() {
        Object.values(this._optIns).forEach((optIn) => {
            if (optIn.callback) {
                if (optIn.value || optIn.mandatory) {
                    if (optIn.callback.activated) {
                        optIn.callback.activated();
                    }
                } else {
                    if (optIn.callback.deactivated) {
                        optIn.callback.deactivated();
                    }
                }
            }
            this._setCookie(optIn.name, optIn.value || optIn.mandatory || false);
        });
    }

    _bevatOptIn(name) {
        return !!this._optIns[name];
    }

    _addFunctionalOptIn() {
        this._processOptIn({
            name: 'functional',
            label: 'Noodzakelijke cookies toestaan (verplicht)',
            description:
                'Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.',
            value: true,
            mandatory: true,
        });
    }

    _addAnalytics() {
        if (!document.getElementById(analytics.scriptId)) {
            document.head.appendChild(analytics.script);
        }
    }

    _getCookie(name) {
        name = this._cookiePrefix + name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                try {
                    return JSON.parse(cookie.substring(name.length, cookie.length));
                } catch (error) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
        }
    }

    _getCookieConsentCookie() {
        return this._getCookie(this._cookieConsentCookieName);
    }

    _getCookieConsentDateCookie() {
        return this._getCookie(this._cookieConsentDateCookieName);
    }

    _setCookie(name, value) {
        document.cookie = this._cookiePrefix + name + '=' + value + ';Max-Age=2147483647;path=/;SameSite=Strict;';
    }

    _deleteCookie(name) {
        document.cookie = this._cookiePrefix + name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
    }

    _heeftCookieConsentDateCookie() {
        return this._getCookieConsentDateCookie() != undefined;
    }

    _isCookieConsentCookieGeldig() {
        return (
            !isNaN(this._getCookieConsentDateCookie()) &&
            new Date(this._getCookieConsentDateCookie()) > this._cookieConsentResetDate
        );
    }

    _analyticsChangedCallback(oldValue, newValue) {
        if (newValue != undefined) {
            if (!this._isFunctionalOptInDisabled) {
                this._addAnalytics();
            } else {
                console.error(
                    'analytics kunnen alleen toegevoegd worden wanneer de functionele cookies opt-in geactiveerd werd!'
                );
            }
        }
    }

    _ownerChangedCallback(oldValue, newValue) {
        this._ownerElements.forEach((element) => (element.innerText = newValue));
    }

    _linkChangedCallback(oldValue, newValue) {
        this._linkElement.innerText = newValue;
        this._linkElement.href = newValue;
    }
}

customElements.whenDefined('vl-modal').then(() => {
    define('vl-cookie-consent', VlCookieConsent);
});
