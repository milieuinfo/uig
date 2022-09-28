import { html } from 'lit-html';
import './vl-infoblock.component';

export default {
  title: 'Components/vl-infoblock',
  argTypes: {
    type: {
      name: 'data-vl-type',
      type: 'select',
      options: ['contact', 'publications', 'faq', 'news', 'timeline', 'question'],
      description: 'Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    title: {
      name: 'data-vl-title',
      type: { summary: 'string' },
      description: 'Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    icon: {
      name: 'data-vl-icon',
      type: 'select',
      options: ['calendar', 'programming-bug', 'key'],
      description:
        'Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
      control: {
        disable: true,
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    content: {
      name: 'content (for demo purposes)',
      type: { summary: 'string' },
    },
  },
};

interface TemplateInterface {
    title: string,
    content: any,
    type: string,
    icon: string,
}

const Template = ({ title, content, type, icon }: TemplateInterface) =>
html`
  <vl-infoblock
    slot="info"
    data-vl-title=${title}
    data-vl-type=${type}
    data-vl-icon=${icon}
    data-cy="infoblock"
  >${content}</vl-infoblock>
`;

export const Contact = Template.bind({}) as any;
export const Publications = Template.bind({}) as any;
export const FAQ = Template.bind({}) as any;
export const News = Template.bind({}) as any;
export const Timeline = Template.bind({}) as any;
export const Question = Template.bind({}) as any;
export const CustomIcon = Template.bind({}) as any;

Contact.args = {
  title: 'Contactenlijst',
  content: 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.',
  type: 'contact',
};

Publications.args = {
  title: 'Contracten',
  content: 'Hieronder bevindt zich een overzicht van al uw contracten binnen de Vlaamse Overheid',
  type: 'publications',
};

FAQ.args = {
  title: 'Veelgestelde vragen',
  content: 'Hieronder bevindt zich een overzicht van alle veelgestelde vragen binnen de Vlaamse Overheid.',
  type: 'faq',
};

News.args = {
  title: 'Nieuwsberichten',
  content: 'Hieronder bevindt zich een overzicht van alle nieuwsberichten binnen de Vlaamse Overheid.',
  type: 'news',
};

Timeline.args = {
  title: 'Archief',
  content: 'Hieronder bevindt zicht een overzicht van alle gearchiveerde berichten binnen de Vlaamse Overheid.',
  type: 'timeline',
};

Question.args = {
  title: 'Overheidsdiensten',
  content: 'Hieronder bevindt zicht een overzicht van alle overheidsdiensten binnen de Vlaamse Overheid.',
  type: 'question',
};

CustomIcon.args = {
  title: 'Evenementen',
  content: 'Hieronder bevindt zicht een overzicht van alle evenementen binnen de Vlaamse Overheid.',
  icon: 'calendar',
};

CustomIcon.argTypes = {
  icon: {
    control: {
      disable: false,
    },
  },
};

interface WithSlotElementsInterface {
    title: string,
    content: any,
    type: string,
}

export const WithSlotElements = ({ title, content, type }: WithSlotElementsInterface) => html`
  <vl-infoblock data-vl-type=${type} data-cy="infoblock-with-slot-elements">
    <h2 is="vl-h2"slot="title">${title}</h2>
    ${content}
  </vl-infoblock>
`;

WithSlotElements.args = {
  title: 'Titel via slot',
  content: 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.',
  type: 'contact',
};

WithSlotElements.argTypes = {
  title: {
    name: 'title (slot)',
  },
};
