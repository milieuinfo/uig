import { html } from 'lit-html';
import '../../vl-share-buttons.component';
import './vl-share-button.component';

const MEDIA = {
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  LINKED_IN: 'linkedin',
  GOOGLE_PLUS: 'googleplus',
  MAIL: 'mail',
};

export default {
  title: 'Components/vl-share-buttons/vl-share-button',
  args: { href: '#', medium: MEDIA.FACEBOOK },
  argTypes: {
    medium: {
      name: 'data-vl-medium',
      type: 'select',
      options: [MEDIA.FACEBOOK, MEDIA.TWITTER, MEDIA.LINKED_IN, MEDIA.GOOGLE_PLUS, MEDIA.MAIL],
      description: 'This attribute is used to pass the medium.',
      table: {
        type: {
          summary: `${MEDIA.FACEBOOK} | ${MEDIA.TWITTER} | ${MEDIA.LINKED_IN} | ${MEDIA.GOOGLE_PLUS} | ${MEDIA.MAIL}`,
        },
      },
    },
    href: { type: 'string', description: "The href attribute specifies the link's destination." },
  },
};

interface DefaultInterface {
    href: string,
    medium: string,
}

export const Default = ({ href, medium }: DefaultInterface) =>
  html`<vl-share-buttons>
    <vl-share-button href=${href} data-vl-medium=${medium}></vl-share-button>
  </vl-share-buttons>`;
