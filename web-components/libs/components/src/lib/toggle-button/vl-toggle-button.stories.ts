import { html } from 'lit-html';
import './vl-toggle-button.component';
import { action } from '@storybook/addon-actions';

// TODO: Remove from here and reuse from "vl-button.stories-helper.ts" instead.
// import { sharedButtonArgs, sharedButtonArgTypes } from '@domg-lib/elements';
const sharedButtonArgs = {
    loading: false,
    disabled: false,
    error: false,
    block: false,
    large: false,
    wide: false,
    narrow: false,
};

const sharedButtonArgTypes = {
    disabled: {
        type: { summary: 'Boolean' },
        description: 'Used to indicate to the user that the functionality is not active.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    error: {
        name: 'data-vl-error',
        type: { summary: 'Boolean' },
        description: 'Used to emphasize the importance or consequences of an action.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    block: {
        name: 'data-vl-block',
        type: { summary: 'Boolean' },
        description:
            'Used to ensure that the button is shown as a block element and will therefore take the width of the parent.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    large: {
        name: 'data-vl-large',
        type: { summary: 'Boolean' },
        description: "Used to grab the user's attention by increasing the font size.",
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    wide: {
        name: 'data-vl-wide',
        type: { summary: 'Boolean' },
        description: 'Makes the button appear wider on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    narrow: {
        name: 'data-vl-narrow',
        type: { summary: 'Boolean' },
        description: 'Causes the button to appear narrower on the screen.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    loading: {
        name: 'data-vl-loading',
        type: { summary: 'Boolean' },
        description: 'Used to indicate to the user that their action is currently being processed.',
        table: {
            defaultValue: { summary: 'false' },
            category: 'Attributes',
        },
    },
    content: {
        name: 'content (for demo purposes)',
        type: { summary: 'String' },
    },
};

const ICON_PLACEMENT = {
    BEFORE: 'before',
    AFTER: 'after',
};

const getLastElement = (element: any) => {
    const [lastItem] = [...Array(document.querySelectorAll(element))].slice(-1);
    return lastItem;
};

export default {
    title: 'Components/vl-toggle-button',
    args: {
        ...sharedButtonArgs,
        icon: undefined,
        iconPlacement: undefined,
        content: 'Toggle button',
        textHidden: false,
        disabled: false,
        click: action('click'),
        change: action('change'),
    },
    argTypes: {
        active: {
            name: 'active',
            description: 'Controls the active state of the toggle button.',
            table: {
                type: {
                    summary: 'Boolean',
                },
                category: 'Properties',
            },
            control: { disabled: true },
        },
        icon: {
            name: 'data-vl-icon',
            type: { name: 'String', required: false },
            description: 'Sets the icon of the toggle button.',
            table: {
                type: { summary: 'String' },
                category: 'Attributes',
            },
        },
        iconPlacement: {
            name: 'data-vl-icon-placement',
            description: 'Determines where the icon should be rendered before or after the text.',
            table: {
                type: { summary: `${ICON_PLACEMENT.BEFORE} | ${ICON_PLACEMENT.AFTER}` },
                category: 'Attributes',
                defaultValue: { summary: ICON_PLACEMENT.AFTER },
            },
            control: {
                type: 'select',
                options: [ICON_PLACEMENT.BEFORE, ICON_PLACEMENT.AFTER],
            },
        },
        textHidden: {
            name: 'data-vl-text-hidden',
            description: 'Determines whether the toggle button text is shown.',
            table: {
                type: { summary: 'Boolean' },
                category: 'Attributes',
                defaultValue: { summary: 'false' },
            },
        },
        change: {
            name: 'change',
            description: 'Custom event that is triggered when the active state of the toggle button changes.',
            table: { category: 'Events' },
        },
        click: {
            name: 'click',
            description: 'Event fired on click of the toggle button.',
            table: { category: 'Events' },
        },
        ...sharedButtonArgTypes,
        error: {
            ...sharedButtonArgTypes.error,
            description:
                'Used to emphasize the importance or consequences of an action when the toggle button is in an active state.',
        },
    },
};

interface DefaultInterface {
    active: string;
    icon: string;
    iconPlacement: string;
    textHidden: string;
    error: string;
    block: string;
    large: string;
    wide: string;
    narrow: string;
    loading: string;
    disabled: string;
    change: any;
    click: any;
    content: any;
}

export const Default = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: DefaultInterface) =>
    html`<vl-toggle-button
        data-vl-icon=${icon}
        data-vl-icon-placement=${iconPlacement}
        ?data-vl-text-hidden=${textHidden}
        ?data-vl-error=${error}
        ?data-vl-block=${block}
        ?data-vl-large=${large}
        ?data-vl-wide=${wide}
        ?data-vl-narrow=${narrow}
        ?data-vl-loading=${loading}
        ?disabled=${disabled}
        @change=${(event: any) => change(event.detail)}
        @click=${(event: any) => {
            click(event);
        }}
        data-cy="toggle-button"
        >${content}
    </vl-toggle-button>`;

export const WithIcon = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: DefaultInterface) =>
    html`<vl-toggle-button
        data-vl-icon=${icon}
        data-vl-icon-placement=${iconPlacement}
        ?data-vl-text-hidden=${textHidden}
        ?data-vl-error=${error}
        ?data-vl-block=${block}
        ?data-vl-large=${large}
        ?data-vl-wide=${wide}
        ?data-vl-narrow=${narrow}
        ?data-vl-loading=${loading}
        ?disabled=${disabled}
        @change=${(event: any) => change(event.detail)}
        @click=${(event: any) => {
            click(event);
        }}
        data-cy="toggle-button-with-icon"
        >${content}
    </vl-toggle-button>`;

WithIcon.args = { icon: 'pencil', iconPlacement: ICON_PLACEMENT.AFTER };

// Get last toggle button, because storybook can render multiple stories
const getToggleButton: any = () => getLastElement('vl-toggle-button');

export const Controlled = ({
    active,
    icon,
    iconPlacement,
    textHidden,
    error,
    block,
    large,
    wide,
    narrow,
    loading,
    disabled,
    change,
    click,
    content,
}: DefaultInterface) => html`<vl-toggle-button
    .active=${active}
    data-vl-icon=${icon}
    data-vl-icon-placement=${iconPlacement}
    ?data-vl-text-hidden=${textHidden}
    ?data-vl-error=${error}
    ?data-vl-block=${block}
    ?data-vl-large=${large}
    ?data-vl-wide=${wide}
    ?data-vl-narrow=${narrow}
    ?data-vl-loading=${loading}
    ?disabled=${disabled}
    @change=${(event: any) => change(event.detail)}
    @click=${(event: any) => {
        click(event);
        const toggleButton = getToggleButton();
        toggleButton.active = !toggleButton.active;
    }}
    data-cy="toggle-button-controlled"
    >${content}
</vl-toggle-button>`;

Controlled.args = {
    active: false,
};

Controlled.argTypes = { active: { control: { disabled: false } } };
