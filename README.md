# type
typescript type check

# install

```
npm i @silen/type
```

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

// or
console.log(window.Type.isBuffer(''));
```

This is a demo for testing the usage of `isBuffer` from `type` module. You can try the others and do likewise.

# others

- [isArray](https://www.npmjs.com/@silen/is-array)
- [isUndefined](https://www.npmjs.com/@silen/is-undefined)
- [isNull](https://www.npmjs.com/@silen/is-null)
- [isBoolean](https://www.npmjs.com/@silen/is-boolean)
- [isBuffer](https://www.npmjs.com/@silen/is-buffer)
- [isArrayBuffer](https://www.npmjs.com/@silen/is-array-buffer)
- [isFormData](https://www.npmjs.com/@silen/is-form-data)
- [isFunction](https://www.npmjs.com/@silen/is-function)
- [isArrayBufferView](https://www.npmjs.com/@silen/is-array-buffer-view)
- [isString](https://www.npmjs.com/@silen/is-string)
- [isNumber](https://www.npmjs.com/@silen/is-number)
- [isObject](https://www.npmjs.com/@silen/is-object)
- [isPlainObject](https://www.npmjs.com/@silen/is-plain-object)
- [isDate](https://www.npmjs.com/@silen/is-date)
- [isArguments](https://www.npmjs.com/@silen/is-arguments)
- [isFile](https://www.npmjs.com/@silen/is-file)
- [isBlob](https://www.npmjs.com/@silen/is-blob)
- [isSymbol](https://www.npmjs.com/@silen/is-symbol)
- [isRegExp](https://www.npmjs.com/@silen/is-reg-exp)
- [isInt8Array](https://www.npmjs.com/@silen/is-int8-array)
- [isUint8Array](https://www.npmjs.com/@silen/is-uint8-array)
- [isUint8ClampedArray](https://www.npmjs.com/@silen/is-uint8-clamped-array)
- [isInt16Array](https://www.npmjs.com/@silen/is-int16-array)
- [isUint16Array](https://www.npmjs.com/@silen/is-uint16-array)
- [isInt32Array](https://www.npmjs.com/@silen/is-int32-array)
- [isUint32Array](https://www.npmjs.com/@silen/is-uint32-array)
- [isFloat32Array](https://www.npmjs.com/@silen/is-float32-array)
- [isFloat64Array](https://www.npmjs.com/@silen/is-float64-array)
- [isError](https://www.npmjs.com/@silen/is-error)
- [isPromise](https://www.npmjs.com/@silen/is-promise)
- [isSet](https://www.npmjs.com/@silen/is-set)
- [isWeakSet](https://www.npmjs.com/@silen/is-weak-set)
- [isMap](https://www.npmjs.com/@silen/is-map)
- [isWeakMap](https://www.npmjs.com/@silen/is-weak-map)
- [isStream](https://www.npmjs.com/@silen/is-stream)
- [isURLSearchParams](https://www.npmjs.com/@silen/is-url-search-params)

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
