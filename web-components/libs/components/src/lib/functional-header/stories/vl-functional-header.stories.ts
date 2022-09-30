import { html } from 'lit-html';
import '../vl-functional-header.component';
import { functionalHeaderArgs, functionalHeaderArgTypes } from './vl-functional-header.stories-arg';

export default {
    title: 'Components/functional-header',
    args: functionalHeaderArgs,
    argTypes: functionalHeaderArgTypes,
};

export const functionalHeaderDefault = ({ title, subTitle, link, backLink, back }: typeof functionalHeaderArgs) =>
    html`<vl-functional-header
        data-vl-back=${back}
        data-vl-back-link=${backLink}
        data-vl-title=${title}
        data-vl-sub-title=${subTitle}
        data-vl-link=${link}
        data-cy="functional-header"
    ></vl-functional-header>`;
functionalHeaderDefault.storyName = 'vl-functional-header - default';

export const functionalHeaderWithSlotElements = ({
    title,
    subTitle,
    link,
    backLink,
    back,
}: typeof functionalHeaderArgs) =>
    html`<vl-functional-header
        data-vl-link=${link}
        data-vl-back-link=${backLink}
        data-vl-back=${back}
        data-cy="functional-header-with-slot-elements"
    >
        <span slot="title">${title}</span>
        <span slot="sub-title">${subTitle}</span>
        <span slot="back">${back}</span>
    </vl-functional-header>`;
functionalHeaderWithSlotElements.storyName = 'vl-functional-header - with slot elements';
functionalHeaderWithSlotElements.argTypes = {
    title: {
        name: 'title (slot)',
    },
    subTitle: {
        name: 'sub-title (slot)',
    },
    back: {
        name: 'back (slot)',
    },
};

// TODO eens bedenken hoe die 'any' beter kan - de interface aanpak vind ik te omslachtig
export const functionalHeaderWithUserInteraction = ({ title, subTitle, link, backLink, back, content }: any) => html`
    <vl-functional-header
        data-vl-link=${link}
        data-vl-back-link=${backLink}
        data-vl-back=${back}
        data-cy="functional-header-with-user-interaction"
    >
        <span slot="title">${title}</span>
        <span slot="sub-title">${subTitle}</span>
        <span slot="back">${back}</span>
        <div slot="actions">
            <a href="#">${content}</a>
        </div>
    </vl-functional-header>
`;
functionalHeaderWithUserInteraction.storyName = 'vl-functional-header - with user interaction';
functionalHeaderWithUserInteraction.args = {
    content: 'Koen Peeters',
};
functionalHeaderWithUserInteraction.argTypes = {
    content: {
        name: 'actions (slot)',
        type: 'string',
    },
    title: {
        name: 'title (slot)',
    },
    subTitle: {
        name: 'sub-title (slot)',
    },
    back: {
        name: 'back (slot)',
    },
};
