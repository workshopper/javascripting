---
# INTRODUCTION

To keep things organized, let's create a folder for this workshop. 

Run this command to make a directory called `javascripting` (or something else if you like):

`mkdir javascripting`

Change directory into the `javascripting` folder:

`cd javascripting`

Create a file named `introduction.js`:

`touch introduction.js` or if you're on windows, `type NUL > introduction.js` (`type` is part of the command!)

Open the file in your favorite code editor, then add this text:

```js
console.log('hello');
```
Let's break down what is happening in this line of code.

The `console` *object* is a command-line interface (CLI) for sending instructions to the browser. We use the `log()` *method* within `console` as a way to display data. The combination of `object.method()` will be seen often in JavaScript syntax. 

The parameter being logged is the *string* value `'hello'`. Strings are a type of data for representing text. Either 'single' or "double" quotation marks can be used for a *string* type of value; just be consistent with which kind of quotation mark you use.

Save the file, then check to see if your program is correct by running this command:

`javascripting verify introduction.js`

By the way, throughout this tutorial, you can give the file you work with any name you like. If you want to use something like `catsAreAwesome.js` for every exercise, you can do that. Just make sure to run:

`javascripting verify catsAreAwesome.js`

---  



> **Need help?** View the README for this workshop: http://github.com/sethvincent/javascripting

