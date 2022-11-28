# banking-common-components

> This is a common component library for Banking CWA repos. It uses LBG Constellation under the hood.

## Useful Links

* [Project sournce | Gitlab](https://gitlab.sales.sbx.zone/pca/banking-common-components-cwa)
* [Nexus URL](http://nexus.banking.sbx.zone/repository/npm-master/@banking/components)
* [CI | Jenkins](http://jenkins.banking.sbx.zone:8080/job/BankingLab/job/pca%2Fbanking-common-components/)
* [Run in local](http://localhost:3232)
* Unit test directory - `dashboard/unit-testing/lcov-report/index.html`

### Commads to execute

* Run locally (client) - `npm run dev`
* Build for prod - `npm pack`
* Unit test locally - `npm t`
* Unit test for Jenkins (can be used locally) - `npm run test:ci`
* Linting the JS and CSS - `npm run lint`

Any other command can be seen in `package.json`.

### Using components

* Components - `import { component_name } from '@banking/components'`
* Hooks - `import { hook_name } from '@banking/components/dist/hooks'`
* Utils - `import { util_name } from '@banking/components/dist/utils'`

### Commit rules

This repo uses [Commitlint](https://commitlint.js.org/#/) and [Husky](https://typicode.github.io/husky/#/) to ensure commits confronts to the strict guidelines defined in [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/).

Without following the correct commit message, committing of code is not possible. To simplify this, another package, [Commitizen CLI](http://commitizen.github.io/cz-cli/) is used. Once can invoke this like this -

> git add -A; npm run commit

And then follow the onscreen instructions.
