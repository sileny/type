/*!
  * type v1.0.0
  * (c) 2020
  * author: sunsilent
  * email: sunsilently@outlook.com
  * @license MIT
  */
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var toStr = Object.prototype.toString;

function isArray(val) {
  return toStr.call(val) === '[object Array]';
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

function isNull(val) {
  return toStr.call(val) === '[object Null]';
}

function isBoolean(val) {
  return toStr.call(val) === '[object Boolean]';
}

function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

function isArrayBuffer(val) {
  return toStr.call(val) === '[object ArrayBuffer]';
}

function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}

function isString(val) {
  return typeof val === 'string';
}

function isNumber(val) {
  return typeof val === 'number';
}

function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}

function isPlainObject(val) {
  if (toStr.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

function isDate(val) {
  return toStr.call(val) === '[object Date]';
}

function isArguments(val) {
  return toStr.call(val) === '[object Arguments]';
}

function isFile(val) {
  return toStr.call(val) === '[object File]';
}

function isBlob(val) {
  return toStr.call(val) === '[object Blob]';
}

function isFunction(val) {
  return toStr.call(val) === '[object Function]';
}

function isSymbol(val) {
  return toStr.call(val) === '[object Symbol]';
}

function isRegExp(val) {
  return toStr.call(val) === '[object RegExp]';
}

function isInt8Array(val) {
  return toStr.call(val) === '[object Int8Array]';
}

function isUint8Array(val) {
  return toStr.call(val) === '[object Uint8Array]';
}

function isUint8ClampedArray(val) {
  return toStr.call(val) === '[object Uint8ClampedArray]';
}

function isInt16Array(val) {
  return toStr.call(val) === '[object Int16Array]';
}

function isUint16Array(val) {
  return toStr.call(val) === '[object Uint16Array]';
}

function isInt32Array(val) {
  return toStr.call(val) === '[object Int32Array]';
}

function isUint32Array(val) {
  return toStr.call(val) === '[object Uint32Array]';
}

function isFloat32Array(val) {
  return toStr.call(val) === '[object Float32Array]';
}

function isFloat64Array(val) {
  return toStr.call(val) === '[object Float64Array]';
}

function isError(val) {
  return toStr.call(val) === '[object Error]';
}

function isPromise(val) {
  return toStr.call(val) === '[object Promise]';
}

function isSet(val) {
  return toStr.call(val) === '[object Set]';
}

function isWeakSet(val) {
  return toStr.call(val) === '[object WeakSet]';
}

function isMap(val) {
  return toStr.call(val) === '[object Map]';
}

function isWeakMap(val) {
  return toStr.call(val) === '[object WeakMap]';
}

function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

export { isArguments, isArray, isArrayBuffer, isArrayBufferView, isBlob, isBoolean, isBuffer, isDate, isError, isFile, isFloat32Array, isFloat64Array, isFormData, isFunction, isInt16Array, isInt32Array, isInt8Array, isMap, isNull, isNumber, isObject, isPlainObject, isPromise, isRegExp, isSet, isStream, isString, isSymbol, isURLSearchParams, isUint16Array, isUint32Array, isUint8Array, isUint8ClampedArray, isUndefined, isWeakMap, isWeakSet };
