import _typeof from "@babel/runtime/helpers/esm/typeof";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
function maxBy(array, key) {
  var result = undefined;
  if (array == null) {
    return result;
  } else if (array.length === 0) {
    return result;
  }
  var iteratee = function iteratee(value) {
    return value ? value[key] : undefined;
  };
  var computed;
  var _iterator = _createForOfIteratorHelper(array),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      var current = iteratee(value);
      if (current != null && (computed === undefined ? current === current && !isSymbol(current) : current > computed)) {
        computed = current;
        result = value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
function getTag(value) {
  var toString = Object.prototype.toString;
  if (value === null) {
    return '[object Null]';
  }
  if (value === undefined) {
    return '[object Undefined]';
  }
  return toString.call(value);
}
function isSymbol(value) {
  var type = _typeof(value);
  return type === 'symbol' || type === 'object' && value !== null && getTag(value) === '[object Symbol]';
}
export default maxBy;