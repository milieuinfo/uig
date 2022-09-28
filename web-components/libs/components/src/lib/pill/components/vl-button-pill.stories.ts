import { html } from 'lit-html';
import './vl-button-pill.component';

const argTypes = {
  type: {
    name: 'data-vl-type',
    description: 'The attribute that determines the type. ',
    control: {
      type: 'select',
      options: ['success', 'warning', 'error'],
    },
    table: {
      type: {
        summary: `${'success'} | ${'warning'} | ${'error'}`,
      },
      category: 'Attributes',
      defaultValue: { summary: '' },
    },
  },
};

export default {
  title: 'Components/vl-pill/vl-button-pill',
  argTypes,
};

interface DefaultInterface {
  type: string
}

export const Default = ({ type }: DefaultInterface) =>
  html` <button is="vl-button-pill" type="button" data-vl-type=${type}>Optie 1</button> `;
