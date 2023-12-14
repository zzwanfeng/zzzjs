import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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