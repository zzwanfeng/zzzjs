/*
 * @Author: bigFace2019 599069310@qq.com
 * @Date: 2023-04-11 19:40:55
 * @LastEditors: bigFace2019 599069310@qq.com
 * @LastEditTime: 2023-04-14 19:23:31
 * @FilePath: \zzzjs\src\getDom\index.ts
 * @Description: 获取dom节点相对于文档定位。
 */

function getDomPageXY(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      left = _element$getBoundingC.left;
    //top和left加上滚动条
    // For scrollX
    var scrollLeft = document.documentElement.scrollLeft;
    // For scrollY
    var scrollTop = document.documentElement.scrollTop;
    return [left + scrollLeft, top + scrollTop];
  }
  return undefined;
}
export default getDomPageXY;