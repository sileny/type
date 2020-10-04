/*!
  * @silen/type v1.0.0
  * (c) 2020
  * author: sunsilent
  * email: sunsilently@outlook.com
  * @license MIT
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Type = {}));
}(this, (function (exports) { 'use strict';

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

  exports.isArguments = isArguments;
  exports.isArray = isArray;
  exports.isArrayBuffer = isArrayBuffer;
  exports.isArrayBufferView = isArrayBufferView;
  exports.isBlob = isBlob;
  exports.isBoolean = isBoolean;
  exports.isBuffer = isBuffer;
  exports.isDate = isDate;
  exports.isError = isError;
  exports.isFile = isFile;
  exports.isFloat32Array = isFloat32Array;
  exports.isFloat64Array = isFloat64Array;
  exports.isFormData = isFormData;
  exports.isFunction = isFunction;
  exports.isInt16Array = isInt16Array;
  exports.isInt32Array = isInt32Array;
  exports.isInt8Array = isInt8Array;
  exports.isMap = isMap;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPlainObject = isPlainObject;
  exports.isPromise = isPromise;
  exports.isRegExp = isRegExp;
  exports.isSet = isSet;
  exports.isStream = isStream;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isURLSearchParams = isURLSearchParams;
  exports.isUint16Array = isUint16Array;
  exports.isUint32Array = isUint32Array;
  exports.isUint8Array = isUint8Array;
  exports.isUint8ClampedArray = isUint8ClampedArray;
  exports.isUndefined = isUndefined;
  exports.isWeakMap = isWeakMap;
  exports.isWeakSet = isWeakSet;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
