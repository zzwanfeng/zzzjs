/**
 *
 * @param linkList
 * @returns
 */
var linkListToArray = function linkListToArray(linkList) {
  var arr = [];
  var header = linkList;
  while (header) {
    arr.push(header.value);
    header = header.next;
  }
  return arr;
};
export default linkListToArray;