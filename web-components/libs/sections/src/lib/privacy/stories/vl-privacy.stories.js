import { html } from 'lit-html';
import '../vl-privacy';
import { docsIntro } from '../../../.storybook/utils.js';

export default {
    title: 'custom-elements/vl-privacy',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: docsIntro({
                    root: 'privacy',
                    intro: 'Privacy pagina.',
                }),
            },
        },
    },
    args: {
        version: '1.0.0',
        date: '3 maart 2021',
    },
    argTypes: {
        version: {
            name: 'data-vl-version',
            type: { summary: 'string' },
            description: 'Attribuut wordt gebruikt om de pagina versie aan te geven.',
            table: {
                defaultValue: { summary: '"1.0.0"' },
            },
        },
        date: {
            name: 'data-vl-date',
            type: { summary: 'string' },
            description: 'Attribuut wordt gebruikt om aan te geven op welke datum deze pagina opgesteld werd.',
            table: {
                defaultValue: { summary: '"3 maart 2021"' },
            },
        },
    },
};

export const Default = ({ version, date }) => {
    return html`<vl-privacy data-vl-version=${version} data-vl-date=${date}></vl-privacy>`;
};
