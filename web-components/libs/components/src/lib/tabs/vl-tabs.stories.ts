import { html } from 'lit-html';

export default {
    title: 'Components/vl-tabs',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const legacyDocs = () => html`
    <vl-tabs data-cy="tabs">
        <vl-tabs-pane data-vl-id="trein" data-vl-title="Trein" data-cy="tab-pane-1">
            Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus" data-cy="tab-pane-2">
            Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
            malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
        </vl-tabs-pane>
        <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets" data-cy="tab-pane-3">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu
            leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </vl-tabs-pane>
    </vl-tabs>
`;
