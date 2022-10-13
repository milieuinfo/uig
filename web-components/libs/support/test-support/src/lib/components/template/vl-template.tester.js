import { By } from '../../../../utils/test';
import { VlElementTester } from '../../base/vl-element.tester';

export class VlTemplate extends VlElementTester {
    async getHeaderSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="header"]'));
        return this.getAssignedElements(slot);
    }

    async getContentSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="main"]'));
        return this.getAssignedElements(slot);
    }

    async getFooterSlotElements() {
        const slot = await this.shadowRoot.findElement(By.css('slot[name="footer"]'));
        return this.getAssignedElements(slot);
    }
}
