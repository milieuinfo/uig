import { html } from 'lit-html';
import './vl-share-buttons.component';
import './components/share-button/vl-share-button.component';

export default {
  title: 'Components/vl-share-buttons',
  args: { alt: false },
  argTypes: {
    alt: {
      name: 'data-vl-alt',
      description: 'Removes the gray border top.',
      table: {
        category: 'Attributes',
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

interface DefaultInterface {
  alt: string
}

export const Default = ({ alt }: DefaultInterface) => html`<vl-share-buttons ?data-vl-alt=${alt} data-cy="share-buttons">
  <vl-share-button href="#" data-vl-medium="facebook" data-cy="share-button-1"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="twitter" data-cy="share-button-2"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="linkedin" data-cy="share-button-3"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="googleplus" data-cy="share-button-4"></vl-share-button>
  <vl-share-button href="#" data-vl-medium="mail" data-cy="share-button-5"></vl-share-button>
</vl-share-buttons>`;
