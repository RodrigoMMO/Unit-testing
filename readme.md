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

This project was created only for testing purposes. So the only available command is the following:

```console
yarn test
```

This will display the following in your console if everything went well:

```console
yarn run v1.22.4
$ jest
 PASS  src/project.test.js
  ✓ adds 1 + 2 to equal 3 (4 ms)
  ✓ 2nd root of -4 (1 ms)
  ✓ 3rd root of -8 (1 ms)
  ✓ 3rd root of 8
  ✓ 2nd root of 9 (1 ms)
  ✓ 0th root of 9
  ✓ 2nd root of 0 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        1.618 s
Ran all test suites.
Done in 2.66s.
```
