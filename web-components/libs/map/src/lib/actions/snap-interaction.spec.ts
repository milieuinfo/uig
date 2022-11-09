import VectorSource from 'ol/source/Vector';
import { VlSnapInteraction } from './snap-interaction';

describe('snapinteraction interaction', () => {
    it('bij het aanmaken van een snap interactie zullen de options correct worden gezet', () => {
        const source = new VectorSource({ features: [] });
        const snapInteraction = new VlSnapInteraction(source);
        // @ts-ignore
        expect(snapInteraction.source_).toBe(source);
        // @ts-ignore
        expect(snapInteraction.pixelTolerance_).toBe(7);
    });

    it('pixel tolerance kan ook meegegeven worden', () => {
        const source = new VectorSource({ features: [] });
        const snapInteraction = new VlSnapInteraction(source, { pixelTolerance: 1000 });
        // @ts-ignore
        expect(snapInteraction.source_).toBe(source);
        // @ts-ignore
        expect(snapInteraction.pixelTolerance_).toBe(1000);
    });
});
