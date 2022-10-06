import { html } from 'lit-html';
import '../vl-footer.section';
import { footerArgs, footerArgTypes } from './vl-footer.stories-arg';

export default {
    title: 'sections/footer',
    args: footerArgs,
    argTypes: footerArgTypes,
};

export const footerDefault = ({ identifier, development }: typeof footerArgs) => {
    return html` <vl-footer data-vl-identifier=${identifier} ?data-vl-development=${development}></vl-footer> `;
};
footerDefault.storyName = 'vl-footer - default';

export const footerBodySimulation = ({ identifier, development }: typeof footerArgs) => {
    return html` <div is="vl-body">
        <vl-footer data-vl-identifier=${identifier} ?data-vl-development=${development}></vl-footer>
    </div>`;
};
footerBodySimulation.storyName = 'vl-footer - body simulation';
