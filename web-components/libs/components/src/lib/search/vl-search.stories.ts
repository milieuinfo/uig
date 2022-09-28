import { html } from "lit-html";
import "./vl-search.component";

export default {
  title: "Components/vl-search",
};

// TODO Add options to the story.
export const Default = () => html`
  <vl-search id="search-inline" data-vl-inline="" data-cy="search"></vl-search>
`;
