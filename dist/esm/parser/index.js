var parser = {
  FUNC_PREFIX: '__xfunc__',
  REG_PREFIX: '__xreg__',
  isArrOrObj: function isArrOrObj(obj) {
    return this.isArr(obj) || this.isObj(obj);
  },
  isArr: function isArr(obj) {
    return !!obj && Object.prototype.toString.call(obj) === '[object Array]';
  },
  isObj: function isObj(obj) {
    return !!obj && Object.prototype.toString.call(obj) === '[object Object]';
  },
  isRegExp: function isRegExp(obj) {
    return !!obj && Object.prototype.toString.call(obj) === '[object RegExp]';
  },
  isFunc: function isFunc(obj) {
    return typeof obj === 'function';
  },
  funcParse: function funcParse(obj) {
    var _this = this;
    var result;
    if (this.isArr(obj)) {
      result = [];
      result = obj.map(function (v) {
        /** 如果是函数类型, 则转换为字符串 */
        if (_this.isFunc(v)) {
          return "".concat(_this.FUNC_PREFIX).concat(v);
        }
        /** 如果类型为正则 */
        if (_this.isRegExp(v)) {
          return "".concat(_this.REG_PREFIX).concat(v);
        }
        /** 如果是数组或者对象 */
        if (_this.isArrOrObj(v)) {
          return _this.funcParse(v);
        }
        /** 基本类型 */
        return v;
      });
    }
    if (this.isObj(obj)) {
      result = {};
      for (var _key in obj) {
        var v = obj[_key];
        if (this.isFunc(v)) {
          result[_key] = "".concat(this.FUNC_PREFIX).concat(v);
        } else if (this.isRegExp(v)) {
          /** 如果类型为正则 */
          result[_key] = "".concat(this.REG_PREFIX).concat(v);
        } else if (this.isArrOrObj(v)) {
          result[_key] = this.funcParse(v);
        } else result[_key] = v;
      }
    }
    return result;
  },
  parse: function parse(jsonStr, error) {
    var _this2 = this;
    try {
      return JSON.parse(jsonStr, function (key, value) {
        if (value && typeof value === 'string') {
          var _value = value.indexOf(_this2.FUNC_PREFIX) > -1 ? new Function("return ".concat(value.replace(_this2.FUNC_PREFIX, '')))() : value.indexOf(_this2.REG_PREFIX) > -1 ? new Function("return ".concat(value.replace(_this2.REG_PREFIX, '')))() : value;
          return _value;
        }
        return value;
      });
    } catch (err) {
      error && error(err);
    }
  },
  stringify: function stringify(obj, replacer, space, error) {
    try {
      var _obj = obj;
      if (this.isRegExp(obj)) {
        /** 如果类型为正则 */
        _obj = "".concat(this.REG_PREFIX).concat(obj);
      }
      if (this.isFunc(obj)) {
        _obj = "".concat(this.FUNC_PREFIX).concat(obj);
      }
      if (this.isArrOrObj(obj)) {
        _obj = this.funcParse(obj);
      }
      return JSON.stringify(_obj, replacer, space);
    } catch (err) {
      error && error(err);
      return '';
    }
  },
  fastStringify: function fastStringify(obj, space, error) {
    var _this3 = this;
    try {
      return JSON.stringify(obj, function (k, v) {
        /** 如果类型为函数 */
        if (_this3.isFunc(v)) {
          return "".concat(_this3.FUNC_PREFIX).concat(v);
        }
        /** 如果类型为正则 */
        if (_this3.isRegExp(v)) {
          return "".concat(_this3.REG_PREFIX).concat(v);
        }
        return v;
      }, space);
    } catch (err) {
      error && error(err);
      return '';
    }
  },
  nativeStringify: JSON.stringify,
  nativeParse: JSON.parse
};
export default parser;