To keep things organized, let's create a folder for this workshop. 

Run this command to make a directory called `javascripting` (or something else if you like):

```bash
mkdir javascripting
```

Change directory into the `javascripting` folder:

```bash
cd javascripting
```

Create a file named `introduction.js`.

On macOS or Linux:

```bash
touch introduction.js
```

On Windows PowerShell:

```powershell
New-Item introduction.js -ItemType File
```

On Windows Command Prompt (`cmd.exe`):

```bat
type NUL > introduction.js
```

You can also create the file directly in your text editor. Make sure it is saved as UTF-8.

Open the file in your favorite editor, and add this text:

```js
console.log('hello')
```

Save the file, then check to see if your program is correct by running this command:

```bash
javascripting verify introduction.js
```

By the way, throughout this tutorial, you can give the file you work with any name you like, so if you want to use something like `catsAreAwesome.js` file for every exercise, you can do that. Just make sure to run:

```bash
javascripting verify catsAreAwesome.js
```
