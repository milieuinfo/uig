import { html } from "lit-html";
import { styleMap } from "lit-html/directives/style-map.js";
import "./vl-tooltip.component";

const PLACEMENT = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};


const margin = "64px 124px";

export default {
  title: "Components/vl-tooltip",
  args: {
    placement: "top",
    tooltipContent: "Tooltip content",
    vlStatic: false,
  },
  argTypes: {
    placement: {
      name: "data-vl-placement",
      type: "select",
      options: [
        PLACEMENT.TOP,
        PLACEMENT.RIGHT,
        PLACEMENT.BOTTOM,
        PLACEMENT.LEFT,
      ],
      description: "The position of the tooltip",
      table: {
        type: {
          summary: `${PLACEMENT.TOP} | ${PLACEMENT.RIGHT} | ${PLACEMENT.BOTTOM} | ${PLACEMENT.LEFT}`,
        },
        category: 'Attributes',
      },
    },
    vlStatic: {
      name: "data-vl-static",
      description: "Adds a tooltip that is always visible",
      table: {
        type: { summary: "boolean" },
        category: 'Attributes',
      },
    },
    tooltipContent: { name: "content (for demo purposes)" },
  },
};

interface DefaultInterface {
    placement: string,
    tooltipContent: string,
    vlStatic: string,
}

export const Default = ({ placement, tooltipContent, vlStatic }: DefaultInterface) => {
  return html`<div
    style=${styleMap({
      display: "flex",
      justifyContent: "center",
      margin,
    })}
  >
    <button is="vl-button">
      <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}
        >${tooltipContent}</vl-tooltip
      >
      Tooltip
    </button>
  </div>`;
};

Default.argTypes = {
  vlStatic: {
    control: {
      disable: true,
    },
  },
};

export const Static = ({ placement, tooltipContent, vlStatic }: DefaultInterface) => {
  return html`<div
    style=${styleMap({
      border: "1px solid #e8ebee",
      padding: "1rem",
      margin,
    })}
  >
    <vl-tooltip ?data-vl-static=${vlStatic} data-vl-placement=${placement}
      >${tooltipContent}</vl-tooltip
    >
  </div>`;
};

Static.args = { vlStatic: true };
