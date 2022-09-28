import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';
import './vl-wizard.component';
import './components/vl-wizard-pane.component';

const getLastElement = (element: any) => {
  const [lastItem] = [...Array(document.querySelectorAll(element))].slice(-1);
  return lastItem;
};

export default {
  title: 'Components/vl-wizard',
  args: {
    activeStepSlider: 1,
    title: 'Wizard title',
    header: "You're a wizard Harry",
    onClickStep: action('vl-click-step'),
  },
  argTypes: {
    activeStepSlider: {
      name: 'data-vl-active-step',
      description: 'Sets the active step of the wizard.',
      control: { type: 'range', min: 1, max: 2, step: 1 },
      table: {
        type: {
          summary: 'Number',
        },
        category: 'Attributes',
        defaultValue: { summary: 1 },
      },
    },
    activeStep: {
      description: 'Sets the active step of the wizard.',
      table: {
        type: {
          summary: 'Number',
        },
        category: 'Properties',
        defaultValue: { summary: 1 },
      },
    },
    title: {
      description: 'Slot to place a title in the wizard.',
      table: {
        category: 'Slots',
      },
    },
    header: {
      description: 'Slot to place a header in the wizard.',
      table: {
        category: 'Slots',
      },
    },
    onClickStep: {
      name: 'vl-click-step',
      description:
        'The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.',
      table: { category: 'Events' },
    },
  },
};

// get last wizard, because storybook can render Default multiple times
const getWizard: any = () => getLastElement('vl-wizard');

interface DefaultInterface {
    activeStepSlider: string,
    title: string,
    header: string,
    onClickStep: any,
}

export const Default = ({ activeStepSlider, title, header, onClickStep }: DefaultInterface) => html`<div style="max-width: 780px;">
  <vl-wizard
    data-vl-active-step=${activeStepSlider}
    @vl-click-step=${(event: any) => {
      onClickStep(event.detail);
      getWizard().activeStep = event.detail.number;
    }}
  >
    <h2 slot="title" is="vl-h2">${title}</h2>
    <p slot="header">${header}</p>
    <vl-wizard-pane data-vl-name="Stap 1">
      <h3 is="vl-h3">Stap 1</h3>
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-form-grid" data-vl-is-stacked>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="naam" data-vl-block> Naam </label>
              <input id="naam" is="vl-input-field" data-vl-block />
            </div>
          </div>
        </div>
        <div is="vl-column">
          <button @click=${() => (getWizard().activeStep += 1)} is="vl-button" type="button">Volgende</button>
        </div>
      </div>
    </vl-wizard-pane>
    <vl-wizard-pane data-vl-name="Stap 2">
      <h3 is="vl-h3">Stap 2</h3>
      <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column" data-vl-size="12">
          <div is="vl-form-grid" data-vl-is-stacked>
            <div is="vl-form-column" data-vl-size="12">
              <label is="vl-form-label" for="years" data-vl-block> Aantal jaren dienst </label>
              <input id="years" is="vl-input-field" data-vl-block />
            </div>
          </div>
        </div>
        <div is="vl-column">
          <button @click=${() => (getWizard().activeStep -= 1)} is="vl-button-link" type="button">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span>
            Vorige
          </button>
        </div>
      </div>
    </vl-wizard-pane>
  </vl-wizard>
</div>`;
