// TASK C: Import `add` and `multiply` from math.js using named imports

import { add, multiply } from "./math.js";

// TASK D: Import the default export from greet.js
// Log the results of:
//   add(3, 4)
//   multiply(5, 6)
//   greet("Sam")

import greet from "./greet.js";

console.log(add(3, 4));
console.log(multiply(5, 6));
console.log(greet("Sam"));
