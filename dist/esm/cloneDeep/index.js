import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
/**
 * 深拷贝
 * @returns
 */
function cloneDeep(obj) {
  if (obj === null) {
    return null;
  }
  if (obj instanceof Set) {
    return new Set(_toConsumableArray(obj));
  }
  if (obj instanceof Map) {
    return new Map(_toConsumableArray(obj));
  }
  if (obj instanceof WeakMap) {
    var weakMap = new WeakMap();
    weakMap = obj;
    return weakMap;
  }
  if (obj instanceof WeakSet) {
    var weakSet = new WeakSet();
    weakSet = obj;
    return weakSet;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (typeof obj === 'undefined') {
    return undefined;
  }
  if (Array.isArray(obj)) {
    return obj.map(cloneDeep);
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  if (_typeof(obj) !== 'object') {
    return obj;
  }
  var newObj = {};
  for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    newObj[key] = cloneDeep(value);
  }
  var symbolkeys = Object.getOwnPropertySymbols(obj);
  var _iterator = _createForOfIteratorHelper(symbolkeys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _key = _step.value;
      newObj[_key] = cloneDeep(obj[_key]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return newObj;
}
export default cloneDeep;