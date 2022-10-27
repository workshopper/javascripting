Du wirst oft den Inhalt eines Strings ändern müssen.

Strings verfügen über integrierte Funktionen, die es einem ermöglichen, ihren Inhalt zu prüfen und zu bearbeiten.

Hier ist ein Beispiel, das die Methode `.replace()` verwendet:

```js
let example = 'dieses Beispiel existiert'
example = example.replace('exists', 'super')
console.log(example)
```

Um den Wert zu ändern, auf den die Variable `example` verweist, müssen wir  
wieder das Gleichheitszeichen verwenden, diesmal mit der Methode `example.replace()` rechts vom  
rechts vom Gleichheitszeichen.

## Die Herausforderung:

Erstelle eine Datei namens `revising-strings.js`.

Definiere eine Variable namens `pizza`, die auf diese Zeichenkette verweist: `'pizza is alright'`

Verwende die Methode `.replace()`, um `alright` in `wonderful` zu ändern.

Verwende `console.log()`, um die Ergebnisse der Methode `.replace()` auf dem Terminal auszugeben.

Überprüfe, ob Ihr Programm korrekt ist, indem du diesen Befehl ausführst:

`javascripting verify revising-strings.js`
