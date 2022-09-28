import { html } from 'lit-html';
import './vl-info-tile.component';

export default {
  title: 'Components/vl-info-tile',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    autoOpen: false,
    toggleable: false,
    titleSlotText: 'Broos Deprez',
    subtitleSlotText: 'Uw zoon (19.05.2005)',
    contentSlotText: 'De studietoelage voor Broos Deprez werd toegekend.',
  },
  argTypes: {
    autoOpen: {
      name: 'data-vl-auto-open',
      description: 'Used to open the info tile immediately at rendering.',
      table: {
        category: 'Attributes',
        type: 'Boolean',
        defaultValue: { summary: false },
      },
    },
    toggleable: {
      name: 'data-vl-toggleable',
      description: 'Used to make the info tile toggleable.',
      table: {
        category: 'Attributes',
        type: 'Boolean',
        defaultValue: { summary: false },
      },
    },
    titleSlotText: {
      name: 'title',
      description: 'Changes title of the info tile.',
      table: {
        category: 'Slots',
        defaultValue: { summary: undefined },
      },
    },
    subtitleSlotText: {
      name: 'subtitle',
      description: 'Changes the subtitle of the info tile.',
      table: {
        category: 'Slots',
        defaultValue: { summary: undefined },
      },
    },
    contentSlotText: {
      name: 'content',
      description: 'Changes the content of the info tile.',
      table: {
        category: 'Slots',
        defaultValue: { summary: undefined },
      },
    },
  },
};

interface DefaultInterface {
  toggleable: string,
  autoOpen: string,
  titleSlotText: string,
  subtitleSlotText: string,
  contentSlotText: string,

}

export const Default = ({
  toggleable,
  autoOpen,
  titleSlotText,
  subtitleSlotText,
  contentSlotText,
}: DefaultInterface) => html`
<vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen} data-cy="info-tile"><span slot="title">${titleSlotText}</span>
  <span slot="subtitle">${subtitleSlotText}</span>
  <div slot="content">${contentSlotText}</div>
</vl-info-tile>`;
