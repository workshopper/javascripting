---

# IF STATEMENT

Conditional statements are used to, based in a specified boolean condition, alter the control flow of a program.

A conditional statement look like this:

```js
if(n > 1) {
  console.log('the variable n is greater than 1.');
} else {
  console.log('the variable n is less or equal than 1.');
}
```

Inside parenthesis you must enter a logic statement, meaning that should be either true or false. 

The else block is optional and contains the code that will be executed if the statement it's false.

## The challenge

Create a file named `if-statement.js`.

In that file, declare a variable named `fruit`.

Make the `fruit` variable reference the value **orange**.

Then use `console.log()` to print **The fruit name has more than five characters.** if the length of the value of `fruit` is greater than five.
Print **The fruit name has less or equal than five characters.** otherwise.

**Check to see if your program is correct by running this command:**

`javascripting verify if-statement.js`

---
