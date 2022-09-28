import { html } from 'lit';
import './vl-breadcrumb.component';
import './vl-breadcrumb-item.component';

export default {
    title: 'Components/vl-breadcrumb',
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default = () =>
    html`
        <vl-breadcrumb data-cy="breadcrumb">
            <vl-breadcrumb-item data-vl-href="#">Vlaanderen Intern</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Regelgeving</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Webuniversum</vl-breadcrumb-item>
            <vl-breadcrumb-item data-vl-href="#">Componenten</vl-breadcrumb-item>
        </vl-breadcrumb>
    `;
