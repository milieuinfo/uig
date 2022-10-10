import { VlElement, By } from '../../../../utils/test';
import { VlIcon } from '../../../../components/icon/test/e2e/icon';

export class VlRichDataSorter extends VlElement {
    async isDescending() {
        return this._hasDirectionIcon('arrow-up');
    }

    async isAscending() {
        return this._hasDirectionIcon('arrow-down');
    }

    async isUnsorted() {
        const container = await this.shadowRoot;
        return container.hasClass('vl-u-visually-hidden');
    }

    async getPriority() {
        const priorityLabel = await this._getPriorityLabel();
        return priorityLabel.getText();
    }

    async _hasDirectionIcon(expectedIconType) {
        const iconType = await this._getDirectionIconType();
        return iconType === expectedIconType;
    }

    async _getDirectionIcon() {
        const element = await this.shadowRoot.findElement(By.css('#direction'));
        return new VlIcon(this.driver, element);
    }

    async _getDirectionIconType() {
        const icon = await this._getDirectionIcon();
        return icon.getType();
    }

    async _getPriorityLabel() {
        return this.shadowRoot.findElement(By.css('#priority'));
    }
}
