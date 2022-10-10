import { assert, getDriver } from "../../../../utils/test";
import { VlSideSheetPage } from "./side-sheet.page.js";

describe("vl-side-sheet", async () => {
  let vlSideSheetPage;

  beforeEach(() => {
    vlSideSheetPage = new VlSideSheetPage(getDriver());
    return vlSideSheetPage.load();
  });

  it("als gebruiker kan ik de side-sheet programmatorisch openen en sluiten via toggle", async () => {
    const sheet = await vlSideSheetPage.getSidesheet();
    await assert.eventually.isFalse(sheet.isOpen());
    await vlSideSheetPage.toggleSidesheet();
    await assert.eventually.isTrue(sheet.isOpen());
    await vlSideSheetPage.toggleSidesheet();
    await assert.eventually.isFalse(sheet.isOpen());
  });

  it("als gebruiker kan ik de side-sheet programmatorisch openen en sluiten via open en close", async () => {
    const sheet = await vlSideSheetPage.getSidesheet();
    await assert.eventually.isFalse(sheet.isOpen());
    await vlSideSheetPage.openSidesheet();
    await assert.eventually.isTrue(sheet.isOpen());
    await vlSideSheetPage.closeSidesheet();
    await assert.eventually.isFalse(sheet.isOpen());
  });

  it("als gebruiker kan ik de side-sheet sluiten via een knop", async () => {
    const sheet = await vlSideSheetPage.getSidesheet();
    await assert.eventually.isFalse(sheet.isOpen());
    await vlSideSheetPage.openSidesheet();
    await assert.eventually.isTrue(sheet.isOpen());
    await sheet.close();
    await assert.eventually.isFalse(sheet.isOpen());
  });

  it("als gebruiker kan ik de content van een side-sheet opvragen", async () => {
    const sheet = await vlSideSheetPage.getSidesheet();
    await vlSideSheetPage.toggleSidesheet();
    const slotNodes = await sheet.getContentSlotNodes();
    await assert.eventually.equal(slotNodes[0].getAttribute("is"), "vl-h2");
    await assert.eventually.equal(slotNodes[0].getText(), "Lorem ipsum");
  });

  it("als gebruiker zie ik een onderscheid tussen een links en rechts gealigneerde sidesheet", async () => {
    const sheetRight = await vlSideSheetPage.getSidesheet();
    const sheetLeft = await vlSideSheetPage.getSidesheetLeft();
    await assert.eventually.isFalse(sheetRight.isLeft());
    await assert.eventually.isTrue(sheetLeft.isLeft());
  });

  it("als gebruiker kan ik het event opvangen bij het sluiten van de sidesheet", async () => {
    const sheet = await vlSideSheetPage.getSidesheet();
    await vlSideSheetPage.toggleSidesheet();
    const openWithListenerButton = await vlSideSheetPage.getOpenSidesheetWithCloseListenerButton();
    await assert.eventually.equal(
      openWithListenerButton.getText(),
      "Open with close listener"
    );
    await vlSideSheetPage.openSidesheetWithCloseListener();
    await assert.eventually.equal(
      openWithListenerButton.getText(),
      "Waiting for close"
    );
    await sheet.close();
    await assert.eventually.equal(
      openWithListenerButton.getText(),
      "Open with close listener"
    );
  });

  it("als gebruiker zie ik het onderscheid tussen sidesheets die al dan niet kunnen gesloten worden door swipen", async () => {
    const sheetSwipeDisabled = await vlSideSheetPage.getSidesheet();
    const sheetSwipeEnabled = await vlSideSheetPage.getSidesheetLeft();
    await assert.eventually.isFalse(sheetSwipeDisabled.isSwipeEnabled());
    await assert.eventually.isTrue(sheetSwipeEnabled.isSwipeEnabled());
  });

  // it("als gebruiker kan ik interageren met een datepicker die op een sidesheet staat", async () => {
  //   await vlSideSheetPage.clickOpenSideSheetButton();

  //   const datepicker = await vlSideSheetPage.getSidesheetDatepicker();
  //   await datepicker.selectYear(2018);
  //   await datepicker.selectMonth("augustus");
  //   await datepicker.selectDay(29);
  //   await assert.eventually.equal(datepicker.getInputValue(), "29.08.2018");
  // });
});
