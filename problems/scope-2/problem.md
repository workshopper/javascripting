In one of the first lessons we talked about the three keywords for 
declaring variables: `const`, `let`, and `var`. As described there, if a 
variable is declared using the `const` keyword, it cannot be reassigned later on: 
if this is done a runtime error will occur. Variables declared with either `let`
or `var`, however, can be reassigned.

Now let's turn to the difference between the keywords `let` and `var`.
Variables declared with `var` have their containing function as scope - that is, they can be used after their declaration until the end of the function definition.

Variables declared with `let` and `const` have their containing block as scope.
One example for a block is a `for` loop:

```js
for(let i = 0; i < 10; ++i) {
	console.log(i);
}

console.log(i);
```

When this code is executed, the last `console.log` will result in a runtime
error, because the for loop's block ended and the variable name `i` as only the for
loop as scope.

However, the code

```js
for(var i = 0; i < 10; ++i) {
	console.log(i);
}

console.log(i);
```

won't produce an error, because now the scope of the variable `i` extends 
beyond the for loop.

Because of this behavior of the `var` keyword, its use is discouraged. Using
block-scoped variables is usually easier to understand and more similar to 
the behavior of variable declarations in other programming languages.


## The challenge:

Create a file named `scope-2.js`.

Copy the following code into that file:

```js
for(var i = 0; i < 10; ++i) {
	console.log(i);
}

if (i) throw new Error("i shouldn't be defined here!");
```

Use your knowledge of the variables' `scope` and change the declaration
of the variable i such that executing the code prints the numbers 0 to 9, 
but does not result in an error.

Check to see if your program is correct by running this command:

```bash
javascripting verify scope-2.js
```
