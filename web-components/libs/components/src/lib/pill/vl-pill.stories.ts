import { html } from 'lit-html';
import './vl-pill.component';
import { args, argTypes } from './helper/vl-pill.component-helper';

export default {
  title: 'Components/vl-pill',
  args,
  argTypes,
};

interface DefaultInterface {
    closable: string,
    checkable: string,
    checked: string,
    type: string,
    disabled: string,
    close: any,
    check: any,
}

export const Default = ({ closable, checkable, checked, type, disabled, close, check }: DefaultInterface) => html`
  <vl-pill
    ?data-vl-closable=${closable}
    ?data-vl-checkable=${checkable}
    data-vl-type=${type}
    ?data-vl-disabled=${disabled}
    .checked=${checked}
    @close=${(event: any) => close(event)}
    @check=${(event: any) => check(event.detail)}
    data-cy="pill"
    >Optie 1</vl-pill
  >
`;
