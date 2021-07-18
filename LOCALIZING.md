# Localization HOWTO

In computing, localization is the process of adapting software to different languages, regional differences, cultural preferences, and technical requirements of a target audience.

This guide explains how to contribute a new localization to this workshopper. If you are an international user and would like to bring Nodeschool workshops to a broader audience, please consider contributing a localization! It is simple, fun, and enables more people to learn and practice.

## Menu

The menu of the workshopper greets the user with a list of problem names. The strings for these names are contained in the top level `menu.json` file. Translations of problem names should be placed in a JSON file inside the `i18n` folder named with the language code, e.g. `es.json`. Use an existing translation file as reference, ensuring it's up to date with the contents of `menu.json`.

```json
{
    "exercise": {
          "INTRODUCTION":   "INTRODUCCIÓN"
        , "FIRST PROBLEM":  "PRIMER PROBLEMA"
        , "SECOND PROBLEM": "SEGUNDO PROBLEMA"
        , "LAST PROBLEM":   "ÚLTIMO PROBLEMA"
    }
}
```

## Footer

Workshoppers usually display a footer beneath the problem description, providing the user with help or additional information to make their way through. The footer is a [Markdown](https://en.wikipedia.org/wiki/Markdown) file located inside the `i18n/footer` directory, named after the language code, e.g. `ja.md`. 

In order to add a localized footer for Spanish, create a `es.md` file inside the `i18n/footer` directory, containing the translation of the English file `en.md`.

## Troubleshooting tips

Similarly, workshoppers display troubleshooting tips when the user submits a wrong solution for the exercise. Tips are contained in a [Markdown](https://en.wikipedia.org/wiki/Markdown) file located inside the `i18n` directory, named after the language code, e.g. `troubleshooting-ja.md`.

In order to add translated troubleshooting tips for Spanish, create a `troubleshooting_es.md` file inside the `i18n` directory, containing the translation of the English file `troubleshooting.md`.

## Problems and solutions

The text of each problem and the message printed when the user solves it can be localized by adding [Markdown](https://en.wikipedia.org/wiki/Markdown) files with a well defined name inside the problem directory, which is a subdirectory of the `problems` directory. Consider this structure:

```
+-- problems
|   +-- problem-1
|   |   +-- index.js
|   |   +-- problem.md
|   |   +-- problem_ja.md
|   |   +-- problem_zh-cn.md
|   |   +-- solution.md
|   |   +-- solution_ja.md
|   |   `-- solution_zh-cn.md
|   +-- problem-2
|   |   +-- index.js
|   |   +-- problem.md
|   |   +-- problem_ja.md
|   |   +-- problem_zh-cn.md
|   |   +-- solution.md
|   |   +-- solution_ja.md
|   |   `-- solution_zh-cn.md
:   :
```

As you can see, translation file names are in the format `problem_xx.md` and `solution_xx.md` where the `xx` suffix is the language code.

In order to add the Spanish localization, we must add new `problem_es.md` and `solution_es.md` files inside each problem directory as follows:

```
+-- problems
|   +-- problem-1
|   |   +-- index.js
|   |   +-- problem.md
|   |   +-- problem_es.md
|   |   +-- problem_ja.md
|   |   +-- problem_zh-cn.md
|   |   +-- solution.md
|   |   +-- solution_es.md
|   |   +-- solution_ja.md
|   |   `-- solution_zh-cn.md
|   +-- problem-2
|   |   +-- index.js
|   |   +-- problem.md
|   |   +-- problem_es.md
|   |   +-- problem_ja.md
|   |   +-- problem_zh-cn.md
|   |   +-- solution.md
|   |   +-- solution_es.md
|   |   +-- solution_ja.md
|   |   `-- solution_zh-cn.md
:   :
```

This is probably the most complex and time consuming task of localizing a workshopper, as problems often interleave paragraphs of text, code snippets and suggestions.

Please remember to use welcoming and inclusive language. The [Contributor Covenant](http://contributor-covenant.org/) offers guidelines if you're unsure.

## Testing

In order to test a translation, launch the workshopper and choose the desired language selecting the menu option `CHOOSE LANGUAGE`. If you don't see the language you contributed listed in the options, chances are you didn't save your updates to the list of languages in the `index.js`.

Once you're satisfied with the results, commit your changes and push to your repo, then submit a PR to the main workshopper repo!
