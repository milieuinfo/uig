import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/vl-map-wfs-layer';
import '../vl-map-draw-line-action';

export default {
    title: 'map/action/draw-action',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapActionArgs,
    argTypes: mapActionArgTypes,
};

export const drawLineActionDefault = ({ active }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-line-action .active=${active}></vl-map-draw-line-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawLineActionDefault.storyName = 'vl-map-draw-line-action - default';

export const drawLineActionWithDefaultActive = () => html` <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
        <vl-map-draw-line-action data-vl-default-active></vl-map-draw-line-action>
    </vl-map-features-layer>
</vl-map>`;
drawLineActionWithDefaultActive.storyName = 'vl-map-draw-line-action - with default active';
drawLineActionWithDefaultActive.argTypes = {
    active: {
        control: {
            disable: true,
        },
    },
};

export const drawLineActionWithSnapping = ({ active }) => html` <vl-map>
    <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
    <vl-map-features-layer>
        <vl-map-draw-line-action .active=${active} data-vl-snapping>
            <vl-map-wfs-layer
                data-vl-name="Stromend waterlichamen"
                data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                data-vl-layers="owl_l"
                data-vl-max-resolution="4"
            >
            </vl-map-wfs-layer>
        </vl-map-draw-line-action>
    </vl-map-features-layer>
</vl-map>`;
drawLineActionWithSnapping.storyName = 'vl-map-draw-line-action - with snapping';
