import { html } from 'lit-html';
import { breadcrumbItemArgs, breadcrumbItemArgTypes } from './vl-breadcrumb-item.stories-arg';

export default {
    title: 'Components/breadcrumb',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    args: breadcrumbItemArgs,
    argTypes: breadcrumbItemArgTypes,
};

export const breadCrumbItem = ({ href }: typeof breadcrumbItemArgs ) => html`
  <vl-breadcrumb-item data-vl-href=${href}>Regelgeving</vl-breadcrumb-item>
`;
breadCrumbItem.storyName = 'vl-breadcrumb-item - default';

export const breadcrumbItemReactive = () => html`
  <script>
    console.log('BREADCRUMB-ITEM WORDT GEÏNITIALISEERD');
    changeHref = (href) => {
      console.log('changeHref to', href);
      document.getElementById('breadCrumbItem1').setAttribute('data-vl-href', href);
    };
  </script>
  <button onclick="changeHref('testUrl')">Href wijzigen</button>
  <vl-breadcrumb-item id="breadCrumbItem1" data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
`;
breadcrumbItemReactive.storyName = 'vl-breadcrumb-item - reactive';
