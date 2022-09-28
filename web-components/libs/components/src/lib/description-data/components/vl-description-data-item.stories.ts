import { html } from 'lit-html';
import './vl-description-data-item.component';

export default {
  title: 'Components/vl-description-data/vl-description-data-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    label: 'Uitgever',
    value: 'Kind en Gezin',
    labelSlotText: 'Uitgever',
    valueSlotText: 'Kind en Gezin',
  },
  argTypes: {
    label: {
      name: 'data-vl-label',
      description: 'Changes the label of the data item.',
      table: {
        type: { summary: 'String' },
        category: 'Attributes',
        defaultValue: { summary: '' },
      },
    },
    value: {
      name: 'data-vl-value',
      description: 'Changes the value of the data item.',
      table: {
        type: { summary: 'String' },
        category: 'Attributes',
        defaultValue: { summary: '' },
      },
    },
    labelSlotText: {
      name: 'label',
      description: 'Changes the label of the data item.',
      table: {
        type: { summary: 'String' },
        category: 'Slots',
        defaultValue: { summary: '' },
      },
      control: {
        disable: true,
      },
    },
    valueSlotText: {
      name: 'value',
      description: 'Changes the value of the data item.',
      table: {
        type: { summary: 'String' },
        category: 'Slots',
        defaultValue: { summary: '' },
      },
      control: {
        disable: true,
      },
    },
  },
};

interface DefaultInterface {
    label: string,
    value: string,
}

export const Default = ({ label, value }: DefaultInterface) =>
  html`<vl-description-data-item data-vl-label=${label} data-vl-value=${value}></vl-description-data-item>`;

interface WithSlotElementsInterface {
    labelSlotText: string,
    valueSlotText: string,
}

export const WithSlotElements = ({ labelSlotText, valueSlotText }: WithSlotElementsInterface) =>
  html`<vl-description-data-item>
    <span slot="label">${labelSlotText}</span>
    <span slot="value">${valueSlotText}</span>
  </vl-description-data-item>`;

WithSlotElements.argTypes = {
  label: {
    control: {
      disable: true,
    },
  },
  value: {
    control: {
      disable: true,
    },
  },
  labelSlotText: {
    control: {
      disable: false,
    },
  },
  valueSlotText: {
    control: {
      disable: false,
    },
  },
};
