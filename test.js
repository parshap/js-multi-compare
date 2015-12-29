"use strict";

var test = require("tape");
var createMultiCompare = require("./");

function assertOrder(data, names, t) {
  var dataNames = data.map(function(person) {
    return person.name;
  });
  t.deepEqual(dataNames, names);
}

var DATA = [
  {
    name: "Parsha",
    age: 29,
    weight: 200,
  },
  {
    name: "Logan",
    age: 27,
    weight: 180,
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

function compareAge(a, b) {
  return a.age - b.age;
}

function compareWeight(a, b) {
  return a.weight - b.weight;
}

function compareName(a, b) {
  return a.name.localeCompare(b.name);
}

test("sort by name", function(t) {
  var sorted = DATA.slice().sort(createMultiCompare([
    compareName,
  ]));
  assertOrder(sorted, [
    "Alyssa",
    "Logan",
    "Parsha",
    "Shayna",
  ], t);
  t.end();
});

test("sort by age then name", function(t) {
  var sorted = DATA.slice().sort(createMultiCompare([
    compareAge,
    compareName,
  ]));
  assertOrder(sorted, [
    "Alyssa",
    "Shayna",
    "Logan",
    "Parsha",
  ], t);
  t.end();
});

test("sort by age then weight", function(t) {
  var sorted = DATA.slice().sort(createMultiCompare([
    compareAge,
    compareWeight,
  ]));
  assertOrder(sorted, [
    "Shayna",
    "Alyssa",
    "Logan",
    "Parsha",
  ], t);
  t.end();
});
