import { CATEGORIES, TYPES } from '@uig/common/utilities';

export const formArgs = {
    validate: true,
};

export const formArgTypes = {
    validate: {
        name: 'data-vl-validate',
        type: { summary: TYPES.BOOLEAN },
        description: 'Attribute is used to indicate that the input fields validation should be enabled.',
        table: {
            category: CATEGORIES.ATTRIBUTES,
        },
    },
};
