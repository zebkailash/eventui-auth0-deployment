![Build Prod](https://github.com/zebkailash/eventui-auth0-deployment/workflows/ProdBuild/badge.svg?branch=master)
![Build Stag](https://github.com/zebkailash/eventui-auth0-deployment/workflows/StagBuild/badge.svg?branch=staging)

---
# Autho CI/CD using auth0-cli
It will trigger auth0 deployment when a push is done on Github branch.


Pre Requisites
- There should be separate account for each auth0 tenant
  eg: zebpay-dev, zebpay-staging, zebpay-uat, zebpay-prod
- There should be a separate branch for each tenant or environment. This will allows to make changes to dev, but not deploy them until merge.
- With this architecture you have a each env with CI Task that auto deploys the changes to its target environment when the branch is updated with the latest changes

## Deployment Architecture
eg
```
  // branch structure for tenant
  - development (myevents-dev)
  - uat (myevents-uat)
  - staging (myevents-stag)
  - prod (myevents-prod)
```

## Developmet Flow
- dev changes are tested, then merged to UAT, once tested they are merged to staging, once staging is tested they are merged to prod.

## Auth0 Configurations
  - Separate Deployment For Separate Environment
  - eg: dev-deployment, uat-deployment, stag-deployment, prod-deployment (manual)


## CI/CD Process
- Development: All the changes to development tenant/account should be done on dashboard and then sync to your local repo using `npm run sync`
- Review the updated changes locally
- Push the changes to development
- Create PR for staging branch
- Once PR is merged pipeline will be triggered and deployed to configured staging tenant eg: myevents-stag.eu.auth.com
- Once Staging environment is tested Send PR to master.

> NOTE:  Configure ESLint Github Action in workflow.

## Features
- [x] Linting Rules
- [x] Environment Agnostic
- [x] Flexible Configuration

---
Happy Coding :smiley: