import { TYPES } from '@domg-wc/common-utilities';

export const breadcrumbItemArgs = {
    href: '#',
}

export const breadcrumbItemArgTypes = {
    href: {
        name: 'data-vl-href',
        description: 'Changes the url to which the browser will navigate when clicking the breadcrumb item.',
        type: { summary: TYPES.STRING },
    },
}
