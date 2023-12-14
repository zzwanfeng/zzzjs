// xss 注入，对标签进行转义
var xss = function xss(str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag;
  });
};
export default xss;