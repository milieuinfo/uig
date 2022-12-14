import { ComplianceStatus, EvaluationStatus } from '../model/status.model';
import { CATEGORIES } from '@domg-lib/common-utilities';

export const accessibilityArgs = {
    application: 'deze applicatie',
    version: '1.0.0',
    date: '20 juli 2021',
    dateModified: '20 juli 2021',
    compliance: ComplianceStatus.PARTIALLY_COMPLIANT,
    limitations: {
        withTiming: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        withoutTiming: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        outsideApplicableLaw: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
    },
    evaluation: EvaluationStatus.EXPERT_EVALUATED,
};

export const accessibilityArgTypes = {
    application: {
        name: 'data-vl-application',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om te duiden over welke applicatie de verklaring gaat.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"deze applicatie"' },
        },
    },
    version: {
        name: 'data-vl-version',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de huidige versie van de verklaring aan te geven.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"1.0.0"' },
        },
    },
    date: {
        name: 'data-vl-date',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de aanmaakdatum van de verklaring te beschrijven.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"20 juli 2021"' },
        },
    },
    dateModified: {
        name: 'data-vl-date-modified',
        type: { summary: 'string' },
        description: 'Attribuut wordt gebruikt om de datum van de laatste wijziging van de verklaring te beschrijven.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: '"20 juli 2021"' },
        },
    },
    compliance: {
        name: 'data-vl-compliance',
        type: {
            summary: `${ComplianceStatus.FULLY_COMPLIANT} |
      ${ComplianceStatus.PARTIALLY_COMPLIANT} |
      ${ComplianceStatus.NOT_COMPLIANT}`,
        },
        description: 'Attribuut om de nalevingsstatus aan te geven.',
        control: {
            type: 'select',
            options: [
                ComplianceStatus.FULLY_COMPLIANT,
                ComplianceStatus.PARTIALLY_COMPLIANT,
                ComplianceStatus.NOT_COMPLIANT,
            ],
        },
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `"${ComplianceStatus.PARTIALLY_COMPLIANT}"` },
        },
    },
    limitations: {
        name: 'limitations',
        type: { summary: 'object' },
        description:
            "Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",
        table: { category: CATEGORIES.PROPERTIES },
    },
    evaluation: {
        name: 'data-vl-evaluation',
        type: {
            summary: `${EvaluationStatus.EXPERT_EVALUATED} |
      ${EvaluationStatus.SELF_EVALUATED} |
      ${EvaluationStatus.NOT_EVALUATED}`,
        },
        description: 'Attribuut om de evaluatiestatus van de verklaring aan te geven.',
        control: {
            type: 'select',
            options: [
                EvaluationStatus.EXPERT_EVALUATED,
                EvaluationStatus.SELF_EVALUATED,
                EvaluationStatus.NOT_EVALUATED,
            ],
        },
        table: {
            category: CATEGORIES.ATTRIBUTES,
            defaultValue: { summary: `"${EvaluationStatus.NOT_EVALUATED}"` },
        },
    },
};
