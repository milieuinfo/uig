# Workspace Setup Commands

This document describes the steps to set up the monorepo workspace.

## Root Setup

- npx create-nx-workspace@latest
    * [applications | web-components] / apps [an empty workspace with no plugins with a layout that works best for building apps]
    * no distributed caching

## Setup - applications

- npm install -D @nrwl/web
- npx nx g @nrwl/web:application alliance

## Setup - web-components

- npx create-nx-workspace@latest
    * [applications | web-components] / apps [an empty workspace with no plugins with a layout that works best for building apps]
    * no distributed caching
- npm install -D @nrwl/web
- npx nx g @nrwl/web:lib common/utilities --buildable --importPath=@domg-lib/common-utilities
- npx nx g @nrwl/web:lib elements --buildable --publishable --importPath=@domg-lib/elements
- npx nx g @nrwl/web:lib components --buildable --publishable --importPath=@domg-lib/components
- npx nx g @nrwl/web:lib support/test-support --buildable --publishable --importPath=@domg-lib/test-support
- npx nx g @nrwl/web:application exhibit
