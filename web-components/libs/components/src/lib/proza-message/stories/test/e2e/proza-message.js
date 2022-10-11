import { VlElement, By } from '../../../../utils/test';
import { VlButton } from '../../../../components/button/test/e2e/button';
import { VlTypography } from '../../../../components/typography/test/e2e/typography';

export class VlProzaMessage extends VlElement {

  async edit() {
    const pencilButton = await this.getEditButton();
    await pencilButton.click();
  }

  async getEditButton() {
    return new VlButton(this.driver, await this.shadowRoot.findElement(By.css('#edit-button')));
  }

  async getRefreshButton() {
    return new VlButton(this.driver, await this.shadowRoot.findElement(By.css('#refresh-button')));
  }

  async getText() {
    return (await this._getTypography()).getText();
  }

  async _getTypography() {
    const element = await this.shadowRoot.findElement(By.css('vl-typography'));
    return new VlTypography(this.driver, element);
  }
}

