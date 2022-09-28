import { html } from 'lit-html';
import './vl-upload.component';

// TODO: Add better stories with controls.

export default {
  title: 'Components/vl-upload',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => html`
  <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload"></vl-upload>
`;
