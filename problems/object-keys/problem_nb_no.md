JavaScript gir en naturlig måte å liste opp alle de tilgjengelige nøklene til et objekt. Dette kan være nyttig for å gå gjennom alle egenskapene til et objekt og manipulere verdiene deres deretter.

Her er et eksempel på en liste over alle objektnøkler ved hjelp av **Object.keys()**
prototype metode.

``` js
const bil = {
  make: 'Toyota',
  modell: 'Camry',
  år: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

Koden ovenfor vil skrive ut en rekke strenger, der hver streng er en nøkkel i bilobjektet. `['merke', 'modell', 'år']`

## Utfordringen:

Opprett en fil med navnet 'object-keys.js'.

I den filen, definer en variabel kalt "bil" slik:

``` js
const bil = {
  make: 'Honda',
  modell: 'Accord',
  år: 2020
}
```

Definer deretter en annen variabel kalt "nøkler" slik:
``` js
const keys = Object.keys(car)
```

Bruk `console.log()` for å skrive ut `keys`-variabelen til terminalen.

Sjekk for å se om programmet er riktig ved å kjøre denne kommandoen:

``` bash
javascripting verify object-keys.js
```