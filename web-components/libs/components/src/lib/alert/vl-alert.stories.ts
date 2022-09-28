import { html } from 'lit-html';
import './vl-alert.component';

const ALERT_TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
};

const ALERT_ICON = {
    WARNING: 'warning',
    CHECK: 'check',
    INFO_CIRCLE: 'info-circle',
};

const ALERT_SIZE = {
    SMALL: 'small',
};

export default {
    title: 'Components/vl-alert',
    args: {
        title: 'Lorem ipsum',
        icon: ALERT_ICON.WARNING,
        size: '',
        type: '',
        closable: false,
        buttonSlotText: 'Button',
        titleSlotText: 'Title via slot',
        content:
            'Phasellus congue ipsum ut felis auctor, eget maximus justo dapibus. Nam sit amet pulvinar odio. Maecenas rhoncus quam eget neque porttitor, et faucibus nisl elementum.',
    },
    argTypes: {
        title: {
            name: 'data-vl-title',
            type: { summary: 'String' },
            description: 'Attribuut wordt gebruikt om de titel te bepalen.',
            table: {
                defaultValue: { summary: '' },
                category: 'Attributes',
            },
        },
        icon: {
            name: 'data-vl-icon',
            type: { summary: 'String' },
            description:
                'Attribuut wordt gebruikt om het icoon type te bepalen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.',
            control: {
                type: 'select',
                options: [ALERT_ICON.WARNING, ALERT_ICON.CHECK, ALERT_ICON.INFO_CIRCLE],
            },
            table: {
                defaultValue: { summary: '' },
                category: 'Attributes',
            },
        },
        size: {
            name: 'data-vl-size',
            type: {
                summary: `${ALERT_SIZE.SMALL}`,
            },
            description: 'Attribuut activeert een variant van de waarschuwing maar kleiner.',
            control: {
                type: 'select',
                options: [ALERT_SIZE.SMALL],
            },
            table: {
                defaultValue: { summary: `` },
                category: 'Attributes',
            },
        },
        type: {
            name: 'data-vl-type',
            type: {
                summary: `${ALERT_TYPE.INFO} | ${ALERT_TYPE.SUCCESS} | ${ALERT_TYPE.WARNING} | ${ALERT_TYPE.ERROR}`,
            },
            description: 'Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.',
            control: {
                type: 'select',
                options: [ALERT_TYPE.INFO, ALERT_TYPE.SUCCESS, ALERT_TYPE.WARNING, ALERT_TYPE.ERROR],
            },
            table: {
                defaultValue: { summary: '' },
                category: 'Attributes',
            },
        },
        closable: {
            name: 'data-vl-closable',
            type: { summary: 'Boolean' },
            description:
                'Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.',
            table: {
                defaultValue: { summary: 'false' },
                category: 'Attributes',
            },
        },
        titleSlotText: {
            name: 'title',
            description: '',
            table: {
                category: 'Slots',
            },
            control: {
                disable: true,
            },
        },
        buttonSlotText: {
            name: 'actions',
            description: '',
            table: {
                category: 'Slots',
            },
            control: {
                disable: true,
            },
        },
        content: {
            name: 'content (for demo purposes)',
            description: '',
        },
    },
};

interface TemplateInterface {
    closable: string;
    icon: string;
    title: string;
    size: string;
    type: string;
    buttonSlotText?: string;
    titleSlotText?: string;
    content: any;
}

const Template = ({ closable, icon, title, size, type, content }: TemplateInterface) => html`
    <vl-alert
        ?data-vl-closable=${closable}
        data-vl-icon=${icon}
        data-vl-title=${title}
        data-vl-size=${size}
        data-vl-type=${type}
        data-cy="alert"
    >
        <p>${content}</p>
    </vl-alert>
`;

export const Default = Template.bind({}) as any;
export const Error = Template.bind({}) as any;
export const Info = Template.bind({}) as any;
export const Success = Template.bind({}) as any;
export const Warning = Template.bind({}) as any;

Error.args = {
    title: 'Opgelet!',
    type: ALERT_TYPE.ERROR,
    icon: ALERT_ICON.WARNING,
    content: 'U heeft geen rechten om deze actie uit te voeren.',
};

Info.args = {
    title: 'Info',
    type: ALERT_TYPE.INFO,
    icon: ALERT_ICON.INFO_CIRCLE,
    content:
        'Als u vaststelt dat er foute informatie over u in het bestand van de Centrale voor Kredieten aan Particulieren staat, dan kunt u een rechtzetting aanvragen.',
};

Success.args = {
    title: 'Gelukt!',
    type: ALERT_TYPE.SUCCESS,
    icon: ALERT_ICON.CHECK,
    content: 'We hebben uw melding goed ontvangen en nemen deze spoedig in behandeling.',
};

Warning.args = {
    title: 'Technische storing',
    type: ALERT_TYPE.WARNING,
    icon: ALERT_ICON.WARNING,
    content: 'Door een technische storing is dit loket tijdelijk niet beschikbaar.',
};

export const WithButton = ({ closable, icon, title, size, type, buttonSlotText, content }: TemplateInterface) => html`
    <vl-alert
        ?data-vl-closable=${closable}
        data-vl-icon=${icon}
        data-vl-title=${title}
        data-vl-size=${size}
        data-vl-type=${type}
        data-cy="alert"
    >
        <p>${content}</p>
        <button slot="actions" is="vl-button">${buttonSlotText}</button>
    </vl-alert>
`;

WithButton.argTypes = {
    buttonSlotText: {
        control: {
            disable: false,
        },
    },
};

export const WithTitleSlot = ({ closable, icon, size, type, titleSlotText, content }: TemplateInterface) => html`
    <vl-alert ?data-vl-closable=${closable} data-vl-icon=${icon} data-vl-size=${size} data-vl-type=${type} data-cy="alert">
        <span slot="title">${titleSlotText}</span>
        <p>${content}</p>
    </vl-alert>
`;

WithTitleSlot.argTypes = {
    titleSlotText: {
        control: {
            disable: false,
        },
    },
};
