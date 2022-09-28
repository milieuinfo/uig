import { html } from 'lit-html';
import './vl-modal.component';

export default {
  title: 'Components/vl-modal',
  args: {
      title: 'Modal',
      open: false,
      closable: false,
      notCancellable: false,
      notAutoClosable: false,
      allowOverflow: false,
  },
  argTypes: {
      title: {
          name: 'data-vl-title',
          type: { summary: 'String' },
          description: 'Attribute used to add an heading 2 (h2) title. When empty there is no heading element created.',
          table: {
              defaultValue: { summary: '' },
              category: 'Attributes',
          },
      },
      open: {
          name: 'data-vl-open',
          type: { summary: 'Boolean' },
          description:
              'Attribute to immediatly open up the modal after rendering.',
          table: {
              defaultValue: { summary: 'false' },
              category: 'Attributes',
          },
      },
      closable: {
          name: 'data-vl-closable',
          type: { summary: 'Boolean' },
          description:
              'Attribute to make the modal closable through the close icon in the top right corner.',
          table: {
              defaultValue: { summary: 'false' },
              category: 'Attributes',
          },
      },
      notCancellable: {
          name: 'data-vl-not-concellable',
          type: { summary: 'Boolean' },
          description:
              'Attribute used to make the modal non cancellable',
          table: {
              defaultValue: { summary: 'false' },
              category: 'Attributes',
          },
      },
      notAutoClosable: {
          name: 'data-vl-not-auto-closable',
          type: { summary: 'Boolean' },
          description:
              'Attribute to disable the closing of the modal when clicking the action in the button slot.',
          table: {
              defaultValue: { summary: 'false' },
              category: 'Attributes',
          },
      },
      allowOverflow: {
          name: 'data-vl-allow-overflow',
          type: { summary: 'Boolean' },
          description:
              'Attribute to allow the content of the modal to overflow.',
          table: {
              defaultValue: { summary: 'false' },
              category: 'Attributes',
          },
      },
  },
};

interface DefaultInterface {
    title: string;
    open: string;
    closable: string;
    notCancellable: string;
    notAutoClosable: string;
    allowOverflow: string;
}

export const Default = ({ title, open, closable, notCancellable, notAutoClosable, allowOverflow }: DefaultInterface) => html`
    <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-vt" data-cy="button-modal-toggle">
        Open
    </button>
    <vl-modal
        id="modal-vt"
        data-vl-title=${title}
        ?data-vl-open=${open}
        ?data-vl-closable=${closable}
        ?data-vl-not-cancellable=${notCancellable}
        ?data-vl-not-auto-closable=${notAutoClosable}
        ?data-vl-allow-overflow=${allowOverflow}
        data-cy="modal"
    >
        <span slot="content">
            <vl-datepicker></vl-datepicker>
            Lorem ipsum dolor sit amet.
          </span>
          <button is="vl-button" slot="button">Start aanvraag</button>
    </vl-modal>
`;

export const WithOtherAction = () => html`
    <button id="button-open-modal-vt" is="vl-button" data-vl-modal-open="modal-cl-nc-li" data-cy="button-modal-toggle">
        Open
    </button>
    <vl-modal id="modal-cl-nc-li" data-vl-title="Modal" data-vl-closable data-vl-not-cancellable data-cy="modal">
        <span slot="content">Lorem ipsum dolor sit amet.</span>
        <button is="vl-button-link" class="custom-action-button" slot="button">
            <span is="vl-icon" data-vl-icon="cross" before="" data-vl-modal-close=""></span>
            Andere actie
        </button>
    </vl-modal>
`;

WithOtherAction.parameters = {
    controls: { hideNoControlsWarning: false},
};