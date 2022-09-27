# Folder Structure

The purpose is to have a monorepo that contains all development of the UIG-team.
Below the folder structure is specified, the arrows specify the artifacts produces by the specific subproject.

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
│  │  ├─ components/
│  │  │  -> @domg-lib/components (+ header-footer /  http-error-message / proza-message) [ts]
│  │  ├─ elements/
│  │  │   -> @domg-lib/elements [ts]
│  │  ├─ fat/
│  │  │   -> @domg-lib/fat-header-footer [ts] (code zit onder components)
│  │  ├─ map/
│  │  │   -> @domg-lib/map [js]
│  │  ├─ support/
│  │  │   -> @domg-lib/react-support [ts]
│  │  │   -> @domg-lib/test-support [js]
│  ├─ resources/
│  │  ├─ documentation/
│  │  │   -> .md + .numbers files
│  │  ├─ images/
```
