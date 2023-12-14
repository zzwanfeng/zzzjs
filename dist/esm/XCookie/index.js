function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var XCookie = /*#__PURE__*/function () {
  function XCookie() {
    _classCallCheck(this, XCookie);
    _defineProperty(this, "initOption", void 0);
    this.initOption = {
      path: './'
    };
  }
  _createClass(XCookie, [{
    key: "checkEnviroment",
    value: function checkEnviroment() {
      if (typeof document === 'undefined') {
        throw new Error('Document object does not exist, please check enviroment.');
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.checkEnviroment();
      option = Object.assign({}, this.initOption, option);
      var _option = option,
        path = _option.path,
        domain = _option.domain,
        expires = _option.expires,
        maxAge = _option.maxAge;
      var _option2 = option,
        secure = _option2.secure;
      key = encodeURIComponent(key.trim());
      value = encodeURIComponent(value.trim());
      var secureStr = '';
      path = "; path=".concat(path);
      domain && (domain = "; domain=".concat(domain));
      secure && (secureStr = '; secure');
      if (maxAge && +maxAge == maxAge) {
        maxAge = "; max-age=".concat(maxAge);
      } else {
        if (maxAge) {
          console.warn('Invalid max-age.');
        }
        maxAge = '';
      }
      if (expires) {
        switch (expires.constructor) {
          case String:
            expires = '; expires=' + expires;
            break;
          case Number:
            if (expires === Infinity) {
              expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
            } else {
              expires = '; expires=' + new Date(Date.now() + expires * 864e5);
            }
            break;
          case Date:
            expires = '; expires=' + expires.toUTCString();
            break;
        }
      } else {
        expires = '';
      }
      return document.cookie = "".concat(key, "=").concat(value).concat(path).concat(domain).concat(expires).concat(maxAge).concat(secureStr);
    }
  }, {
    key: "get",
    value: function get(key) {
      this.checkEnviroment();
      if (!key) {
        return '';
      }
      var cookieStrArr = document.cookie ? document.cookie.split('; ') : [];
      var _iterator = _createForOfIteratorHelper(cookieStrArr),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cookieStr = _step.value;
          var partCookie = cookieStr.split('=');
          var name = decodeURIComponent(partCookie[0]),
            value = decodeURIComponent(partCookie.slice(1).join('='));
          if (key === name) {
            return value;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return '';
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.set(key, '', Object.assign({}, option, {
        expires: -1
      }));
    }
  }, {
    key: "allCookies",
    value: function allCookies() {
      this.checkEnviroment();
      var cookiesObj = {};
      var cookieStrArr = document.cookie ? document.cookie.split('; ') : [];
      var _iterator2 = _createForOfIteratorHelper(cookieStrArr),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cookieStr = _step2.value;
          var partCookie = cookieStr.split('=');
          var key = decodeURIComponent(partCookie[0]),
            value = decodeURIComponent(partCookie.slice(1).join('='));
          cookiesObj[key] = value;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return cookiesObj;
    }
  }]);
  return XCookie;
}();
export default new XCookie();