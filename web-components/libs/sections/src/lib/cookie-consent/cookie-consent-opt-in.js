import {vlElement, define} from '../../../utils/core';
import '../../checkbox';
import '../../../components/form-message';
import formMessageStyles from '../../../components/form-message/styles.scss';

export class VlCookieConsentOptIn extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['label', 'description', 'checked', 'mandatory'];
  }

  constructor() {
    super(`
      <style>
        ${formMessageStyles}
      </style>
      <div>
          <vl-checkbox></vl-checkbox>
      </div>
    `);
  }

  get checked() {
    return this._checkboxElement.checked;
  }

  get _checkboxElement() {
    return this._element.querySelector('vl-checkbox');
  }

  get _descriptionElement() {
    return this._element.querySelector('#description');
  }

  _getDescriptionTemplate(description) {
    return this._template(`
      <p id="description" is="vl-form-annotation" data-vl-block>${description}</p>
    `);
  }

  _labelChangedCallback(oldValue, newValue) {
    this._checkboxElement.setAttribute('data-vl-label', newValue);
  }

  _descriptionChangedCallback(oldValue, newValue) {
    if (newValue) {
      if (this._descriptionElement) {
        this._descriptionElement.textContent = newValue;
      } else {
        this._element.appendChild(this._getDescriptionTemplate(newValue));
      }
    } else {
      this._descriptionElement.remove();
    }
  }

  _checkedChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._checkboxElement.setAttribute('data-vl-checked', '');
    }
  }

  _mandatoryChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._checkboxElement.setAttribute('data-vl-checked', '');
      this._checkboxElement.setAttribute('data-vl-disabled', '');
    }
  }
}

define('vl-cookie-consent-opt-in', VlCookieConsentOptIn);
