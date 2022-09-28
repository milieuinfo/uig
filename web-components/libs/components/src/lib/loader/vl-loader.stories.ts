import { html } from 'lit-html';
import './vl-loader.component';
import { args, argTypes } from './helper/vl-loader.stories-helper';

export default {
  title: 'Components/vl-loader',
  args,
  argTypes,
};

interface DefaultInterface {
    light: string,
    text: string,
    single: string,
}

export const Default = ({ light, text, single }: DefaultInterface) => html`
  <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single} data-cy="loader"></vl-loader>
`;

export const LightWithoutText = ({ light, text, single }: DefaultInterface) => html`
  <div class="vl-region" style="background: #b7b7b7">
    <vl-loader ?data-vl-light=${light} data-vl-text=${text} ?data-vl-single=${single} data-cy="loader-light-without-text"></vl-loader>
  </div>
`;

LightWithoutText.args = {
  light: true,
  single: true,
};

interface WithCustomContentInterface {
    light: string,
    single: string
}

export const WithCustomContent = ({ light, single }: WithCustomContentInterface) => html`
  <vl-loader ?data-vl-light=${light} ?data-vl-single=${single} data-cy="loader-with-custom-content">
    <span><strong>Informatie</strong> is aan het laden</span>
  </vl-loader>
`;

WithCustomContent.argTypes = {
  text: {
    control: {
      disable: true,
    },
  },
};
