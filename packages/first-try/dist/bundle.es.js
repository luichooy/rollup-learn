const isArray = value => Array.isArray(value);

const isObject = value => value && typeof value === 'object' && !isArray(value);

const isBoolean = value => typeof value === 'boolean';

const isBasicType = value => !isObject(value) && !isArray(value);

const foo = [1, 2, 4];
const bar = { a: 1, b: 2, c: 3 };
const baz = 'hello';

console.log('isArray(foo)', isArray(foo)); // true
console.log('isArray(bar)', isArray(bar)); // false
console.log('isArray(baz)', isArray(baz)); // false
console.log('isObject(foo)', isObject(foo)); // false
console.log('isObject(bar)', isObject(bar)); // true
console.log('isObject(baz)', isObject(baz)); // false
console.log('isBasicType(foo)', isBasicType(foo)); // false
console.log('isBasicType(bar)', isBasicType(bar)); // false
console.log('isBasicType(baz)', isBasicType(baz)); // true

module.exports = isBoolean;

export { isBoolean };
