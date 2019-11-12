En funksjon kan deklareres til å ta imot så mange argumenter som nødvendig. Argumentene kan være av alle slags typer; en string, et nummer, et array, et objekt og tilogmed en annen funksjon.

Her er et eksempel:

```js
function eksempel (argNr1, argNr2) {
  console.log(argNr1, argNr2)
}
```

Vi kan **kalle** den funksjonen med to argumenter på denne måten:

```js
eksempel('hello', 'world')
```

Eksemplet over vil skrive ut `hello world` til skjermen.

## Oppgaven:

Lag en fil som heter `function-arguments.js`.

Definer en funksjon med navnet `math` i den filen, som tar imot tre argumenter. Det er viktig at du forstår at argumentenes navn kun brukes til å referere de.

Gi argumentene hvilke navn som helst.

Funksjonen `math` skal multiplisere det andre argumentet med det tredje, deretter legge til det første argumentet til resultatet av multiplikasjonen.

Tilslutt, inni parantesene til `console.log`, kaller du `match` funksjonen med nummeret `53` som første argument, nummeret `61` som andre argument og tilslutt nummeret `67` som tredje argument.

Se om programmet ditt er riktig ved å kjøre kommandoen:

```bash
javascripting verify function-arguments.js
```
