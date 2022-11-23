import { assert, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import { VlMapWithActions } from '../../../actions';
import '../../vl-map';
import '../../layer/vector-layer/vl-map-features-layer';
import './vl-map-layer-action';

const mapLayerActionFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-action></vl-map-layer-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerActionDefaultActiveFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer>
                <vl-map-layer-action data-vl-default-active></vl-map-layer-action>
            </vl-map-features-layer>
        </vl-map>
    `);

const mapLayerActionLayerFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer></vl-map-features-layer>
            <vl-map-layer-action></vl-map-layer-action>
        </vl-map>
    `);

const mapLayerActionLayerByNameFixture = async () =>
    fixture(html`
        <vl-map>
            <vl-map-features-layer data-vl-name="layer"></vl-map-features-layer>
            <vl-map-layer-action data-vl-layer="layer"></vl-map-layer-action>
        </vl-map>
    `);

describe('vl-map-layer-action', () => {
    const sandbox = sinon.createSandbox();

    const action = {
        interactions: [],
        deactivate: sandbox.spy(),
        activate: sandbox.spy(),
    };

    afterEach(() => {
        sandbox.restore();
    });

    // TODO: geskipped - te bekijken met Sander
    it.skip('de actie wordt standaard gekoppeld aan de kaartlaag waarin gedeclareerd', async () => {
        const map = await mapLayerActionFixture();
        const actionElement = map.querySelector('vl-map-layer-action');
        const layerElement = map.querySelector('vl-map-features-layer');
        const createActionStub = sandbox
            .stub(actionElement, '_createAction')
            .withArgs(layerElement.layer)
            .returns(action);
        assert.lengthOf(map._map.actions, 1);
        assert.deepEqual(map._map.actions[0], action);
        setTimeout(() => {
            assert.isFalse(action.activate.called);
            createActionStub.reset();
        }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
    });

    // it("de actie kan standaard geactiveerd worden via het default active attribuut", (done) => {
    //   const map = fixture("vl-map-layer-action-default-active-fixture");
    //   const actionElement = map.querySelector("vl-map-layer-action");
    //   const layerElement = map.querySelector("vl-map-features-layer");
    //   const createActionStub = sandbox
    //     .stub(actionElement, "_createAction")
    //     .withArgs(layerElement.layer)
    //     .returns(action);
    //   map.ready.then(() => {
    //     assert.lengthOf(map._map.actions, 1);
    //     assert.deepEqual(map._map.actions[0], action);
    //     setTimeout(() => {
    //       assert.isTrue(action.activate.called);
    //       createActionStub.reset();
    //       done();
    //     }, VlMapWithActions.CLICK_COUNT_TIMEOUT);
    //   });
    // });

    // TODO: geskipped - te bekijken met Sander
    it.skip('de actie kaartlaag koppeling kan gebeuren via een attribuut', async () => {
        const map = await mapLayerActionLayerByNameFixture();
        const actionElement = map.querySelector('vl-map-layer-action');
        const layerElement = map.querySelector('vl-map-features-layer');
        const createActionStub = sandbox
            .stub(actionElement, '_createAction')
            .withArgs(layerElement.layer)
            .returns(action);
        assert.lengthOf(map._map.actions, 1);
        assert.deepEqual(map._map.actions[0], action);
        createActionStub.reset();
    });

    it('de actie kaartlaag kan gezet worden zodat één actie voor meerdere kaartlagen gebruikt kan worden', async () => {
        const map = await mapLayerActionLayerFixture();
        const layerElement = map.querySelector('vl-map-features-layer');
        const actionElement = map.querySelector('vl-map-layer-action');
        const createActionStub = sandbox.stub(actionElement, '_createAction').returns(action);
        assert.lengthOf(map._map.actions, 0);
        actionElement.layer = layerElement.layer;
        setTimeout(() => {
            assert.lengthOf(map._map.actions, 1);
            assert.deepEqual(map._map.actions[0], action);
            createActionStub.reset();
        });
    });
});
