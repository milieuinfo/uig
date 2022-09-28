import { html } from "lit-html";
import "./vl-functional-header.component";

export default {
  title: "Components/vl-functional-header",
  args: {
    title: "School- en studietoelagen",
    subTitle: "Voor lager, middelbaar en hoger onderwijs",
    link: "#",
    backLink: "#",
    back: "Terug",
  },
  argTypes: {
    title: {
      name: "data-vl-title",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de tekst van de titel te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    subTitle: {
      name: "data-vl-sub-title",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de tekst van de sub titel te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    link: {
      name: "data-vl-link",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de link van de titel te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    backLink: {
      name: "data-vl-back-link",
      type: { summary: "string" },
      description: "Attribuut wordt gebruikt om de terug link te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
    back: {
      name: "data-vl-back",
      type: { summary: "string" },
      description:
        "Attribuut wordt gebruikt om de terug link tekst te bepalen.",
      table: {
        defaultValue: { summary: "" },
      },
    },
  },
};

interface DefaultInterface {
    title: string,
    subTitle: string,
    link: string,
    backLink: string,
    back: string,
}

export const Default = ({ title, subTitle, link, backLink, back }: DefaultInterface) =>
  html`<vl-functional-header
    data-vl-back=${back}
    data-vl-back-link=${backLink}
    data-vl-title=${title}
    data-vl-sub-title=${subTitle}
    data-vl-link=${link}
    data-cy="functional-header"
  ></vl-functional-header>`;

export const WithSlotElements = ({ title, subTitle, link, backLink, back }: DefaultInterface) =>
  html`<vl-functional-header
    data-vl-link=${link}
    data-vl-back-link=${backLink}
    data-vl-back=${back}
    data-cy="functional-header-with-slot-elements"
  >
    <span slot="title">${title}</span>
    <span slot="sub-title">${subTitle}</span>
    <span slot="back">${back}</span>
  </vl-functional-header>`;

WithSlotElements.argTypes = {
  title: {
    name: "title (slot)",
  },
  subTitle: {
    name: "sub-title (slot)",
  },
  back: {
    name: "back (slot)",
  },
};

interface WithUserInteractionInterface extends DefaultInterface {
  content: any
}

export const WithUserInteraction = ({
  title,
  subTitle,
  link,
  backLink,
  back,
  content,
}: WithUserInteractionInterface) => html`
  <vl-functional-header
    data-vl-link=${link}
    data-vl-back-link=${backLink}
    data-vl-back=${back}
    data-cy="functional-header-with-user-interaction"
  >
    <span slot="title">${title}</span>
    <span slot="sub-title">${subTitle}</span>
    <span slot="back">${back}</span>
    <div slot="actions">
      <a href="#">${content}</a>
    </div>
  </vl-functional-header>
`;

WithUserInteraction.args = {
  content: "Koen Peeters",
};

WithUserInteraction.argTypes = {
  content: {
    name: "actions (slot)",
    type: "string",
  },
  title: {
    name: "title (slot)",
  },
  subTitle: {
    name: "sub-title (slot)",
  },
  back: {
    name: "back (slot)",
  },
};
