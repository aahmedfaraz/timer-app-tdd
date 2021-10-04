# ⏱️ Timer App using `Test-Driven Development (TDD)` approach

Timer App, a React Typescript App developed over Test-Driven Development (TDD) approach.

### 📚 Reading Material related to the Project

- [React Test-driven Development: From User Stories to Production](https://www.toptal.com/react/tdd-react-user-stories-to-development)
- [Create react app typescript: testing with jest and enzyme](https://feralamillo.medium.com/create-react-app-typescript-testing-with-jest-and-enzyme-869fdba1bd3)

##### Diff bw Ejected Version and Without Ejecting

`Ejected Version` is creating react app other than create-react-app
`Without Ejecting` is creating react app using create-react-app

# 🏆 Steps:

#### 1. `Create React App`

Create react app with typescript template using command

```powershell
npx create-react-app timer-app --template typescript
```

#### 2. `Install Jest and Enzyme Dependencies`

Read From Documentation [Create react app typescript: testing with jest and enzyme](https://feralamillo.medium.com/create-react-app-typescript-testing-with-jest-and-enzyme-869fdba1bd3)

Command is:

```powershell
npm i -D ts-jest jest-fetch-mock enzyme enzyme-adapter-react-16 enzyme-to-json @types/enzyme @types/enzyme-adapter-react-16 --save-exact
```

#### 3. `Include config files`

Read From Documentation [Create react app typescript: testing with jest and enzyme](https://feralamillo.medium.com/create-react-app-typescript-testing-with-jest-and-enzyme-869fdba1bd3)

- a. `Update Package.json`

Code is:

```js
"jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/index.tsx",
      "!src/serviceWorker.ts",
      "!src/reportWebVitals.ts"
    ],
    "coveragePathIgnorePatterns": [
      "./src/*/*.types.{ts,tsx}",
      "./src/index.tsx",
      "./src/serviceWorker.ts"
    ],
    "coverageReporters": [
      "json",
      "lcov",
      "text-summary",
      "clover"
    ],
    "coverageThreshold": {
      "global": {
        "statements": 95,
        "branches": 95,
        "lines": 95,
        "functions": 95
      }
    },
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "transform": {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "src/(.*)$": "<rootDir>/src/$1"
    }
  }
```

- b. `Update src/setupTests.ts`

Replace Code with:

```js
/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new ReactSixteenAdapter() });
```

#### 4. `Scripts`

update `scripts` in package.json with:

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test:coverage": "react-scripts test --coverage --runInBand --watchAll=false",
    "eject": "react-scripts eject",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx src --color",
    "format": "prettier --write src/**/*.{ts,tsx,scss,css,json}",
    "isready": "npm run format && npm run lint && npm run test:coverage && npm run build"
},
```

#### 5. `Creating first test`

Some Sample Tests

```js
// Snapshot Test
import React from "react";
import { shallow } from "enzyme";

import App from "../App";

test("renders the component", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
```

```js
// Checking about any element
import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App Component renders", () => {
  it("should render a heading", () => {
    const container = shallow(<App />);
    expect(container.find("h1").length).toEqual(1);
  });
});
```

When running `npm run test` a new snapshot will be created and there will be a new folder generated `__snapshots__` with it.
