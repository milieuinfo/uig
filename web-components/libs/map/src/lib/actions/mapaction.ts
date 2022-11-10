import Interaction from 'ol/interaction/Interaction';

export class VlMapAction {
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
}
