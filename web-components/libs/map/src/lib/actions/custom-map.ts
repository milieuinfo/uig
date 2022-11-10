import GeoJSON from 'ol/format/GeoJSON';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import { Zoom, Rotate, ScaleLine, OverviewMap } from 'ol/control';
import { VlMapWithActions } from './map-with-actions';
import Control from 'ol/control/Control';
import { Layer } from 'ol/layer';
import { Projection } from 'ol/proj';
import { Extent } from 'ol/extent';
import { SimpleGeometry } from 'ol/geom';
import { Coordinate } from 'ol/coordinate';
import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';

/**
 * Dit is een versie van de VlMapWithActions die nog enkele extra functies bevat zoals het zoomen naar een bepaalde extent (of bounding box), het togglen van de layers, en alle functionaliteit omtrent een overzichtskaartje (ol.control.OverviewMap).
 * De view kan in het map opties object bij constructie worden meegegeven of een default view wordt aangemaakt op basis van de projectie.
 */
export class VlCustomMap extends VlMapWithActions {
    get projection(): Projection | undefined {
        return this._projection;
    }
    get view(): View {
        return this._view;
    }
    get baseLayers(): Layer[] {
        return this._baseLayers;
    }
    get maxZoomViewToExtent(): number {
        return this._maxZoomViewToExtent;
    }
    get overviewMapLayers(): Layer[] | undefined {
        return this._overviewMapLayers;
    }
    get overviewMapControl(): OverviewMap | undefined {
        return this._overviewMapControl;
    }

    private _projection?: Projection;
    private _view: View;
    private geoJSONFormat: GeoJSON;
    private custom: any;
    private _baseLayers: Layer[];
    private _maxZoomViewToExtent: number;
    private _overviewMapControl?: OverviewMap;
    private _overviewMapLayers?: Layer[];

    constructor(options: {
        defaultZoom?: boolean;
        maxZoomViewToExtent?: number;
        custom?: any;
        projection?: Projection;
        view?: View;
        controls?: Control[];
        customLayers?: any;
        layers?: Layer[];
    } = {}) {
        options.layers = [options?.customLayers?.baseLayerGroup, options?.customLayers?.overlayGroup];

        options.controls = (<Control[]> [
            new Zoom(),
            new Rotate(),
            new ScaleLine({
                minWidth: 128
            })
        ]).concat(options.controls || []);

        options.view = new View({
            // default
            extent: options?.projection?.getExtent(),
            projection: options.projection,
            maxZoom: 16,
            minZoom: 2,
            center: [140860.69299028325, 190532.7165957574],
            zoom: 2,
            // overwrite default
            ...options.view
        });

        super(options);

        if (options.defaultZoom === undefined || options.defaultZoom === true) {
            this.addControl(new Zoom());
        }

        this._projection = options.projection;
        this._view = options.view;

        this.geoJSONFormat = new GeoJSON({
            dataProjection: this._projection
        });

        this.custom = options.custom || {};

        if (options.customLayers._overviewMapLayers && options.customLayers._overviewMapLayers.length > 0) {
            this.createOverviewMapControl(options);
        }

        this._baseLayers = options.customLayers.baseLayerGroup.getLayers().getArray();

        this._maxZoomViewToExtent = options.maxZoomViewToExtent || 16;
    }

    createOverviewMapControl(options: { customLayers?: any; } = {}) {
        const self = this;

        const toggleBaseLayer = (baseLayer?: BaseLayer) => {
            const getNextLayerAfterVisibleLayer = (layers: BaseLayer[]) => {
                let currentIndex = 0;
                self._baseLayers.forEach((layer, index) => {
                    if (layer.getVisible()) {
                        currentIndex = index;
                    }
                });
                return layers[currentIndex + 1 >= layers.length ? 0 : currentIndex + 1];
            };

            if (!baseLayer) {
                baseLayer = getNextLayerAfterVisibleLayer(self._baseLayers);
            }
            self._baseLayers.forEach((layer) => layer.setVisible(layer == baseLayer));
            const overviewMapLayers = self?._overviewMapControl?.getOverviewMap()?.getLayers()?.getArray() || [];
            const nextVisibleOverviewMapLayer = getNextLayerAfterVisibleLayer(overviewMapLayers);
            overviewMapLayers.forEach((layer) => layer.setVisible(layer == nextVisibleOverviewMapLayer));
            self.render();
            self?._overviewMapControl?.getOverviewMap()?.render();
        };

        this._overviewMapLayers = options.customLayers.overviewMapLayers;
        this._overviewMapControl = new OverviewMap({
            layers: this._overviewMapLayers,
            collapsed: false,
            view: new View({
                projection: this._projection
            })
        });

        (this._overviewMapControl as any).element.addEventListener('click', () => toggleBaseLayer(), false);

        this.custom.toggleBaseLayer = toggleBaseLayer;
    }

    addBaseLayerAndOverlayMapLayer(baseLayer: Layer, overlayMapLayer: Layer) {
        baseLayer.setVisible(this._baseLayers.length === 0);
        this._baseLayers.push(baseLayer);

        if (this._overviewMapControl) {
            this._overviewMapControl.getOverviewMap().getLayers().getArray().push(overlayMapLayer);
        } else {
            this.createOverviewMapControl({
                customLayers: {
                    overviewMapLayers: [overlayMapLayer]
                }
            });
        }
        overlayMapLayer.setVisible(this._overviewMapControl?.getOverviewMap().getLayers().getArray().length === 2);
    }

    getBaseLayers() {
        return (<LayerGroup> this.getLayerGroup().getLayers().getArray()[0]).getLayers().getArray() || [];
    }

    getOverlayLayers() {
        return (<LayerGroup> this.getLayerGroup().getLayers().getArray()[1]).getLayers().getArray() || [];
    }

    initializeView(boundingBox: SimpleGeometry | Extent, maxZoom?: number) {
        this.zoomViewToExtent(this.getView(), boundingBox, maxZoom);
    }

    zoomToExtent(boundingBox: SimpleGeometry | Extent, maxZoom?: number) {
        this.zoomViewToExtent(this.getView(), boundingBox, maxZoom);
    }

    zoomViewToExtent(view: View, boundingBox: SimpleGeometry | Extent, maxZoom?: number) {
        if (boundingBox) {
            view.fit(boundingBox, { size: this.getSize() });
        }

        if (maxZoom || this._maxZoomViewToExtent) {
            const zoom = view.getZoom();
            if (zoom && zoom > (maxZoom || this._maxZoomViewToExtent)) {
                view.setZoom(maxZoom || this._maxZoomViewToExtent);
            }
        }
    }

    zoomToGeometry(geometry: any, maxZoom?: number) {
        const geoJson = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry
                }
            ]
        };

        const featureGeometry = this?.geoJSONFormat?.readFeatures(geoJson)[0]?.getGeometry();
        if (featureGeometry) {
            this.zoomToExtent(featureGeometry.getExtent(), maxZoom);
        }
    }

    showInfo(info: string, coordinate: Coordinate) {
        const close = document.createElement('div');
        close.setAttribute('class', 'close');
        close.onclick = (event) => {
            if (event?.currentTarget instanceof HTMLElement
                && event?.currentTarget?.parentNode instanceof HTMLElement) {
                event.currentTarget.parentNode.remove();
            }
        }

        const element = document.createElement('div');
        element.innerHTML = `<span class='content'>${info}</span><div class='arrow'></div>`;
        element.setAttribute('class', 'info-tooltip');
        element.appendChild(close);

        const tooltip = new Overlay({
            offset: [0, -5],
            positioning: 'bottom-center',
            element
        });

        this.addOverlay(tooltip);
        tooltip.setPosition(coordinate);

        if (element?.parentNode instanceof HTMLElement) {
            element.parentNode.style.position = 'fixed'; // because the overlay has absolute positioning and otherwise the left side panel could influence the overlay elements
        }
    }
}
