function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
export default function calculateMemory(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'B';
  var bytes = 0;
  function sizeOf(obj) {
    if (obj !== null && obj !== undefined) {
      switch (_typeof(obj)) {
        case 'number':
          bytes += 8;
          break;
        case 'string':
          bytes += obj.length * 2;
          break;
        case 'boolean':
          bytes += 4;
          break;
        case 'object':
          if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
              sizeOf(obj[i]);
            }
          } else if (obj !== null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                sizeOf(obj[key]);
              }
            }
          }
          break;
        case 'function':
          bytes += obj.toString().length;
          break;
      }
    }
    return bytes;
  }
  var bytesCount = sizeOf(value);
  switch (unit.toUpperCase()) {
    case 'B':
      return "".concat(bytesCount, " B");
    case 'KB':
      return "".concat((bytesCount / 1024).toFixed(2), " KB");
    case 'MB':
      return "".concat((bytesCount / (1024 * 1024)).toFixed(2), " MB");
    default:
      return "".concat(bytesCount, " B");
  }
}