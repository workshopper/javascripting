For å holde ting organisert kan vi lage en ny katalog for denne workshopen.

Kjør denne kommandoen for å lage en katalog som heter `javascripting` (eller noe annet om du ønsker):

```bash
mkdir javascripting
```

Bytt til `javascripting` katalogen:

```bash
cd javascripting
```

Lag en fil som heter `introduction.js`:

```bash
touch introduction.js
```
 eller hvis du bruker Windows, 

```bash
type NUL > introduction.js
```
(`type` er en del av kommandoen!)

Åpne filen i din favoritt editor og legg til følgende tekst:

```js
console.log('hello')
```

Lagre filen, deretter sjekker du om programmet er korrekt ved å kjøre følgende kommando:

```bash
javascripting verify introduction.js
```
