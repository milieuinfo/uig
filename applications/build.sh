#!/bin/bash

echo "node versie: $(node -v)"
echo "npm versie: $(npm -v)"

npm ci
npx nx test
npx nx build
npx nx e2e alliance-e2e
