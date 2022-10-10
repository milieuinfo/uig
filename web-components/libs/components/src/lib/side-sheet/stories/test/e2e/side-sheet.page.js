import { VlSideSheet } from "./side-sheet";
import { Page, config, By } from "../../../../utils/test";
import { VlButton } from "../../../button/test/e2e/button.js";
// const { VlDatepicker } = require("vl-ui-datepicker").Test;

export class VlSideSheetPage extends Page {
  async _getSideSheet(selector) {
    return new VlSideSheet(this.driver, selector);
  }

  async _getButton(selector) {
    return new VlButton(this.driver, this.driver.findElement(By.css(selector)));
  }

  async toggleSidesheet() {
    const openSideSheetButton = await this._getButton(
      "#vl-side-sheet-toggle-button"
    );
    return openSideSheetButton.click();
  }

  async openSidesheet() {
    const openSideSheetButton = await this._getButton(
      "#vl-side-sheet-open-button"
    );
    return openSideSheetButton.click();
  }

  async closeSidesheet() {
    const openSideSheetButton = await this._getButton(
      "#vl-side-sheet-close-button"
    );
    return openSideSheetButton.click();
  }

  async openSidesheetWithCloseListener() {
    const openSideSheetButton = await this.getOpenSidesheetWithCloseListenerButton();
    return openSideSheetButton.click();
  }

  async getOpenSidesheetWithCloseListenerButton() {
    return await this._getButton(
      "#vl-side-sheet-open-button-with-close-listener"
    );
  }

  async getSidesheet() {
    return this._getSideSheet("#vl-side-sheet");
  }

  async getSidesheetLeft() {
    return this._getSideSheet("#vl-side-sheet-left");
  }

  async clickOpenSideSheetButton() {
    const button = await this._getButton(
      "#side-sheet-with-datepicker-open-button"
    );
    await button.click();
  }

  async getSidesheetDatepicker() {
    return this._getDatepicker("#vl-datepicker");
  }

  async _getDatepicker(selector) {
    return new VlDatepicker(this.driver, selector);
  }

  async load() {
    await super.load(config.baseUrl + "components/side-sheet/test/e2e");
  }
}
