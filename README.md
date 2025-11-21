# Cypress framework - QA Challenge

Automated test suite for API and UI using Cypress + JavaScript.

## Structure
- **cypress/e2e/api/** → API tests  
- **cypress/e2e/frontend/** → UI tests  
- **cypress/pages/** → Page Objects  
- **cypress/support/** → Commands and setup

## Run
```bash
npx cypress open
# or
npx cypress run --headed
```

## Auth
Default credentials configured via environment variables:
- CYPRESS_adminEmail
- CYPRESS_adminPassword

