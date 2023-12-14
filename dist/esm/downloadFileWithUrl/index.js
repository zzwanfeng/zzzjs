import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
/**
 *
 * @param url 下载链接
 * @param fileName 文件名
 */
function downloadFileWithUrl(url) {
  var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!fileName) {
    var urlArr = url.split('/');
    fileName = urlArr[urlArr.length - 1];
  }
  fetch(url, {
    headers: new Headers({
      Origin: location.origin
    }),
    mode: 'no-cors'
  }).then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", res.blob());
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).then(function (data) {
    var reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = function () {
      var eleLink = document.createElement('a');
      eleLink.download = fileName;
      var blobUrl = reader.result;
      eleLink.href = blobUrl;
      eleLink.click();
      eleLink.remove();
    };
  });
}
export default downloadFileWithUrl;