import { mapActionArgs, mapActionArgTypes } from '../../stories/vl-map-action.stories-arg';
import { html } from 'lit';
import '../../../../vl-map';
import '../../../baselayer/vl-map-base-layer-grb-gray';
import '../../../layer/vector-layer/vl-map-features-layer';
import '../../../layer/vector-layer/wfs-layer/vl-map-wfs-layer';
import '../vl-map-draw-point-action';
import { drawLineActionDefault } from './vl-map-draw-line-action.stories';

export default {
    title: 'map/draw-actions',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: mapActionArgs,
    argTypes: mapActionArgTypes,
};

export const drawPointActionDefault = ({ active }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-point-action .active=${active}></vl-map-draw-point-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawPointActionDefault.storyName = 'vl-map-draw-point-action - default';

export const drawPointActionWithDefaultActive = () => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-point-action data-vl-default-active></vl-map-draw-point-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawPointActionWithDefaultActive.storyName = 'vl-map-draw-point-action - with default active';
drawPointActionWithDefaultActive.argTypes = {
    active: {
        control: {
            disable: true,
        },
    },
};

export const drawPointActionWithSnapping = ({ active }) => html`
    <vl-map>
        <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        <vl-map-features-layer>
            <vl-map-draw-point-action .active=${active} data-vl-snapping data-vl-snapping-pixel-tolerance="1000">
                <vl-map-wfs-layer
                    data-vl-name="Stromend waterlichamen"
                    data-vl-url="https://geoserver.vmm.be/geoserver/vmm/wfs"
                    data-vl-layers="owl_l"
                    data-vl-max-resolution="4"
                >
                </vl-map-wfs-layer>
            </vl-map-draw-point-action>
        </vl-map-features-layer>
    </vl-map>
`;
drawPointActionWithSnapping.storyName = 'vl-map-draw-point-action - with snapping';
