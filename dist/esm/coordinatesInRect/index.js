function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @param startPos 左上顶点坐标
 * @param w 矩形的宽
 * @param h 矩形的高
 * @returns 返回矩形内的任意坐标
 */
function coordinatesInRect(startPos, w, h) {
  if (startPos && Array.isArray(startPos) && startPos.length === 2 && typeof w === 'number' && typeof h === 'number') {
    var _startPos = _slicedToArray(startPos, 2),
      x0 = _startPos[0],
      y0 = _startPos[1];
    // 生成大于等于 x0，小于等于 x0 + w 的 x 坐标
    var pointX = Math.floor(Math.random() * (w + 1)) + x0;
    // 生成大于等于 y0，小于等于 y0 + h 的 y 坐标
    var pointY = Math.floor(Math.random() * (h + 1)) + y0;
    return [pointX, pointY];
  } else {
    throw new Error('Please enter correct parameters.');
  }
}
export default coordinatesInRect;