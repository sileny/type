# type
typescript type check

## install

```
npm i @silen/type
```

# api

- `declare function isArray(val: any): boolean;`
- `declare function isUndefined(val: any): boolean;`
- `declare function isNull(val: any): boolean;`
- `declare function isBoolean(val: any): boolean;`
- `declare function isBuffer(val: any): boolean;`
- `declare function isArrayBuffer(val: any): boolean;`
- `declare function isFormData(val: any): boolean;`
- `declare function isArrayBufferView(val: any): boolean;`
- `declare function isString(val: any): boolean;`
- `declare function isNumber(val: any): boolean;`
- `declare function isObject(val: any): boolean;`
- `declare function isPlainObject(val: any): boolean;`
- `declare function isDate(val: any): boolean;`
- `declare function isArguments(val: any): boolean;`
- `declare function isFile(val: any): boolean;`
- `declare function isBlob(val: any): boolean;`
- `declare function isFunction(val: any): boolean;`
- `declare function isSymbol(val: any): boolean;`
- `declare function isRegExp(val: any): boolean;`
- `declare function isInt8Array(val: any): boolean;`
- `declare function isUint8Array(val: any): boolean;`
- `declare function isUint8ClampedArray(val: any): boolean;`
- `declare function isInt16Array(val: any): boolean;`
- `declare function isUint16Array(val: any): boolean;`
- `declare function isInt32Array(val: any): boolean;`
- `declare function isUint32Array(val: any): boolean;`
- `declare function isFloat32Array(val: any): boolean;`
- `declare function isFloat64Array(val: any): boolean;`
- `declare function isError(val: any): boolean;`
- `declare function isPromise(val: any): boolean;`
- `declare function isSet(val: any): boolean;`
- `declare function isWeakSet(val: any): boolean;`
- `declare function isMap(val: any): boolean;`
- `declare function isWeakMap(val: any): boolean;`
- `declare function isStream(val: any): boolean;`
- `declare function isURLSearchParams(val: any): boolean;`

# usage

```js
const { isBuffer } = require('@silen/type');
// or
import { isBuffer } from '@silen/type';

console.log(isBuffer(new Buffer(4)));
console.log(isBuffer(Buffer.alloc(4)));
console.log(isBuffer(undefined));
console.log(isBuffer(null));
console.log(isBuffer(''));
console.log(isBuffer(true));
console.log(isBuffer(0));
console.log(isBuffer(1));
console.log(isBuffer(1.0));
console.log(isBuffer('string'));
console.log(isBuffer({}));
console.log(isBuffer(function foo() {}));
console.log(isBuffer(Symbol()));
console.log(isBuffer(new Set));
console.log(isBuffer(new Map));
console.log(isBuffer(new WeakMap));
console.log(isBuffer(new WeakSet));
```

This is a demo for testing the usage of `isBuffer` from `type` module. You can try the others and do likewise.
