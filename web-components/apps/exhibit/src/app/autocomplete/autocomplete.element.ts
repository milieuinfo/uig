import { css, html, LitElement, unsafeCSS } from 'lit';
// import styles from './style/vl-autocomplete.scss';
import styles from '../../../../../libs/elements/src/lib/_vl-elements.scss';

export class AutocompleteElement extends LitElement {
    static get styles() {
        return [
            css`
                ${unsafeCSS(styles)}
            `,
        ];
    }
    // public static observedAttributes = [];

    // connectedCallback() {
    //     const title = 'Autocomplete';
    //     // const complexItems = [
    //     //     { title: 'Gent', subtitle: 'Gemeente', value: '1' },
    //     //     { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
    //     //     { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
    //     //     { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
    //     //     { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
    //     //     { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
    //     // ];
    //     const complexItems = [{ title: 'Gent', subtitle: 'Gemeente', value: '1' }];
    //     const complexItemsParsed = JSON.stringify(complexItems);
    //     console.log('AutocompleteElement', JSON.parse(complexItemsParsed));
    //     // const html2 = html` <vl-autocomplete
    //     //     data-vl-min-chars="1"
    //     //     items=${complexItemsParsed}
    //     //     placeholder="Hint: typ Gent"
    //     // >
    //     // </vl-autocomplete>`;
    //     this.innerHTML = `
    //         <div class="wrapper">
    //             <div class="container">
    //                 <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
    //                 <br>
    //                 <vl-autocomplete
    //                     data-vl-min-chars="1"
    //                     items=${complexItemsParsed}
    //                     placeholder="Hint: typ Gent">
    //                 </vl-autocomplete>
    //             </div>
    //         </div>
    //   `;
    // }

    render() {
        const title = 'Autocomplete';
        const complexItems = [
            { title: 'Gent', subtitle: 'Gemeente', value: '1' },
            { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
            { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
            { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
            { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
            { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
        ];
        // const complexItemsParsed = JSON.stringify(complexItems);
        return html`
            <div class="wrapper">
                <div class="container">
                    <h2 is="vl-h2" data-vl-alt data-vl-no-space-bottom>${title}</h2>
                    <br />
                    <vl-autocomplete data-vl-min-chars="1" .items=${complexItems} placeholder="Hint: typ Gent">
                    </vl-autocomplete>
                </div>
            </div>
        `;
    }
}

customElements.define('exhibit-autocomplete', AutocompleteElement);
