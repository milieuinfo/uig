export const functionalHeaderArgs = {
    title: 'School- en studietoelagen',
    subTitle: 'Voor lager, middelbaar en hoger onderwijs',
    link: '#',
    backLink: '#',
    back: 'Terug',
};

export const functionalHeaderArgTypes = {
    title: {
        name: 'data-vl-title',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de tekst van de titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    subTitle: {
        name: 'data-vl-sub-title',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de tekst van de sub titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    link: {
        name: 'data-vl-link',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de link van de titel te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    backLink: {
        name: 'data-vl-back-link',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de terug link te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
    back: {
        name: 'data-vl-back',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de terug link tekst te bepalen.',
        table: {
            defaultValue: { summary: '' },
        },
    },
};
