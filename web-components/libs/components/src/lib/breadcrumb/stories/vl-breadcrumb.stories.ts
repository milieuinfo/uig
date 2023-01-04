import { html } from 'lit';
import '../vl-breadcrumb.component';
import '../vl-breadcrumb-item.component';

export default {
    title: 'Components/breadcrumb',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const breadcrumbDefault = () =>
    html`
        <vl-breadcrumb data-cy="breadcrumb">
            <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `;
breadcrumbDefault.storyName = 'vl-breadcrumb - default';

export const breadcrumbReactive = () => html`
  <script>
    console.log('BREADCRUMB WORDT GEÏNITIALISEERD');
    changeHref = (href) => {
      console.log('changeHref to', href);
      document.getElementById('breadCrumbItem1').setAttribute('data-vl-href', href);
    };
  </script>
  <button onclick="changeHref('testUrl')">Href wijzigen</button>
  <vl-breadcrumb>
    <vl-breadcrumb-item id="breadCrumbItem1" data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
    <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
  </vl-breadcrumb>
`;
breadcrumbReactive.storyName = 'vl-breadcrumb - reactive';
