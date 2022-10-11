import { config, Page } from '../../../../utils/test';
import { VlProzaMessage } from './proza-message';

export class VlProzaMessagePage extends Page {
  async _getProzaMessage(selector) {
    return new VlProzaMessage(this.driver, selector);
  }

  async getMessageFirstDemo() {
    return this._getProzaMessage('#message-1');
  }

  async getMessageWithParameters() {
    return this._getProzaMessage('#message-14');
  }

  async load() {
    await super.load(`${config.baseUrl}legacy/proza-message/test/e2e/index.html`);
  }
}

