import Interaction from 'ol/interaction/Interaction';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';

export class VlMapAction {

    // it's Style in this class but in inherited class VlSelectionActions it's () => Style
    style: any; // Style;
    hoverStyle: any; // Style;
    /**
     * property that keeps reference to instance of Map class (OpenLayers)
     * @public
     * @type {import('ol/Map').Map}
     */
    map: Map;

    /**
     * property that keeps reference to instance of VectorLayer class (OpenLayers)
     * @public
     * @type {import('ol/layer/Vector').VectorLayer}
     */
    layer: VectorLayer<any>;

    get interactions(): Interaction[] {
        return this._interactions;
    }

    protected set interactions(interactions: Interaction[]) {
        this._interactions = interactions;
    }

    private _interactions: Interaction[];

    constructor(interactions: Interaction[]) {
        if (!Array.isArray(interactions)) {
            interactions = [interactions];
        }
        this._interactions = [];
        interactions.forEach((interaction) => {
            this.addInteraction(interaction);
        });
    }

    addInteraction(interaction: Interaction) {
        interaction.setActive(false);
        this._interactions.push(interaction);
    }

    activate() {
        this._interactions.forEach((interaction) => {
            interaction.setActive(true);
        });
    }

    deactivate() {
        this._interactions.forEach((interaction) => {
            interaction.setActive(false);
        });
    }

    getControl() {
        return (this as any).map.getActionControlWithIdentifier((this as any).element.identifier);
    }
}
