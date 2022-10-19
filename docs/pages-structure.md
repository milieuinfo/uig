# Pages Structure

The purpose is to have a monorepo that contains all development of the UIG-team.
Below the folder structure is specified, the arrows specify the artifacts produces by the specific subproject.

```
uig-pages/
├─ index.html
├─ build/
│  ├─ master/
│  │  ├─ storybook/
│  │  │  ├─ index.html
│  │  ├─ test-reports/
│  │  │  ├─ storybook-e2e
│  │  │  │  ├─ index.html
│  │  │  ├─ exhibit-e2e
│  │  │  │  ├─ index.html
│  │  ├─ artifacts/
│  │  │  ├─ @domg-lib/elements-x.y.x.tgz
│  ├─ beta/
│  ├─ feature-xxx/





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
