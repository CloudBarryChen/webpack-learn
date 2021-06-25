import uniq from "lodash/uniq";
import { getTime } from "./utils";
// import { uniq } from "lodash";
const PI = 3.141592653;

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));


var arr = [1, 1, 2, 3, 5, 5, 55, 6];

console.log(uniq(arr));
console.log(getTime());