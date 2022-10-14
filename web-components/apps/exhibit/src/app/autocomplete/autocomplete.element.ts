const complexItems = [
    { title: 'Gent', subtitle: 'Gemeente', value: '1' },
    { title: 'Gentbos, Merelbeke', subtitle: 'Adres', value: '2' },
    { title: 'Gentbruggestraat, Gent', subtitle: 'Adres', value: '3' },
    { title: 'Gentele, Brugge', subtitle: 'Adres', value: '5' },
    { title: 'Automotive Contractors Gent ', subtitle: 'Project', value: '6' },
    { title: 'Buurtshuis Watersportbaan Gent', subtitle: 'Project', value: '7' },
];

export class AutocompleteElement extends HTMLElement {
    public static observedAttributes = [];

    constructor() {
        super();
        const autocomplete = document.createElement('vl-autocomplete');
        autocomplete.setAttribute('data-vl-min-chars', '1');
        autocomplete.setAttribute('placeholder', 'Hint: typ Gent');
        autocomplete['items'] = complexItems;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(autocomplete);
    }

    // connectedCallback() {
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
}

customElements.define('exhibit-autocomplete', AutocompleteElement);
