// 将rgba字符串对象转化为rgba对象

export default function rgba2obj() {
  var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var reg = /rgba\((\d+),(\d+),(\d+),(\d?\.?\d+)\)/g;
  var rgbaObj = {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
  rgba.replace(reg, function (_m, r, g, b, a) {
    rgbaObj = {
      r: +r,
      g: +g,
      b: +b,
      a: +a
    };
    return rgba;
  });
  return rgbaObj;
}