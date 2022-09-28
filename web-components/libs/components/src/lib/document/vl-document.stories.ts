import { html } from "lit-html";
import "./vl-document.component";

export default {
  title: "Components/vl-document",
  args: {
    href: "#",
    type: "PDF",
    title: "Hubert en Jan van Eyck, Vlaamse Primitieven",
    metadata: "PDF - 580 kB",
  },
  argTypes: {
    href: {
      name: "data-vl-href",
      type: { summary: "string" },
      description: "Attribuut wordt gebruikt om de download link te bepalen.",
      table: {
        defaultValue: { summary: "#" },
      },
    },
    type: { name: "type (slot)" },
    title: { name: "title (slot)" },
    metadata: { name: "metadata (slot)" },
  },
};

interface DefaultInterface {
    href: string,
    type: string,
    title: string,
    metadata: string,
}

export const Default = ({ href, type, title, metadata }: DefaultInterface) => html`<div
  is="vl-grid"
>
  <div is="vl-column" data-vl-size="3" data-vl-medium-size="6">
    <vl-document data-vl-href=${href} data-cy="document">
      <span slot="type">${type}</span>
      <span slot="title">${title}</span>
      <span slot="metadata">${metadata}</span>
    </vl-document>
  </div>
</div>`;
