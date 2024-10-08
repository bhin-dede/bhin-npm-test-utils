
// test 실행 : $node test.js

// const { add, divide, multiply, subtract } = require("bhin-npm-test-utils"); //cjs
import { add, divide, multiply, subtract } from "bhin-npm-test-utils"; //esm

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));