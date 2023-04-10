#!/usr/bin/env bash
npx create-nx-workspace@latest fiva-portal
cd fiva-portal

npm install -D @nrwl/angular
nx g @nrwl/angular:library ngx-components  --publishable --importPath=@gblo.ch/ngx-components
nx g @nrwl/angular:scam --project=ngx-components --export  --style=scss --name=gb-button

npm install -D @nrwl/storybook
nx g @nrwl/storybook:configuration ngx-components --uiFramework=@storybook/angular
nx g @nrwl/angular:stories --project=ngx-components
nx build-storybook ngx-components
nx storybook ngx-components

# https://nx.dev/packages/storybook/generators/migrate-7#@nrwl/storybook:migrate-7
npx nx g @nrwl/storybook:migrate-7
npx nx g @nrwl/storybook:migrate-7 --onlyShowListOfCommands
npx storybook@next upgrade --prerelease
nx g @nrwl/storybook:migrate-7 --onlyPrepare
nx g @nrwl/storybook:migrate-7 --onlyPrepare --config-dir libs/ngx-components/.storybook
npx sb@next automigrate --config-dir libs/ngx-components/.storybook --renderer @storybook/angular
nx g @nrwl/storybook:migrate-7 --afterMigration

npm install @angular/material && npx nx g @angular/material:ng-add --project=ngx-components
nx g @nrwl/angular:setup-tailwind ngx-components

nx build-storybook ngx-components
nx storybook ngx-components

npm install --save-dev @nrwl/cypress
nx g @nrwl/cypress:cypress-project portal-e2e --project=portal

nx g @nrwl/angular:application portal --style=scss --e2eTestRunner=cypress --linter=eslint
npm install @angular/material && npx nx g @angular/material:ng-add --project=portal
nx g @nrwl/angular:setup-tailwind portal

# Setup styles for storybook!!!
