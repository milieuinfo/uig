import { html } from 'lit-html';
import './vl-tabs.component';

export default {
  title: 'Components/vl-tabs',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const uig2115 = () =>
  html`
    <script>
      let index = 0;
      const addPane = () => {
        console.log('addPane', ++index);
        const div = document.createElement('div');
        div.innerHTML =
          '<vl-tabs-pane data-vl-id="trein-' +
          index +
          '" data-vl-title="Trein ' +
          index +
          '">TEST ' +
          index +
          '</vl-tabs-pane>';
        document.getElementById('tabs').appendChild(div.firstElementChild);
      };
    </script>
    <button is="vl-button" onclick="addPane()">Pane toevoegen</button>
    <vl-tabs id="tabs">
      <script>
        console.log('HIER KOM IK 1 KEER');
      </script>
      <vl-tabs-pane data-vl-id="metro-tram-bus" data-vl-title="Metro, tram en bus">
        Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem
        malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </vl-tabs-pane>
      <vl-tabs-pane data-vl-id="fiets" data-vl-title="Fiets">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </vl-tabs-pane>
    </vl-tabs>
  `;
