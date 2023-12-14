/**
 *
 * @param str
 * @param char
 * @returns
 */
var charCount = function charCount(str, char) {
  return str.split(char).length - 1;
};
export default charCount;