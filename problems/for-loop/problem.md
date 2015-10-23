For loops look like this:

```js
for (var i = 0; i < 10; i++) {
  // log the numbers 0 through 9
  console.log(i)
}
```

The variable `i` is used to track how many times the loop has run.

The statement `i < 10;` indicates the limit of the loop.
It will continue to loop if `i` is less than `10`.

The statement `i++` increases the variable `i` by 1 each loop.

## The challenge:

Create a file named `for-loop.js`.

In that file define a variable named `total` and make it equal the number `0`.

Define a second variable named `limit` and make it equal the number `10`.

Create a for loop with a variable `i` starting at 0 and increasing by 1 each time through the loop. The loop should run as long as `i` is less than `limit`.

On each iteration of the loop, add the number `i` to the `total` variable. To do this, you can use this statement:

```js
total += i;
```

After the for loop, use `console.log()` to print the `total` variable to the terminal.

Check to see if your program is correct by running this command:

```bash
javascripting verify for-loop.js
```
