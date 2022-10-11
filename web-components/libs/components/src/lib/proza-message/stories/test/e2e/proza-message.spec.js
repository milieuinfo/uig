import { assert, getDriver } from '../../../../utils/test';
import { VlProzaMessagePage } from './proza-message.page';

describe('vl-proza-message', async () => {
  let vlProzaMessagePage;

  before(() => {
    vlProzaMessagePage = new VlProzaMessagePage(getDriver());
    return vlProzaMessagePage.load();
  });

  it('als gebruiker kan ik een potlood zien bij een proza component', async () => {
    const message = await vlProzaMessagePage.getMessageFirstDemo();
    const button = await message.getEditButton();
    await assert.eventually.isTrue(button.hasIcon());
    const icon = await button.getIcon();
    await assert.eventually.equal(icon.getType(), 'pencil');
  });

  it('als gebruiker kan ik een text-redo zien bij een proza component', async () => {
    const message = await vlProzaMessagePage.getMessageFirstDemo();
    const button = await message.getRefreshButton();
    await assert.eventually.isTrue(button.hasIcon());
    const icon = await button.getIcon();
    await assert.eventually.equal(icon.getType(), 'text-redo');
  });

  it('als gebruiker zie ik de parameter values in lees modus', async () => {
    const message = await vlProzaMessagePage.getMessageWithParameters();
    await assert.eventually.equal(message.getText(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis molestie feugiat. Lorem ipsum eros, consequat et venenatis ac, scelerisque feugiat nunc. Nam molestie tincidunt lectus, nec volutpat ante egestas at. Curabitur quis odio metus. Morbi at purus ac purus convallis tempus at eu est. Nunc id ligula quis justo semper ullamcorper. Donec orci nisi, tempus varius massa ut, vulputate imperdiet nibh. Maecenas tempus lectus quis turpis cursus, ac vehicula ligula fermentum.\nPraesent consequat diam nec semper congue. ipsum tempor ut erat nec aliquam. Quisque ullamcorper sapien magna, sit amet porta ipsum pulvinar aliquam. Sed eleifend fringilla augue in vehicula. Sed leo sem, imperdiet non ornare maximus, bibendum facilisis massa. Nunc condimentum leo mi, quis porta ante mattis ut. Quisque eu enim vel metus consequat iaculis. Donec malesuada odio quis quam vulputate vestibulum.');
  });
});
