# Nx Project Setup

-   npx create-nx-workspace@latest
    -> nx / apps [an empty workspace with no plugins with a layout that works best for building apps]
    / No Nx Cloud
-   npm install -D @nrwl/web
-   npx nx g @nrwl/web:lib elements --buildable --publishable --importPath=@uig/elements
-   npx nx g @nrwl/web:lib components --buildable --publishable --importPath=@uig/components
-   npx nx g @nrwl/web:lib common/utilities --buildable
-   npx nx g @nrwl/web:application exhibit
-   npx nx g @nrwl/web:lib testers --buildable --publishable --importPath=@uig/testers

## Storybook

Nx ondersteund Storybook maar niet voor Web Componenten, enkel voor Angular of React.
De volgende stappen zijn gedaan om Storybook te installeren:

-   npx nx g @nrwl/web:application storybook\
    -> dit maakt een default web app 'storybook' en 'storybook-e2e'
-   npx storybook init\
    -> in de apps/storybook folder\
    -> dit doet een initialisatie van storybook\
    -> de manuele 'web components' keuze gemaakt
-   onder apps/storybook is er dan een package.json (+lock en node_modules)\
    -> de devDependencies verplaatst naar het root niveau
    -> de package.json, package-lock.json en node_modules verwijderd
