import { html } from "lit-html";
import "./vl-pager.component";
import { args, argTypes } from "./helper/vl-pager.stories-helper";

export default {
  title: "Components/vl-pager",
  args,
  argTypes,
};

interface TemplateInterface {
  totalItems: string,
  itemsPerPage: string,
  currentPage: string,
  paginationDisabled: string,
  alignCenter: string,
  alignRight: string,
  change: any,

}

const Template = ({
  totalItems,
  itemsPerPage,
  currentPage,
  paginationDisabled,
  alignCenter,
  alignRight,
  change,
}: TemplateInterface) => html`
  <vl-pager
    data-vl-total-items=${totalItems}
    data-vl-items-per-page=${itemsPerPage}
    data-vl-current-page=${currentPage}
    ?data-vl-pagination-disabled=${paginationDisabled}
    ?data-vl-align-center=${alignCenter}
    ?data-vl-align-right=${alignRight}
    @change=${(event: any) => change(event.detail)}
    data-cy="pager"
  ></vl-pager>
`;

export const Default = Template.bind({}) as any;
export const SinglePage = Template.bind({}) as any;
export const WithoutPageItems = Template.bind({}) as any;

SinglePage.args = {
  totalItems: 10,
  itemsPerPage: 10,
  currentPage: 1,
  paginationDisabled: false,
};

WithoutPageItems.args = {
  totalItems: 100,
  itemsPerPage: 10,
  currentPage: 1,
  paginationDisabled: true,
};
