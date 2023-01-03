export const accordionArgs = {
    toggleText: 'Lees meer over de onderwijsdoelstelling',
    content: `Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.`,
    openToggleText: 'Open de onderwijsdoelstelling',
    closedToggleText: 'Sluit de onderwijsdoelstelling',
};

export const accordionArgTypes = {
    toggleText: {
        name: 'data-vl-toggle-text',
        description:
            'Attribuut wordt gebruikt als tekst waarop de gebruiker kan klikken om de accordion te openen en te sluiten.',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    openToggleText: {
        name: 'data-vl-open-toggle-text',
        description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion geopend heeft.',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: { summary: '' },
            category: 'Attributes',        },
    },
    closedToggleText: {
        name: 'data-vl-close-toggle-text',
        description: 'Attribuut wordt gebruikt als tekst wanneer de gebruiker de accordion gesloten heeft.',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
    content: {
        name: 'content (for demo purposes)',
        table: {
            type: {
                summary: 'string',
            },
            defaultValue: { summary: '' },
            category: 'Attributes',
        },
    },
};
