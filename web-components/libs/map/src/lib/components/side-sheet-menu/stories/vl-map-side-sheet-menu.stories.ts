import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../side-sheet/vl-map-side-sheet';
import '../../side-sheet-menu-item/vl-map-side-sheet-menu-item';
import '../vl-map-side-sheet-menu';

export default {
    title: 'map/side-sheet',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const sideSheetMenuDefault = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-side-sheet>
            <vl-map-side-sheet-menu>
                <vl-map-side-sheet-menu-item></vl-map-side-sheet-menu-item>
            </vl-map-side-sheet-menu>
        </vl-map-side-sheet>
    </vl-map>
`;
sideSheetMenuDefault.storyName = 'vl-map-side-sheet-menu - default';
