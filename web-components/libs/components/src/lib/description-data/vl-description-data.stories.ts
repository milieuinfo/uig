import { html } from 'lit-html';
import './vl-description-data.component';
import './components/vl-description-data-item.component';

export default {
  title: 'Components/vl-description-data',
  args: {
    size: undefined,
    maxSize: undefined,
    mediumSize: undefined,
    mediumMaxSize: undefined,
    smallSize: undefined,
    smallMaxSize: undefined,
    extraSmallSize: undefined,
    extraSmallMaxSize: undefined,
  },
  argTypes: {
    size: {
      name: 'data-vl-items-size',
      type: { name: 'Number', required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: '12 / number of data items' },
      },
    },
    maxSize: {
      name: 'data-vl-items-max-size',
      type: { name: 'Number', required: false },
      description:
        'The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    mediumSize: {
      name: 'data-vl-items-medium-size',
      type: { name: 'Number', required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    mediumMaxSize: {
      name: 'data-vl-items-medium-max-size',
      type: { name: 'Number', required: false },
      description:
        'The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    smallSize: {
      name: 'data-vl-items-small-size',
      type: { name: 'Number', required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    smallMaxSize: {
      name: 'data-vl-items-small-max-size',
      type: { name: 'Number', required: false },
      description:
        'The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    extraSmallSize: {
      name: 'data-vl-items-extra-small-size',
      type: { name: 'Number', required: false },
      description:
        'The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
    extraSmallMaxSize: {
      name: 'data-vl-items-extra-small-max-size',
      type: { name: 'Number', required: false },
      description: 'The maximum (denominator) against which to evaluate for very small screens, for each data item.',
      table: {
        type: { summary: 'Number' },
        category: 'Attributes',
        defaultValue: { summary: undefined },
      },
    },
  },
};

interface DefaultInterface {
  size: string,
  maxSize: string,
  mediumSize: string,
  mediumMaxSize: string,
  smallSize: string,
  smallMaxSize: string,
  extraSmallSize: string,
  extraSmallMaxSize: string,

}

export const Default = ({
  size,
  maxSize,
  mediumSize,
  mediumMaxSize,
  smallSize,
  smallMaxSize,
  extraSmallSize,
  extraSmallMaxSize,
}: DefaultInterface) =>
  html`
    <vl-description-data
      data-vl-items-size=${size}
      data-vl-items-max-size=${maxSize}
      data-vl-items-medium-size=${mediumSize}
      data-vl-items-medium-max-size=${mediumMaxSize}
      data-vl-items-small-size=${smallSize}
      data-vl-items-small-max-size=${smallMaxSize}
      data-vl-items-extra-small-size=${extraSmallSize}
      data-vl-items-extra-small-max-size=${extraSmallMaxSize}
      data-cy="description-data"
    >
      <vl-description-data-item data-vl-label="Uitgever" data-vl-value="Kind en Gezin" data-cy="description-data-item-1"></vl-description-data-item>
      <vl-description-data-item
        data-vl-label="Publicatiedatum"
        data-vl-value="Augustus 2018"
        data-cy="description-data-item-2"
      ></vl-description-data-item>
      <vl-description-data-item data-vl-label="Publicatietype" data-vl-value="Brochure" data-cy="description-data-item-3" ></vl-description-data-item>
      <vl-description-data-item
        data-vl-label="Categorie"
        data-vl-value="Kinderen en jongeren"
        data-cy="description-data-item-4"
      ></vl-description-data-item>
    </vl-description-data>
  `;
