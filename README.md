# multi-compare

Compose multiple array sort compare functions into one. Given compare
functions are used in order until one of them returns a non-0 value.

## Example

```js
var createMultiCompare = require("multi-compare");

var data = [
  {
    name: "Parsha",
    age: 29,
    weight: 200,
  },
  {
    name: "Shayna",
    age: 25,
    weight: 130,
  },
  {
    name: "Alyssa",
    age: 25,
    weight: 140,
  },
];

data.sort(createMultiCompare([
  // First compare by age
  function compareAge(a, b) {
    return a.age - b.age;
  },
  // Break ties by comparing weight
  function compareWeight(a, b) {
    return a.weight - b.weight;
  },
]));

console.log(data)
// ->
// Shayna
// Alyssa
// Parsha
```

## API

```js
var createMultiCompare = require("multi-compare");
```

### `var compareFn = createMultiCompare(compareFns)`

Compose given compare functions into one. Given compare functions are
used in order until one of them returns a non-0 value.

## Install

[npm: *multi-compare*](https://www.npmjs.com/package/multi-compare)

```
npm install multi-compare
```
