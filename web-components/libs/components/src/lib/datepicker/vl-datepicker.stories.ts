import { html } from 'lit-html';
import './vl-datepicker.component';

// TODO: Add more detailed stories with controls.
export default {
  title: 'Components/vl-datepicker',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
  <vl-datepicker id="default-datepicker"></vl-datepicker>
`;