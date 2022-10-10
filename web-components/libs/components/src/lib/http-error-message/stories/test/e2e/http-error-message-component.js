import { VlElement, By } from '../../../../utils/test';
import VlHttpErrorMessage from './http-error-message';
import { VlButton } from '../../../button/test/e2e/button';

export default class VlHttpErrorMessageComponent extends VlElement {
    async getChild() {
        return new VlHttpErrorMessage(this.driver, await this.getElementInShadow(this, 'vl-http-error-message'));
    }

    async clickOnAction() {
        return (await this._getAction()).click();
    }

    async _getAction() {
        const element = await this.shadowRoot.findElement(By.css('[is="vl-link-button"]'));
        return new VlButton(this.driver, element);
    }
}
