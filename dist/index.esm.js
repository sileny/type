/*!
  * @silen/type v1.0.0
  * (c) 2020
  * author: sunsilent
  * email: sunsilently@outlook.com
  * @license MIT
  */
/*!
  * @silen/type v1.0.0
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

function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}

/*!
  * @silen/type v1.0.0
  * (c) 2020
  * author: sunsilent
  * email: sunsilently@outlook.com
  * @license MIT
  */
var toStr = Object.prototype.toString;

function isFunction(val) {
  return toStr.call(val) === '[object Function]';
}

var toStr$1 = Object.prototype.toString;

function isArguments(val) {
  return toStr$1.call(val) === '[object Arguments]';
}

function isArray(val) {
  return toStr$1.call(val) === '[object Array]';
}

function isArrayBuffer(val) {
  return toStr$1.call(val) === '[object ArrayBuffer]';
}

function isArrayBufferView(val) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(val);
  } else {
    return val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
}

function isBlob(val) {
  return toStr$1.call(val) === '[object Blob]';
}

function isBoolean(val) {
  return toStr$1.call(val) === '[object Boolean]';
}

function isBuffer(val) {
  return !!(val != null && val.constructor != null && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val));
}

function isDate(val) {
  return toStr$1.call(val) === '[object Date]';
}

function isError(val) {
  return toStr$1.call(val) === '[object Error]';
}

function isFile(val) {
  return toStr$1.call(val) === '[object File]';
}

function isFloat32Array(val) {
  return toStr$1.call(val) === '[object Float32Array]';
}

function isFloat64Array(val) {
  return toStr$1.call(val) === '[object Float64Array]';
}

function isFormData(val) {
  return toStr$1.call(val) === '[object FormData]';
}

function isInt16Array(val) {
  return toStr$1.call(val) === '[object Int16Array]';
}

function isInt32Array(val) {
  return toStr$1.call(val) === '[object Int32Array]';
}

function isInt8Array(val) {
  return toStr$1.call(val) === '[object Int8Array]';
}

function isMap(val) {
  return toStr$1.call(val) === '[object Map]';
}

function isNull(val) {
  return toStr$1.call(val) === '[object Null]';
}

function isNumber(val) {
  return typeof val === 'number';
}

function isPlainObject(val) {
  if (toStr$1.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

function isPromise(val) {
  return toStr$1.call(val) === '[object Promise]';
}

function isRegExp(val) {
  return toStr$1.call(val) === '[object RegExp]';
}

function isSet(val) {
  return toStr$1.call(val) === '[object Set]';
}

function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

function isString(val) {
  return typeof val === 'string';
}

function isSymbol(val) {
  return toStr$1.call(val) === '[object Symbol]';
}

function isURLSearchParams(val) {
  return toStr$1.call(val) === '[object URLSearchParams]';
}

function isUint16Array(val) {
  return toStr$1.call(val) === '[object Uint16Array]';
}

function isUint32Array(val) {
  return toStr$1.call(val) === '[object Uint32Array]';
}

function isUint8Array(val) {
  return toStr$1.call(val) === '[object Uint8Array]';
}

function isUint8ClampedArray(val) {
  return toStr$1.call(val) === '[object Uint8ClampedArray]';
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

function isWeakMap(val) {
  return toStr$1.call(val) === '[object WeakMap]';
}

function isWeakSet(val) {
  return toStr$1.call(val) === '[object WeakSet]';
}

export { isArguments, isArray, isArrayBuffer, isArrayBufferView, isBlob, isBoolean, isBuffer, isDate, isError, isFile, isFloat32Array, isFloat64Array, isFormData, isFunction, isInt16Array, isInt32Array, isInt8Array, isMap, isNull, isNumber, isObject, isPlainObject, isPromise, isRegExp, isSet, isStream, isString, isSymbol, isURLSearchParams, isUint16Array, isUint32Array, isUint8Array, isUint8ClampedArray, isUndefined, isWeakMap, isWeakSet };
