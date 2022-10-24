# Project Structuur

## Beschrijving

Deze (https://github.com/milieuinfo/uig) monorepo bevat alle ontwikkeling van het UIG-team, het frontend ontwikkel
team van Departement Omgeving. Hieronder staat de projectstructuur van deze repo beschreven. Achter de pijltjes
staan de artifacts gespecifieerd die uit de sub-projecten komen.

## Opzet

Op root niveau zijn er 3 hoofdfolders: applications, cdn-assets en web-components. Elk niveau bevat zijn eigen
documentatie onder de docs folder, op root niveau staat algemene documentatie (waaronder deze).

### applications

Dit zijn de toepassingen ontwikkeld door het UIG-team. Momenteel is er enkel de 'Alliance' toepassing, deze toepassing
verduidelijkt hoe externe toepassingen de gepubliceerde packages kunnen gebruiken.

Deze folder is, net zoals de web-components folder, zelf de root van een Nx-monorepo.

### cdn-assets

De artifacts hebben externe afhankelijkheden. Voorbeelden hiervan zijn de fonts van Digitaal Vlaanderen en TinyMCE.
Die externe assets worden onder dit project opgenomen en gepubliceerd op de CDN van dOMG. Code in packages zal dus
gebruik maken van versies gepubliceerd op de CDN.

Deze folder bevat sub-folders die telkens een package.json bevat met de publicatie gegevens.

### web-components

Het UIG-team onderhoudt een componenten bibliotheek die hier te vinden is.

Deze folder is, net zoals de applications folder, zelf de root van een Nx-monorepo.

## Structuur

```
uig/
├─ applications/ [nx]
│  ├─ apps/
│  │   -> @domg-uig/alliance
├─ cdn-assets/
│  │   -> @domg-ext/govflanders-font
│  │   -> @domg-ext/tinymce-theme
├─ docs/
│   -> markdown documentation 
├─ web-components/ [nx]
│  ├─ apps/
│  │   -> @domg-uig/exhibit
│  │   -> @domg-uig/storybook
│  ├─ libs/
│  │  ├─ common/
│  │  │  ├─ utilities/
│  │  │  │   -> @domg-lib/common-utilities [ts]
│  │  ├─ components/
│  │  │  -> @domg-lib/components (http-error-message / proza-message) [ts]
│  │  ├─ elements/
│  │  │   -> @domg-lib/elements [ts]
│  │  ├─ header-footer (+accessibility / privacy / cookie ...)
│  │  │   -> @domg-lib/header-footer [ts]
│  │  │   -> @domg-lib/fat-header-footer [ts]
│  │  ├─ map/
│  │  │   -> @domg-lib/map [js]
│  │  ├─ support/
│  │  │   -> @domg-lib/react-support [ts]
│  │  │   -> @domg-lib/test-support [js]
│  ├─ docs/
│  │  ├─ images/
│  │   -> .md + .numbers files
```
