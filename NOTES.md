## Note
- To enable save button please add valid data to all fields(All fields are required).

## stop to unnecessary re renders 
- Use React memo for all child components.

`import { memo } from "react";`
`const AddressCard: React.FC = memo(() => {`

- can use useCallback Hook to remove nunesosory rerendering. 
    In our application data is not shared between components using props, so we did not use useCallback in any place.

## Aditional Added Scripts

- Run unit test

`yarn test`
`yarn test:coverage`

- Code Formatter

`yarn format`
`yarn format:check`

## Unit Test Coverage

`yarn test:coverage`

```
 PASS  src/pages/organisation-cfg/config-body/cards/__tests__/ContactDetailsCard.test.tsx
 PASS  src/pages/organisation-cfg/config-body/cards/__tests__/OrganizationDetailsCard.test.tsx
 PASS  src/pages/organisation-cfg/config-body/cards/__tests__/AddressCard.test.tsx
----------------------------------------------|---------|----------|---------|---------|-------------------------------------------------
File                                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                               
----------------------------------------------|---------|----------|---------|---------|-------------------------------------------------
All files                                     |    30.1 |    17.91 |   26.22 |    30.2 |                                                 
 src                                          |       0 |        0 |       0 |       0 |                                                 
  App.tsx                                     |       0 |      100 |       0 |       0 | 6-14                                            
  index.tsx                                   |       0 |      100 |     100 |       0 | 9-23                                            
  reportWebVitals.ts                          |       0 |        0 |       0 |       0 | 3-10                                            
 src/pages/organisation-cfg                   |       0 |      100 |       0 |       0 |                                                 
  OrganisationConfiguration.tsx               |       0 |      100 |       0 |       0 | 9-22                                            
 src/pages/organisation-cfg/config-body       |       0 |        0 |       0 |       0 |                                                 
  ConfigBody.tsx                              |       0 |        0 |       0 |       0 | 11-42                                           
 src/pages/organisation-cfg/config-body/cards |    35.6 |    21.64 |      50 |    35.6 |                                                 
  AddressCard.tsx                             |   33.33 |    22.91 |   44.44 |   33.33 | 46-47,66-69,73-78,82-84,88-104,108-210          
  ContactDetailsCard.tsx                      |   38.98 |    18.42 |   57.14 |   38.98 | 48-49,61-64,68-85,89-167                        
  OrganizationDetailsCard.tsx                 |   34.92 |    22.91 |      50 |   34.92 | 56-59,67-83,87-189,194,199-200                  
 src/pages/organisation-cfg/top-section       |       0 |        0 |       0 |       0 |                                                 
  TopSection.tsx                              |       0 |        0 |       0 |       0 | 8-88                                            
 src/state                                    |     100 |      100 |     100 |     100 |                                                 
  index.ts                                    |       0 |        0 |       0 |       0 |                                                 
  store.ts                                    |     100 |      100 |     100 |     100 |                                                 
 src/state/actionCreators                     |   33.33 |      100 |       0 |   33.33 |                                                 
  organisationConfigurationActionCreator.ts   |   33.33 |      100 |       0 |   33.33 | ...20,27-28,36-37,45-46,54-55,62-63,73-74,84-85 
 src/state/actionTypes                        |       0 |        0 |       0 |       0 |                                                 
  organisationConfigurationActionTypes.ts     |       0 |        0 |       0 |       0 |                                                 
 src/state/reducers                           |   35.71 |    18.18 |     100 |   35.71 |                                                 
  index.ts                                    |     100 |      100 |     100 |     100 |                                                 
  organisationConfigurationReducer.ts         |   30.76 |    18.18 |     100 |   30.76 | 45-100                                          
 src/utils                                    |   66.66 |      100 |      50 |   66.66 |                                                 
  Interfaces.ts                               |       0 |        0 |       0 |       0 |                                                 
  matchMedia.js                               |   66.66 |      100 |      50 |   66.66 | 3,27                                            
 src/utils/types                              |       0 |        0 |       0 |       0 |                                                 
  organisation-config.ts                      |       0 |        0 |       0 |       0 |                                                 
----------------------------------------------|---------|----------|---------|---------|-------------------------------------------------

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   3 passed, 3 total
Time:        5.217 s
Ran all test suites.
Done in 6.19s.
```