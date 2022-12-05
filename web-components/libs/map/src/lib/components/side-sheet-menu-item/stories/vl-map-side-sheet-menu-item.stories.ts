import { html } from 'lit-html';
import '../../../vl-map';
import '../../baselayer/vl-map-base-layer-grb-gray';
import '../../side-sheet/vl-map-side-sheet';
import '../../side-sheet-menu/vl-map-side-sheet-menu';
import '../vl-map-side-sheet-menu-item';
import { sideSheetArgs, sideSheetArgTypes } from './vl-map-side-sheet-menu-item.stories-arg';

export default {
    title: 'map/side-sheet',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: sideSheetArgs,
    argTypes: sideSheetArgTypes,
};
export const sideSheetMenuItemDefault = ({ title, href }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-side-sheet>
            <vl-map-side-sheet-menu>
                <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}>
                    <span>Gelieve een resultaat aan te maken</span>
                </vl-map-side-sheet-menu-item>
            </vl-map-side-sheet-menu>
        </vl-map-side-sheet>
    </vl-map>
`;
sideSheetMenuItemDefault.storyName = 'vl-map-side-sheet-menu-item - default';
