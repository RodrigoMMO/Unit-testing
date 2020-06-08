# Homework

## Statements to solve

a. Can transactions be simulated?

  - Of the course they can simulated, since a transaction is a group of single actions, we can simulate each of them in order to simulate one transaction.

b. Can operations with a database be simulated?

  - Of the course they can simulated, for example, you can simulate the behavior of a data database and `CRUD` operations using a `JSON`, `CSV` or `.txt` file.

## Root Calculator

It is using a class as requested. It has one method which can receive an array or a number. If a number is given, it will it will return its respective root, whether is real or complex. Finally, if an array is given, it will return an array with the respective root of each number, whether they are real or complex.

To run the test, please, run the following command in your console:

```console
yarn homework:root
```

If everything went ok, it will display an output as follows:

```console
yarn run v1.22.4
$ jest src/homework/root.test
 PASS  src/homework/root.test.js
  ✓ 2nd root of 4 equals to 2 (2 ms)
  ✓ 2nd root of -4 equals to 2i (1 ms)
  ✓ 2nd root of [1, 4, 9] equals to [1, 2, 3] (1 ms)
  ✓ 2nd root of [-1, -4, -9] equals to [i, 2i, 3i] (1 ms)
  ✓ 2nd root of [-1, 4, -9] equals to [i, 2, 3i]

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.698 s
Ran all test suites matching /src\/homework\/root.test/i.
Done in 3.80s.
```

## Mock

A mock-_something_ is used to simulate a specific behavior. For example, if you want to simulate `CRUD` operations, you can implement a **mock-_database_**, in order to don't implement a real database, and try to test how your interactions with a database are going to be.

Also, you might want to test the behavior of your app with some users that could be using it, so you might implement a **mock-_user_**, in order to simulate the interactions that the a real user will have with your app.

The example provided here is simulating a database and a user, so they are going to be a `mock-user` and a `mock-database`. I'm using [`faker.js`](https://github.com/marak/Faker.js/), to create fake data. I'm also implementing `mock-CRUD operations`.

The tests performed in this project are the following:

1. Get the number of registered users.
2. Update an empty database.
3. Delete an empty database.
4. Adding a new user.
5. Read the database.
6. Update a user from the database.
7. Delete a user from the database.

In order to perform these test, please, run the following command in your console:

```
yarn homework:mock
```

If everything went ok, it will display the following output:

```console
yarn run v1.22.4
$ jest src/homework/mock.test
 PASS  src/homework/mock.test.js
  ✓ Empty database (4 ms)
  ✓ Update empty database
  ✓ Delete in empty database (1 ms)
  ✓ Adding new user (3 ms)
  ✓ Read database (6 ms)
  ✓ Update element from database (17 ms)
  ✓ Delete element from database (4 ms)

  console.log
    Updated user: {
        name: Augustine,
        lastName: Roberts,
        id: ad5653a4-7e3c-4fd4-99b9-c5b0230c3fc7,
        email: seth.runolfsson3@hotmail.com
    }

      at Object.<anonymous> (src/homework/mock.test.js:29:11)

  console.log
    Deleted user: {
        name: Augustine,
        lastName: Roberts,
        id: ad5653a4-7e3c-4fd4-99b9-c5b0230c3fc7,
        email: seth.runolfsson3@hotmail.com
    }

      at Object.<anonymous> (src/homework/mock.test.js:35:11)

  console.log
    Database size after deleting the user: 0

      at Object.<anonymous> (src/homework/mock.test.js:36:11)

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        3.08 s
Ran all test suites matching /src\/homework\/mock.test/i.
Done in 4.20s.
```
