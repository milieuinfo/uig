# Nx Project Setup

## Root Setup

- npx create-nx-workspace@latest
    * [applications | web-components] / apps [an empty workspace with no plugins with a layout that works best for building apps]
    * no distributed caching

## Applications

- npm install -D @nrwl/web@14.7.8 (not explicitly specifying the versions didn't work)
- npx nx g @nrwl/web:application alliance


# Monorepo

## Folder Structure

```
uig/
├─ applications [nx]
│  ├─ apps/
│  │   -> @domg-uig/alliance
├─ cdn-assets/
│  │   -> @domg-ext/govflanders-font
│  │   -> @domg-ext/tinymce-theme
├─ web-components/ [nx]
│  ├─ apps/
│  │   -> @domg-uig/exhibit
│  │   -> @domg-uig/storybook
│  ├─ libs/
│  │  ├─ components/
│  │  │  -> @domg-lib/components (+ header-footer /  http-error-message) [ts]
│  │  ├─ elements/
│  │  │   -> @domg-lib/elements [ts]
│  │  ├─ fat/
│  │  │   -> @domg-lib/fat-header-footer [ts] (code zit onder components)
│  │  ├─ map/
│  │  │   -> @domg-lib/map [js]
│  │  ├─ proza/
│  │  │   -> @domg-lib/proza-message [js]
│  │  ├─ support/
│  │  │   -> @domg-lib/react-support [ts]
│  │  │   -> @domg-lib/test-support [js]
```


# Usefull commands

## Git

### update git user name

https://mhagemann.medium.com/how-to-change-the-user-for-all-your-git-commits-ffefbacf2652

```
git filter-branch --env-filter '
OLD_EMAIL="kris@bladerbeeld.be"
NEW_NAME="Kris Speltincx"
NEW_EMAIL="kris.speltincx@vlaanderen.be"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$NEW_NAME"
export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$NEW_NAME"
export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```
