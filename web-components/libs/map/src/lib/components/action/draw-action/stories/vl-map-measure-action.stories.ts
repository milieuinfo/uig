import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../controls/vl-map-action-controls';
import '../../../controls/vl-map-measure-control';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer';
import '../vl-map-measure-action';

export default {
    title: 'map/action/draw-action',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapActionArgs,
    argTypes: mapActionArgTypes,
};

export const measureActionDefault = ({ active }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-measure-action .active=${active}></vl-map-measure-action>
        </vl-map-features-layer>
    </vl-map>
`;
measureActionDefault.storyName = 'vl-map-measure-action - default';

export const measureActionWithDefaultActive = () => html` <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
        <vl-map-measure-action data-vl-default-active>
            <vl-map-wfs-layer
                data-vl-name="Stromend waterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="4"
            >
            </vl-map-wfs-layer>
        </vl-map-measure-action>
    </vl-map-features-layer>
</vl-map>`;
measureActionWithDefaultActive.storyName = 'vl-map-measure-action - with default active';
measureActionWithDefaultActive.argTypes = {
    active: {
        control: {
            disable: true,
        },
    },
};

export const measureActionWithSnapping = ({ active }) => html` <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
        <vl-map-measure-action .active=${active} data-vl-snapping>
            <vl-map-wfs-layer
                data-vl-name="Stromend waterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="4"
            >
            </vl-map-wfs-layer>
        </vl-map-measure-action>
    </vl-map-features-layer>
</vl-map>`;
measureActionWithSnapping.storyName = 'vl-map-measure-action - with snapping';

export const measureActionWithControl = ({ active }) =>
    html`
        <vl-map>
            <vl-map-action-controls>
                <vl-map-measure-control></vl-map-measure-control>
            </vl-map-action-controls>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-measure-action .active=${active}></vl-map-measure-action>
            </vl-map-features-layer>
        </vl-map>
    `;
measureActionWithControl.storyName = 'vl-map-measure-action - with control';
measureActionWithControl.args = {
    active: false,
};

const getLastElement = (element: any) => {
    const [lastItem] = [...Array(document.querySelectorAll(element))].slice(-1);
    return lastItem;
};

const getMeasureAction = () => getLastElement('vl-map-measure-action');

// TODO: het toggelen via de knop werkt niet !!!
export const measureActionWithControlOutsideMap = ({ active }) => html`
    <div is="vl-grid" data-vl-is-stacked>
        <div is="vl-column">
            <vl-toggle-button
                @click=${() => {
                    const measureAction: any = getMeasureAction();
                    measureAction.active = !measureAction.active;
                    console.log('measureAction:', measureAction.active);
                }}
            >
                Meten
            </vl-toggle-button>
        </div>
        <div is="vl-column">
            <vl-map>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
                <vl-map-features-layer>
                    <vl-map-measure-action .active=${active}></vl-map-measure-action>
                </vl-map-features-layer>
            </vl-map>
        </div>
    </div>
`;
measureActionWithControlOutsideMap.storyName = 'vl-map-measure-action - with control outside map';
measureActionWithControlOutsideMap.args = {
    active: false,
};
