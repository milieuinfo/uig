import { html } from "lit-html";
import "../vl-wizard.component";
import "./vl-wizard-pane.component";

export default {
  title: "Components/vl-wizard/vl-wizard-pane",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: { name: "Stap 1" },
  argTypes: {
    name: {
      name: "data-vl-name",
      description:
        "Sets the name of the pane. The name is visible in de tooltip of the step.",
      table: {
        type: {
          summary: "string",
        },
        category: 'Attributes',
      },
    },
  },
};

interface DefaultInterface {
  name: string
}

export const Default = ({ name }: DefaultInterface) => {
  return html`<div style="max-width: 780px">
    <vl-wizard>
      <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>
    </vl-wizard>
  </div>`;
};
