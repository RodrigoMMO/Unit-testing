# Testing Jest

A basic unit testing using [`Jest`](https://jestjs.io/en/). Here we will be testing and addition and root operation located in the `src/sum.js` and `src/root.js` files, respectively, using the `src/project.test.js` file, as it is shown in the [Jest documentation](https://jestjs.io/docs/en/getting-started).

## Getting Started

### Prerequisites

You need to have [`Node.js`](https://nodejs.org/en/) and [`yarn`](https://classic.yarnpkg.com/en/) already installed in your computer.

### Installation

One you've installed `Node.js` and `yarn`, run the following command in your terminal:

```console
yarn
```

## Usage

This project was created to complete the Directed Practice Nº 1 and its respective homework.

1. All the requested problems were solved in the present project.

    1. Root calculator
    2. Converter
    3. Geometry
    4. StringHelper
    5. Complex

    These problems were solved in the `src` folder, in order to run the respective test for those files, please, run the following command in your console:

    ```console
    yarn test
    ```

    You will get the following output if everything went ok:

    ```console
    yarn run v1.22.4
    $ jest src/project.test
    PASS  src/project.test.js
      ✓ 2nd root of -4 to be impossible (4 ms)
      ✓ 3rd root of -8 to be -2
      ✓ 3rd root of 8 to be 2 (1 ms)
      ✓ 2nd root of 9 to be 3
      ✓ 0th root of 9 to be undefined
      ✓ 2nd root of 0 to be 0 (1 ms)
      ✓ 1km to miles, to be 0.621371
      ✓ 7km to miles to be 4.349597 (1 ms)
      ✓ 1 mile to km to be 1.60934
      ✓ 7 mile to km to be 11.26538
      ✓ 1 kg to pounds to be 2.20462 (1 ms)
      ✓ 7 kg to pounds to be 15.43234
      ✓ 1 lb to kg to be 0.453592
      ✓ 7 lb to kg to be 3.175144
      ✓ Distance between (1, 1) and (3, 4) to be 3.6056 (1 ms)
      ✓ Distance between (-1, 1) and (-3, 4) to be 3.6056
      ✓ Distance between (-1, -1) and (-3, -4) to be 3.6056 (1 ms)
      ✓ Distance between (1, -1) and (3, -4) to be 3.6056
      ✓ Distance between (1, 1) and (1, 1) to be 0 (-1 as requested)
      ✓ First name of Steve/Anthony/Luzquiños/Agama to be Steve
      ✓ Second name of Steve/Anthony/Luzquiños/Agama to be Anthony (1 ms)
      ✓ First last name of Steve/Anthony/Luzquiños/Agama to be Luzquiños
      ✓ Second last name of Steve/Anthony/Luzquiños/Agama to be Agama
      ✓ Second name of Steve//Luzquiños/Agama to be 'This person doesn't have second name' (1 ms)
      ✓ (1+i) + (1+i) = (2 + 2i) (4 ms)
      ✓ (1+i) - (1+i) = 0 (1 ms)
      ✓ (1+i) * (1+i) = 0 + 2i
      ✓ (1+i) / (1+i) = 1 (2 ms)

    Test Suites: 1 passed, 1 total
    Tests:       28 passed, 28 total
    Snapshots:   0 total
    Time:        4.646 s
    Ran all test suites matching /src\/project.test/i.
    Done in 5.86s.
    ```

2. The homework solution is located in the `homework` folder, and its respective explanation is located [here](https://github.com/AnthonyLzq/jest-test/tree/master/src/homework).