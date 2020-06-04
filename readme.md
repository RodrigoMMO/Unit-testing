# Testing Jest

A basic unit testing using [`Jest`](https://jestjs.io/en/). Here we will be testing a simple addition located in the `src/sum.js` file, using the `src/sum.test.js` file, as it is shown in the [Jest documentation](https://jestjs.io/docs/en/getting-started).

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
 PASS  src/sum.test.js
  ✓ adds 1 + 2 to equal 3 (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.081 s
Ran all test suites.
Done in 1.98s.
```
