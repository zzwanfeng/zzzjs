import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
/**
 *
 * @param milliseconds
 * @returns
 */
var sleep = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            return setTimeout(resolve, milliseconds);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sleep(_x) {
    return _ref.apply(this, arguments);
  };
}();
export default sleep;