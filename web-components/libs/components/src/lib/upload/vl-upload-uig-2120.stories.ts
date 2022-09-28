import { html } from 'lit-html';
import './vl-upload.component';

export default {
  title: 'Components/vl-upload',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const uig2120 = () =>
  html` <vl-upload url="http://httpbin.org/post" data-vl-input-name="files" id="vl-upload"></vl-upload> `;
