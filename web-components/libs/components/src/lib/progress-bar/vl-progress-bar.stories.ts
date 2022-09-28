import { html } from "lit-html";
import "./vl-progress-bar.component";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/vl-progress-bar",
  args: {
    numeric: false,
    activeStep: 1,
    focusOnChange: false,
    steps: ["Stap 1/3: Aanvraag", "Stap 2/3: Gegevens", "Stap 3/3: Bevestigen"],
    onClickStep: action("vl-click-step"),
  },
  argTypes: {
    numeric: {
      name: "data-vl-numeric",
      description: "Replaces the bullets by numbers.",
      table: {
        type: {
          summary: "boolean",
        },
        category: 'Attributes',
        defaultValue: { summary: false },
      },
    },
    activeStep: {
      name: "data-vl-active-step",
      description: "Sets the active step of the progress bar.",
      control: { type: "range", min: 1, max: 3, step: 1 },
      table: {
        type: {
          summary: "number",
        },
        category: 'Attributes',
        defaultValue: { summary: 1 },
      },
    },
    focusOnChange: {
      name: "data-vl-focus-on-change",
      description: "Sets whether the step must be focused on on change or not.",
      table: {
        type: {
          summary: "boolean",
        },
        category: 'Attributes',
        defaultValue: { summary: false },
      },
    },
    onClickStep: {
      name: "vl-click-step",
      description:
        "The custom event fired on click of a step. In the detail of the event, you can find the number and name of the clicked step.",
      table: { category: 'Events' },
    },
    steps: {
      description: "Sets the steps with an array of strings.",
      type: { summary: "array" },
      table: {
        category: 'Properties',
        defaultValue: { summary: "[]" },
      },
    },
  },
};

interface DefaultInterface {
    numeric: string,
    activeStep: string,
    steps: string,
    focusOnChange: string,
    onClickStep: any,
}

export const Default = ({
  numeric,
  activeStep,
  steps,
  focusOnChange,
  onClickStep,
}: DefaultInterface) => {
  return html`<vl-progress-bar
    ?data-vl-numeric=${numeric}
    ?data-vl-focus-on-change=${focusOnChange}
    data-vl-active-step=${activeStep}
    .steps=${steps}
    @vl-click-step=${(event: any) => onClickStep(event.detail)}
    data-cy="progress-bar"
  >
  </vl-progress-bar>`;
};
