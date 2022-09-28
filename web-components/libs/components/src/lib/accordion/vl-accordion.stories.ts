import { html } from 'lit-html';
import './vl-accordion.component';

const defaultArgs = {
  toggleText: 'Lees meer over de onderwijsdoelstelling',
  content: `Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.`,
};

export default {
  title: 'Components/vl-accordion',
  args: { ...defaultArgs },
  argTypes: {
    toggleText: {
      name: 'data-vl-toggle-text',
      type: { summary: 'string' },
      description:
        'Attribuut wordt gebruikt als tekst waarop de gebruiker kan klikken om de accordion te openen en te sluiten.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    openToggleText: {
      name: 'data-vl-open-toggle-text',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion geopend heeft.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    closedToggleText: {
      name: 'data-vl-close-toggle-text',
      type: { summary: 'string' },
      description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion gesloten heeft.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    content: {
      name: 'content (for demo purposes)',
      type: { summary: 'string' },
    },
  },
};

interface DefaultInterface {
  toggleText: string,
  content: any,
}

export const Default = ({ toggleText, content }: DefaultInterface) => html`<vl-accordion data-vl-toggle-text=${toggleText} data-cy="accordion">
  <span>${content}</span>
</vl-accordion>`;

Default.argTypes = {
  openToggleText: { control: false },
  closedToggleText: { control: false },
};

export const WithTitleSlot = ({ toggleText, content }: DefaultInterface) => html`
  <vl-accordion data-cy="accordion-with-title-slot">
    <span slot="title">${toggleText}</span>
    <span>${content}</span>
  </vl-accordion>
`;

WithTitleSlot.argTypes = {
  openToggleText: { control: false },
  closedToggleText: { control: false },
  toggleText: {
    name: 'title (slot)',
  },
};

interface DynamicToggleInterface extends DefaultInterface {
  openToggleText: string,
  closedToggleText: string,
}

export const DynamicToggle = ({ toggleText, content, openToggleText, closedToggleText }: DynamicToggleInterface) => html`
  <vl-accordion
    data-vl-toggle-text=${toggleText}
    data-vl-open-toggle-text=${openToggleText}
    data-vl-close-toggle-text=${closedToggleText}
    data-cy="accordion"
  >
    <span>${content}</span>
  </vl-accordion>
`;

DynamicToggle.args = {
  ...defaultArgs,
  openToggleText: 'Open de onderwijsdoelstelling',
  closedToggleText: 'Sluit de onderwijsdoelstelling',
};
