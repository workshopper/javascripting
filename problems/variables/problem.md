A variable is a name that can reference a specific value. Variables are declared using `const`,
`let` or `var` followed by the variable's name.

Here's an example:

```js
const example;
let another_example;
var a_third_example;
```

The above variables are **declared**, but they aren't defined (they do not yet reference a specific value).

Here's an example of defining a variable, making it reference a specific value:

```js
const example = 'some string';
```

Variables declared with `let` and `var` may be assigned a different value later on.
Variables declared with `const` cannot be set to another value. If possible, use `const` to
declare variables.

The difference between `let` and `var` will be explored in another lesson. For the time being
we will stick to `let` if we need a non-constant variable.

# NOTE 

A variable is **declared** using one of `const`, `let` or `var` and uses the equals sign to **define** the value that it references.
This is colloquially known as "Making a variable equal a value".

## The challenge:

Create a file named `variables.js`.

In that file declare a variable named `example`.

**Make the variable `example` equal to the value `'some string'`.**

Then use `console.log()` to print the `example` variable to the console.

Check to see if your program is correct by running this command:

`javascripting verify variables.js`
