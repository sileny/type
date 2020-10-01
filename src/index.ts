const toStr = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toStr.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is Null
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is Null, otherwise false
 */
function isNull(val) {
  return toStr.call(val) === '[object Null]';
}

/**
 * Determine if a value is Boolean
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is Boolean, otherwise false
 */
function isBoolean(val) {
  return toStr.call(val) === '[object Boolean]';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    typeof val.constructor.isBuffer === 'function' &&
    val.constructor.isBuffer(val)
  );
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toStr.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toStr.call(val) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toStr.call(val) === '[object Date]';
}

/**
 * Determine if a value is a Arguments
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Arguments, otherwise false
 */
function isArguments(val) {
  return toStr.call(val) === '[object Arguments]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toStr.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toStr.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toStr.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Symbol
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Symbol, otherwise false
 */
function isSymbol(val) {
  return toStr.call(val) === '[object Symbol]';
}

/**
 * Determine if a value is a RegExp
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a RegExp, otherwise false
 */
function isRegExp(val) {
  return toStr.call(val) === '[object RegExp]';
}

/**
 * Determine if a value is a Int8Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Int8Array, otherwise false
 */
function isInt8Array(val) {
  return toStr.call(val) === '[object Int8Array]';
}

/**
 * Determine if a value is a Uint8Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Uint8Array, otherwise false
 */
function isUint8Array(val) {
  return toStr.call(val) === '[object Uint8Array]';
}

/**
 * Determine if a value is a Uint8ClampedArray
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Uint8ClampedArray, otherwise false
 */
function isUint8ClampedArray(val) {
  return toStr.call(val) === '[object Uint8ClampedArray]';
}

/**
 * Determine if a value is a Int16Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Int16Array, otherwise false
 */
function isInt16Array(val) {
  return toStr.call(val) === '[object Int16Array]';
}

/**
 * Determine if a value is a Uint16Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Uint16Array, otherwise false
 */
function isUint16Array(val) {
  return toStr.call(val) === '[object Uint16Array]';
}

/**
 * Determine if a value is a Int32Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Int32Array, otherwise false
 */
function isInt32Array(val) {
  return toStr.call(val) === '[object Int32Array]';
}

/**
 * Determine if a value is a Uint32Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Uint32Array, otherwise false
 */
function isUint32Array(val) {
  return toStr.call(val) === '[object Uint32Array]';
}

/**
 * Determine if a value is a Float32Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Float32Array, otherwise false
 */
function isFloat32Array(val) {
  return toStr.call(val) === '[object Float32Array]';
}

/**
 * Determine if a value is a Float64Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Float64Array, otherwise false
 */
function isFloat64Array(val) {
  return toStr.call(val) === '[object Float64Array]';
}

/**
 * Determine if a value is a Error
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Error, otherwise false
 */
function isError(val) {
  return toStr.call(val) === '[object Error]';
}

/**
 * Determine if a value is a Promise
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Promise, otherwise false
 */
function isPromise(val) {
  return toStr.call(val) === '[object Promise]';
}

/**
 * Determine if a value is a Set
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Set, otherwise false
 */
function isSet(val) {
  return toStr.call(val) === '[object Set]';
}

/**
 * Determine if a value is a WeakSet
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a WeakSet, otherwise false
 */
function isWeakSet(val) {
  return toStr.call(val) === '[object WeakSet]';
}

/**
 * Determine if a value is a Map
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Map, otherwise false
 */
function isMap(val) {
  return toStr.call(val) === '[object Map]';
}

/**
 * Determine if a value is a WeakMap
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Map, otherwise false
 */
function isWeakMap(val) {
  return toStr.call(val) === '[object WeakMap]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

export {
  isArray,
  isUndefined,
  isNull,
  isBoolean,
  isBuffer,
  isArrayBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isDate,
  isArguments,
  isFile,
  isBlob,
  isFunction,
  isSymbol,
  isRegExp,
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isError,
  isPromise,
  isSet,
  isWeakSet,
  isMap,
  isWeakMap,
  isStream,
  // ------------------
  isURLSearchParams
};
