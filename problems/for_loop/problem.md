For loops allow you to repeatedly run a block of code a certain number of times. This for loop logs to the console ten times:

```js
for (let i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

The first part, `let i = 0`, is run once at the beginning of the loop. The variable `i` is used to track how many times the loop has run.

The second part, `i < 10`, is checked at the beginning of every loop iteration before running the code inside the loop. If the statement is true, the code inside the loop is executed. If it is false, then the loop is complete. The statement `i < 10;` indicates that the loop will continue as long as `i` is less than `10`.

The final part, `i++`, is executed at the end of every loop. This increases the variable `i` by 1 after each loop. Once `i` reaches `10`, the loop will exit.

## The challenge:

Create a file named `for-loop.js`.

In that file define a variable named `total` and make it equal the number `0`.

Define a second variable named `limit` and make it equal the number `10`.

Create a for loop with a variable `i` starting at 0 and increasing by 1 each time through the loop. The loop should run as long as `i` is less than `limit`.

On each iteration of the loop, add the number `i` to the `total` variable. To do this, you can use this statement:

```js
total += i
```

When this statement is used in a for loop, it can also be known as _an accumulator_.  Think of it like a cash register's running total while each item is scanned and added up.  For this challenge, you have 10 items and they just happen to be increasing in price by 1 each item (with the first item free!).

After the for loop, use `console.log()` to print the `total` variable to the terminal.

Check to see if your program is correct by running this command:

```bash
javascripting verify for-loop.js
```
