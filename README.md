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
  - development (zebpay.dev)
  - uat (zebpay.uat)
  - staging (zebpay.stag)
  - prod (zebpay.prod)
```

## Developmet Flow
- dev changes are tested, then merged to UAT, once tested they are merged to staging, once staging is tested they are merged to prod.

## Auth0 Configurations
  - Separate Deployment For Separate Environment
  - eg: dev-deployment, uat-deployment, stag-deployment, prod-deployment (manual)
  
