<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js"></script>
    <script src="/node_modules/web-component-tester/browser.js"></script>

    <script type="module" src="../../../../../../../../lib/components/map/index.js"></script>
  </head>

  <test-fixture id="vl-map-draw-actions-fixture">
    <template>
      <vl-map>
        <vl-map>
          <vl-map-features-layer id="line-layer">
            <vl-map-draw-point-action id="draw-point-action"></vl-map-draw-point-action>
            <vl-map-draw-line-action id="draw-line-action"></vl-map-draw-line-action>
            <vl-map-draw-polygon-action id="draw-polygon-action"></vl-map-draw-polygon-action>
          </vl-map-features-layer>
        </vl-map>
      </vl-map>
    </template>
  </test-fixture>
  <body>
    <script type="module">
      import { awaitUntil } from '../../../../../../../utils/core/index.js';

      suite('vl-map-draw-line-action', () => {
        setup(async () => {
          await customElements.whenDefined('vl-map-draw-point-action');
          await customElements.whenDefined('vl-map-draw-line-action');
          await customElements.whenDefined('vl-map-draw-polygon-action');
        });

        test('after the draw action is completed, the callback will be called with the feature as the first argument and a reject callback as the second argument', async () => {
          const map = fixture('vl-map-draw-actions-fixture');
          await map.ready;
          const types = ['point', 'line', 'polygon'];
          for (let index = 0; index < types.length; index++) {
            const drawAction = map.querySelector(`vl-map-draw-${types[index]}-action`);
            await awaitUntil(() => drawAction.action != null);
            let featureDrawn = false;
            drawAction.onDraw((feature, rejectCallback) => {
              assert.equal(feature, 'getekendeFeature');
              assert.isFunction(rejectCallback);
              featureDrawn = true;
            });
            drawAction.action.drawInteraction.dispatchEvent({
              type: 'drawend',
              feature: 'getekendeFeature',
            });
            await awaitUntil(() => featureDrawn === true);
          }
        });
      });
    </script>
  </body>
</html>
