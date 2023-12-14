/**
 *
 * @param arr
 * @returns
 */
var shuffle = function shuffle(arr) {
  return arr.sort(function () {
    return 0.5 - Math.random();
  });
};
export default shuffle;