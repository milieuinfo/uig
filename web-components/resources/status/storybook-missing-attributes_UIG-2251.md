# missing attributes storybook
> notes related to this task UIG-2251
Opmerkingen:
- als ik hier `productie` vernoem gaat dit om de `milieu-info/uig-webcomponents` repo
- als ik `ons`, `wij` of `beta` vernoem gaat dit om de `milieu-info/uig` repo
---
## numbers
- zou goed zijn categorie missing attributes toe te voegen
---
## suggestions stroomlijnen
> opmerkingen waar we zaken inconsistent doen
- intro van storybook zou duidelijk moeten stellen verschil tussen `elements`, `sections`, `components`
- category constants: make `Attributes` etc. a constant
- set `expanded: true` globally in `web-components/apps/storybook/.storybook/preview.js`
- in live versie kunnen afnemers in storybook zowel bij `canvas`/`docs` tab de properties aanpassen, bij ons kan dit enkel bij het `canvas` gedeelte; dit zou ook toevoegde waarden geven om copyable code aan te bieden die direct de configuratie heeft zoals in storybook ingesteld
    > Opmerking Kris: ideaal kan dat, maar dan hebben we dat automatic scrolling issue, dus daarom juist daar de editable properties verwijderd bij `docs`, maar we gaan extra tab maken bij `canvas` zodat afnemers toch code kunnen zien met aangepaste properties

### attributes alignment
- <span style="color:yellow; background: black;">**??**</span> some properties are mutually exclusive, so instead of booleans better to use attributes with all possible values; e.g.
    - this happens with values like:
        - (flex) `align`
        - (flex) `justify-content`
        - horizontal / vertical alignment
    - proposal: instead of `align-start: true/false`, `align-center: true/false`, `align-end: true/false` > one property align with values `start`, `center`, `end`
- manier om textgrootte in te stellen stroomlijnen:
    - slecht vb: gebruiken voor `annotation` een waarde `true`/`false` voor het veld `data-vl-small` om text er klein te laten uitzien
    - goed vb: in `alert` gebruiken we een `data-vl-size` attribuut die `small` als input neemt
- wat zijn verschillen tussen `properties` / `attributes` / `events` / possibly other

### attributes order
- in verschillende stories zijn de argumenten in een verschillende volgorde als die van in productie hoewel in code hetzelfde uitziet als productie
---

## suggestions - possible improvements
> mogelijke verbeteringen om meer value / kwaliteit te geven naar afnemers maar ook onze codebase te verbeteren
- mss idee om `''` als optie toe tevoegen wanneer de optie `''` default is, zodat user niet alle settings moet resetten om het terug daar op te zetten; momenteel bv bij `alert` is de enige optie voor `size` enkel `small`, terwijl `''` standaard is; om terug te zetten moet hij de form resetten
- default value stellen we vaak in als `''` maar eigenlijk achterliggend gebruiken we `false` of `small` als afnemer `''` instelt: dan is het ook logischer dat we die standaard waarde gebruiken zodat het duidelijk is voor de afnemer welke van de mogelijke opties we als standaard gaan instellen, bv;
    - op `autocomplete` kan attribute `data-vl-show-clear` enkel `false`/`true` bevatten maar default is `""`
---

## issues / defects

### hot reload issue
> hot reloading of properties does not work
- possibly related to: https://github.com/storybookjs/storybook/issues/12578
- hot reloading does work for:
    - alert
    - auto-complete
    - functional-header
    - ...
- does not work for:
    - breadcrumb
    - form
    - ....
> to be investigated
---

## info / work done per component - `Components`
> `Components` in new setup - html/css elements **with** JavaScript


### accordion
- <span style="color:royalblue">**FIXED**</span> verborgen attributes zichtbaar gemaakt (maar enkel veranderbaar wanneer relevant)

### alert
- attributes <span style="color:lightgreen">**OK**</span>
- see suggestions - improvements

### autocomplete
- attributes <span style="color:lightgreen">**OK**</span>

### breadcrumb
- <span style="color:royalblue">**FIXED**</span> fix: UIG-2251: voeg ontbrekende attribute href toe & stories toe voor breadcrumb & breadcrumb-item

### checkbox
- attributes same as legacy documentation <span style="color:lightgreen">**OK**</span>

### code-preview
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> it's in the folder `components` but maybe should be under `elements` as it doesn't have any notable JS functionality (it's just `<pre>` wrapper)

### contact-card
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**question**</span> it's in the folder `components` but maybe should be under `elements` as it doesn't have any notable JS functionality

### content-header
- attributes <span style="color:lightgreen">**OK**</span>
- descriptions missing for attributes (but also in prod)

### datepicker
- <span style="color:darkorange; background: black;">**TODO**</span> attributes & docs completely missing - but also live (as it's `legacy`)
- <span style="color:yellow; background: black;">**!!**</span> is using modified version from `vl-datepicker.js` in which in `legacy` (Tom Coemans) already many fixes were done

### description-data
- <span style="color:royalblue">**FIXED**</span> update vl-description-data attributes in stories for number & string, so it's same as live

### document
- attributes <span style="color:lightgreen">**OK**</span>

### functional-header
- attributes <span style="color:lightgreen">**OK**</span>

### http-error-message
- attributes <span style="color:lightgreen">**OK**</span> (only default has attributes)
- <span style="color:yellow; background: black;">**??**</span> should be under `elements`?
- <span style="color:yellow; background: black;">**TODO**</span> warning: `This story is not configured to handle controls.`

### info-tile
- attributes are the same <span style="color:lightgreen">**OK**</span>
- <span style="color:red">**BUG**</span> auto-open attribute doesn't work (but also not in production)

### info-block
- attributes are the same <span style="color:lightgreen">**OK**</span> 

### loader
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> why do we have `data-vl-single` - instead `data-vl-text` can simply be an empty text for same effect

### modal
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:royalblue">**FIXED**</span> fix typos for modal

### proza-message
- attributes same as prod / `legacy` <span style="color:lightgreen">**OK**</span>

### radio
- attributes same as legacy (missing in prod) <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**TODO**</span> `data-vl-checked` not working

### rich-data-table
- <span style="color:darkorange">**TODO**</span> all attributes missing found in legacy doc (same as prod)

### rich-data
- <span style="color:darkorange">**TODO**</span> all attributes missing found in legacy doc (same as prod)

### pager
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> doesn't make sense `align-center` & `align-right` are two separate attributes as they can never be working as the same time - there should be a single attribute for alignment

### pill
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> however styling is different; in production the active progress is marked in red; in beta it's in gray > see:
![progress-bar-compare.png](progress-bar-compare.png)

### share-buttons
- attributes are the same <span style="color:lightgreen">**OK**</span> 
- <span style="color:yellow; background: black;">**??**</span> should be under `elements`? - we're only updating the href & visual elements; no notable JS to speak of

### side-sheet
- attributes are the same <span style="color:lightgreen">**OK**</span> 
- <span style="color:yellow; background: black;">**TODO**</span> `toggle-text` is not working (but also not in live) - issue is `data-vl-visually-hidden` is added toggle text container; most likely because additional CSS will have to be modified in order to show the toggle text appropiately - issue dates from multi-repo as code was checked in like that in live version also

### spotlight
- attributes <span style="color:lightgreen">**OK**</span> 
- <span style="color:royalblue">**FIXED**</span> default values for img-src & img-alt should be `""` instead of `false`
- <span style="color:yellow; background: black;">**??**</span> in live version `xs` is bigger than `s`; it's correct in beta, however if consumers are still using `s` where they want `xs` size & vice versa this can cause regression
- <span style="color:yellow; background: black;">**TODO**</span> layout is slightly different for story `vl-spotlight - with subtitle`, live there's indentation but in beta there's no indentation; see:
![spotlight-with-subtitle-compare.png](spotlight-with-subtitle-compare.png)

### template
- attributes are the same <span style="color:lightgreen">**OK**</span> 
- <span style="color:yellow; background: black;">**??**</span> should be under `sections`? - seems more like a structural element (unless I misunderstood `sections`)
- <span style="color:yellow; background: black;">**??**</span> `data-vl-v-stretch` it's not very clear what it does without being their actual content (same in live)

### toggle-button
- same attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:royalblue">**FIXED**</span>  `data-vl-icon` data type wrong + need to fill in `"pencil"` instead of just `pencil` / asked to fill in object instead of string

### tooltip
- attributes <span style="color:lightgreen">**OK**</span>

### typography
- attributes <span style="color:lightgreen">**OK**</span>

### wizard
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**TODO**</span> same attributes `vl-click-step` & `activeStep` attributes can not be changed (in both live & beta)


---

## info / work done per component - `Elements`
> `Elements` in new setup - elements with no JavaScript, only html/css

### annotation
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:royalblue">**FIXED**</span> there was a warning `This story is not configured to handle controls`
- <span style="color:yellow; background: black;">**TODO**</span> it's in the folder `components` but should be under `elements` according to story hierarchy that is set (unless that's wrong)

### action-group
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> default align should be left

### body
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**TODO**</span> `<body is="vl-body">` is not shown in code preview (`show code`) (but it shown in production storybook); links to possibly solution:
    - [here on storybook documentation](https://storybook.js.org/docs/react/addons/writing-presets#previewmanager-templates)
    - and [here on github](https://github.com/storybookjs/storybook/issues/10403) - looks like we need storybook 7.x to do the changes properly

### button
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**TODO**</span> not consistent / logical - should follow `toggle-button`
    - consumer is allowed to insert own icon using custom tag `<span is="vl-icon" class="vl-vi-location></span>`
    - to be (like `toggle-button`) consumer selects icon & it simply is shown instead of having to insert custom tag
    - also doesn't make sense consumer needs to set after or before but then needs to insert tag himself

### data-table
- attributes <span style="color:lightgreen">**OK**</span>

### doormat
- attributes <span style="color:lightgreen">**OK**</span>
- two stories missing but they don't make sense anyway

### form-grid
- attributes <span style="color:lightgreen">**OK**</span>
- attributes don't make sense, see [here](#attributes-alignment)

### form
- same attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:royalblue;">**FIXED**</span> default values for validation were different, now aligned
- <span style="color:yellow; background: black;">**??**</span> changing properties in storybook doesn't update automatically, see [here](#hot-reload-issue)

### grid
- same attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> in `vl-grid region default/overlap` there's an attribute (`vl-bordered`) indicated with "deprecated?" - maybe it should be either deleted or fixed
- attributes are in different order then prod but correct in code, see [here](#attributes-order)

### icon
- same attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> changing properties in storybook doesn't always update automatically, see [here](#hot-reload-issue) - more specifically with `icon default` - resetting doesn't always do what it needs to do

### image
- attributes <span style="color:lightgreen">**OK**</span> (there's none)

### input-addon
- attributes <span style="color:lightgreen">**OK**</span> (there's none)

### input-field
- attributes <span style="color:lightgreen">**OK**</span>
- beta has much more stories & attributes then production, but the ones that overlap are common are the same
- <span style="color:yellow; background: black;">**??**</span> some attributes are mutually exclusive; in that case it could be a single one (`error`/`success`) see [here](#attributes-alignment) for global task

### input-group
- attributes <span style="color:lightgreen">**OK**</span> (there's none)

### info-text
- attributes <span style="color:lightgreen">**OK**</span> (nothing in prod but streamlined with before)

### introduction
- attributes <span style="color:lightgreen">**OK**</span>

### link-list
- attributes <span style="color:lightgreen">**OK**</span>
- story missing for `link-list-item` but it makes sense as in production it's exactly same story as for `link-list``

### link
- attributes <span style="color:lightgreen">**OK**</span>
- attributes are in different order then prod but correct in code, see [here](#attributes-order)
- <span style="color:yellow; background: black;">**!!**</span> story for `link - with icon`/`button-link - with icon` is missing in prod but present here

### multiselect
- <span style="color:darkorange; background: black;">**TODO**</span> add attributes found in legacy documentation

### properties
- same attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:darkorange">**TODO**</span> `data-vl-full-width` not working (but working in live)
- stories for properties list, term & value are missing but it doesn't make sense to have them

### search-filter
- attributes <span style="color:lightgreen">**OK**</span>

### search-results
- attributes <span style="color:lightgreen">**OK**</span> (there's none)

### side-navigation
- attributes <span style="color:lightgreen">**OK**</span>
- stories missing for sub-elements but it makes sense (as consumer can see example how to implement in main story)

### steps
- <span style="color:darkorange">**TODO**</span> attribute missing from legacy - `data-vl-timeline`

### tabs
- <span style="color:darkorange; background: black;">**TODO**</span> add attributes found in legacy documentation

### text
- attributes <span style="color:lightgreen">**OK**</span>

### text-area
- <span style="color:darkorange">**TODO**</span> attributes missing from legacy
- [legacy docs](https://webcomponenten.omgeving.vlaanderen.be/doc/VlTextarea.html)

### toaster
- <span style="color:darkorange">**TODO**</span> attributes missing from legacy
- [legacy docs](https://webcomponenten.omgeving.vlaanderen.be/doc/VlToaster.html)

### toaster
- <span style="color:darkorange">**TODO**</span> attributes missing from legacy
- [legacy docs](https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html)

### title
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> `data-vl-sans` attribute doesn't seem to work (but neither in production)

### video-player
- attributes <span style="color:lightgreen">**OK**</span>

---

## info / work done per component - `Sections`
> `Sections` in new setup - components related to cookies / compliance

All components in this category <span style="color:lightgreen">**checked**</span>

### accessibility
- attributes same <span style="color:lightgreen">**OK**</span> but **NOT WORKING**
- however, in new setup we changed value list to uppercase, while it was lower case so far - this might not be backwards compatible when consumers expect
    - beta:
        ```TypeScript
        export const COMPLIANCE_STATUS = {
            FULLY_COMPLIANT: 'FULLY_COMPLIANT',
            PARTIALLY_COMPLIANT: 'PARTIALLY_COMPLIANT',
            NOT_COMPLIANT: 'NOT_COMPLIANT',
        } as const;
        ```
    - live:
        ```JavaScript
        export const COMPLIANCE_STATUS = {
            FULLY_COMPLIANT: 'fully-compliant',
            PARTIALLY_COMPLIANT: 'partially-compliant',
            NOT_COMPLIANT: 'not-compliant',
        };
        ```
- apart from that also did a fix: fix: UIG-2251: ensure Accessibility component is again working as before, evaluation & compliance status were not properly passed through generated child templates

### cookie-consent
- <span style="color:darkorange">**TODO**</span> all attributes missing

### cookie-statement
- attributes <span style="color:lightgreen">**OK**</span>


### footer
- attributes <span style="color:lightgreen">**OK**</span>

### header
- attributes <span style="color:lightgreen">**OK**</span>

### privacy
- attributes <span style="color:lightgreen">**OK**</span>

---

## info / work done per component - `Map`
> `Map` in new setup - components / variations related OpenLayers implementation
>
> went over all components in this category

### map
>- vl-map-default
>- allow fullscreen
>- disable mousewheel zoom
>- playground

- attributes same <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> hierarchy different - shall we keep it like this, consult with consumers?

### action > draw-action
> action > draw-action
- <span style="color:yellow; background: black;">**??**</span> hierarchy more flat, shall we keep it like this, consult with consumers? suggest to possibly add second level; line, point, polygon & measure

#### draw-line-action
> draw-action > map-draw-line-action
- <span style="color:darkorange">**TODO**</span> `data-vl-snapping` is a property & shown in storybook, but not documented in attributes(`canvas`) nor `docs`
    ```HTML
     <vl-map-draw-line-action data-vl-snapping="">
    ```

#### draw-point-action
> draw-action > map-draw-point-action
- <span style="color:darkorange">**TODO**</span> `data-vl-snapping` & `data-vl-snapping-pixel-tolerance` are properties & shown in storybook as examples, but not documented in attributes(`canvas`) nor `docs`
    ```HTML
     <vl-map-draw-point-action data-vl-snapping="" data-vl-snapping-pixel-tolerance="1000">
    ```

#### draw-polygon-action
> draw-action > map-draw-polygon-action
- <span style="color:darkorange">**TODO**</span> `data-vl-snapping` is a property & shown in storybook, but not documented in attributes(`canvas`) nor `docs`
    ```HTML
    <vl-map-draw-polygon-action data-vl-snapping="">
    ```

#### draw-measure-action
> draw-action > map-draw-measure-action
- <span style="color:darkorange">**TODO**</span> `data-vl-snapping` & `data-vl-snapping-pixel-tolerance` are properties & shown in storybook as examples, but not documented in attributes(`canvas`) nor `docs`
    ```HTML
     <vl-map-measure-action data-vl-snapping="" data-vl-snapping-pixel-tolerance="1000">
    ```
### controls > vl-map-measure-control
> duplicate of `-measure-action - with control`
- attributes <span style="color:lightgreen">**OK**</span>
- <span style="color:yellow; background: black;">**??**</span> this looks like  duplicate of existing story / component -> `map-measure-action - with control` (however this duplication was also done in old storybook to showcase controls)

...