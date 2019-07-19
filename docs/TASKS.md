# Coding Tasks

**Note**

Where applicable, try to do the coding tasks with [ping pong pair programming](http://wiki.c2.com/?PairProgrammingPingPongPattern).

For example, in your pairs, person A could do task 2, observe that the test fails because task 3 has not been completed.

Person B then implements the code for task 3.

You then re-run the test and find that it passes.

Then Person B writes the test and code for task 4.

Person A writes the code and implements the function for task 5 and so on and so on.

## 1) Download the ESLint extension for VSCode

We use a tool called a Linter. A linter will identify when we have incorrectly formatted our code, or when it suspects we have an error such as an undefined variable.

We use a tool called [ESLint](https://eslint.org/).

You can run:

    npm run eslint

to see whether ESLint suspects you have made any errors. It is recommended to do this regularly, so you can fix problems as you go along.

Also, **install the ESLint extension for VSCode**, which will provide in-line error checking (by underlining any problems in red squiggly lines, like in a Word document). Click the square symbol on the left hand bar for extensions.

## 2) Run your test suite

Run:

`npm test`

To run the test suite. Running this command will by default look in the `package.json` file for a script called `test` and then whatever command is listed as the value for `test` will be executed (in this case, the command is `jest`).

Jest is a testing framework. Its behaviour, by default, is to execute any test files that reside in the `/test` directory.

When you run your tests, you should see that both current tests pass.

## 3) Write another test for the `addVAT` function

Add third test in the same `describe` block. For example:

```javascript
test("returns 118.8 when passed 99", () => {
  expect(utils.addVAT(99)).toBe(118.8);
});
```

Does this test also pass when you run `npm test`?

## 4) Write a new test for a function called `getFullName`

Add a new test that will check the behaviour of a `getFullName` function.

This function takes 2 arguments, a first name and a last name, and returns the full name as a single string.

You should write your test in a new `describe` block, e.g.:

```javascript

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});
```

**Hint**

At this stage the test should FAIL.

## 5) Implement the `getFullName` function

Update your application to implement a new function that will take 2 arguments, a first name and a last name, and returns the full name as a single string.

You will need to add your function to the object exported from the `bookshop_utils.js` file:

```javascript
module.exports = {
    addVAT,
    getFullName
};
```

The test from task 4 should now pass.

## 6) Write a test for a `makeHalfPrice` function

Add a new test that will check the behaviour of a `makeHalfPrice` function.

This function takes a price as an argument, and returns the price with a 50% discount applied.

**Hint**

At this stage the test should FAIL.

## 7) Implement the `makeHalfPrice` function

Update your application to implement a new function that takes a price as an argument, and returns the price with a 50% discount applied.

The test from task 6 should now pass.

## 8) Write a test for a `countBooks` function

Add a new test that will check the behaviour of a `countBooks` function.

This function receives an array of book titles as an argument and returns the total number of books in the array.

**Hint**

At this stage the test should FAIL.

## 9) Implement the `countBooks` function

Update your application to implement the `countBooks` function.

The test from task 7 should now pass.

## 10) Write a test for an `isInStock` function

Add a new test that will check that the behaviour of an `isInStock` function.

This function should receive an object as an argument. The object looks like:

```javascript
{
  title: "The Stone Diaries",
  author: "Carol Shields",
  yearOfPublication: 1993,
  quantity: 9
}
```

If the book is in stock (i.e. if the quantity is at least 1) the function should return `true`, otherwise it should return `false`.

**Hint**

Here's how your test case might look:

```javascript
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});
```

## 11) Implement the `isInStock` function

Update your application to implement the `isInStock` function

The test from task 10 should now pass.

### 12) Test the opposite case

Make sure you have tests for both possible outcomes of the `isInStock` function. For example, if you tested that the outcome was `true` when the book _was_ in stock, make sure to test that the outcome is `false` when it _isn't_ in stock.

## 13) Write a test for a `getTotalOrderPrice` function

Add a new test that will check that the behaviour of a `getTotalOrderPrice` function.

This function receives 2 arguments, a price and a quantity. The function should multiply the price of the book being ordered by the quantity desired, and then apply a VAT of 20% to the total order.

It should return the total price with VAT applied.

e.g.

`utils.getTotalOrderPrice(18, 2)` --> 43.2
`utils.getTotalOrderPrice(8, 10)` --> 96

**Hint**

At this stage the test should FAIL.

## 14) Implement the `getTotalOrderPrice` function

Update your application to implement the `getTotalOrderPrice` function.

The test from task 13 should now pass.

# Written questions

The following questions are intended to be answered with written answers (no coding required) and should re-enforce some of the learning you have completed.

1. Which part is the file extension of the package.json file?

2. What does JSON stand for?

3. What is the purpose of JSON?

4. What does the package.json file do?

5. How do you install dependencies in a project after first cloning it from Github?

6. What does "forking" mean in the context of Github?

7. What data types do you know?

8. What is the difference between primitive and complex data types, and can you give examples of each?

9. What would be the best data type for representing whether a user is logged into the system or not?

10. How would you create a variable whose value could not be changed?

11. What would be the outcome of running this code?

```javascript
const firstName = "Sandra";

function sayHello(name) {
  console.log("Hello, " + firstName);
}

sayHello("Sally");
```

12. What would be the outcome of running this code?

```javascript

function getFullName(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return fullName;
}

const result = getFullname("Sally", "Jennings");

console.log(fullName);
```

13. If you wanted to see what dependencies were required in this project, where would you to to look for a list?

14. When you install dependencies, what directory is created?

15. How can you write comments in your code?