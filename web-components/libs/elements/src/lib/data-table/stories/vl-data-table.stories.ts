import { html } from 'lit-html';
import '../vl-data-table.element';
import { dataTableArgs, dataTableArgTypes } from './vl-data-table.stories-arg';

export default {
    title: 'Elements/data-table',
    args: dataTableArgs,
    argTypes: dataTableArgTypes,
};

export const dataTableDefault = ({ hover, matrix, grid, zebra, collapsedM, collapsedS, collapsedXS }) => html`
    <table
        is="vl-data-table"
        ?data-vl-hover=${hover}
        ?data-vl-matrix=${matrix}
        ?data-vl-grid=${grid}
        ?data-vl-zebra=${zebra}
        ?data-vl-collapsed-m=${collapsedM}
        ?data-vl-collapsed-s=${collapsedS}
        ?data-vl-collapsed-xs=${collapsedXS}
    >
        <caption>
            Data table
        </caption>
        <thead>
            <tr>
                <th>Entry Header 1</th>
                <th>Entry Header 2</th>
                <th>Entry Header 3</th>
                <th>Entry Header 4</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
                <td data-title="Entry Header 4">Entry line 4</td>
            </tr>
            <tr>
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2" colspan="2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
            </tr>
            <tr>
                <td data-title="Entry Header 1">Entry line 1</td>
                <td data-title="Entry Header 2">Entry line 2</td>
                <td data-title="Entry Header 3">Entry line 3</td>
                <td data-title="Entry Header 4">Entry line 4</td>
            </tr>
        </tbody>
    </table>
`;
dataTableDefault.storyName = 'vl-data-table - default';

export const dataTableJoinedRowTitles = ({ hover, matrix, grid, zebra, collapsedM, collapsedS, collapsedXS }) => html`
    <table
        is="vl-data-table"
        ?data-vl-hover=${hover}
        ?data-vl-matrix=${matrix}
        ?data-vl-grid=${grid}
        ?data-vl-zebra=${zebra}
        ?data-vl-collapsed-m=${collapsedM}
        ?data-vl-collapsed-s=${collapsedS}
        ?data-vl-collapsed-xs=${collapsedXS}
    >
        <caption>
            Data table Matrix - Joined row titles
        </caption>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="3" scope="rowgroup">Entry line 1</th>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <td>Entry line 1</td>
                <td colspan="2">Entry line 2</td>
            </tr>
            <tr>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <th rowspan="3" scope="rowgroup">Entry line 2</th>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
            <tr>
                <td>Entry line 1</td>
                <td colspan="2">Entry line 2</td>
            </tr>
            <tr>
                <td>Entry line 2</td>
                <td>Entry line 3</td>
                <td>Entry line 4</td>
            </tr>
        </tbody>
    </table>
`;
dataTableJoinedRowTitles.storyName = 'vl-data-table - joined row titles';
