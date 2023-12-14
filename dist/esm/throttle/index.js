/**
 *
 * @param fn
 * @param delay
 * @returns
 */
function throttle(fn, delay) {
  var flag = true;
  return function () {
    if (flag) {
      flag = false;
      fn.apply(void 0, arguments);
      setTimeout(function () {
        flag = true;
      }, delay);
    }
  };
}
export default throttle;