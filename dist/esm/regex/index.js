/**
 *
 * @param Regexp: 需要校验的正则表达式
 * @param text：需要匹配的内容
 */
var regex = function regex(regexp, text) {
  if (regexpMap[regexp]) {
    return regexpMap[regexp](text);
  } else {
    throw Error('请输入正确的正则类型');
  }
};

// 正则表达式类型

/**
 * 正则表达式支持的列表
 */
var regexpMap = {
  // 邮箱 的正则表达式
  emailRegexp: function emailRegexp(text) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(text);
  },
  // 手机号码 的正则表达式
  phoneRegexp: function phoneRegexp(text) {
    return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(text);
  },
  // 国内电话号码 的正则表达式
  fixPhone: function fixPhone(text) {
    return /\d{3}-\d{8}|\d{4}-\d{7}/.test(text);
  },
  // 身份证号(15位、18位数字) 的正则表达式
  idRegexp: function idRegexp(text) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(text);
  },
  // IPv4 的正则表达式
  ipv4Regexp: function ipv4Regexp(text) {
    return /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/.test(text);
  },
  // 是否包含中文 的正则表达式
  chineseRegexp: function chineseRegexp(text) {
    return /[\u4E00-\u9FA5]{2,4}$/.test(text);
  },
  // 匹配qq号（腾讯QQ号从10000开始） 的正则表达式
  qqRegexp: function qqRegexp(text) {
    return /[1-9][0-9]{4,}/.test(text);
  },
  // 匹配中国邮政编码 的正则表达式
  chinesePostcodeRegexp: function chinesePostcodeRegexp(text) {
    return /[1-9]\d{5}(?!d)/.test(text);
  },
  // 匹配英国邮政编码 的正则表达式
  usPostcodeRegexp: function usPostcodeRegexp(text) {
    return /^\d{5}(-\d{4})?$/.test(text);
  },
  // 匹配美国邮政编码 的正则表达式
  ukPostcodeRegexp: function ukPostcodeRegexp(text) {
    return /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(text);
  },
  /**
   * 车架号 的正则表达式
   * 由大写字母和数字组成，长度17位；
   * 字母不会出现O、Q、I三个字母；
   * 第9位只能是【0-9】的数字和字母X;
   * 第13-17位只能是数字；
   */
  carNumberRegexp: function carNumberRegexp(text) {
    return /^[A-HJ-NPR-Z\d]{8}[X\d][A-HJ-NPR-Z\d]{3}\d{5}$/.test(text);
  },
  // 帐号是否合法(字母开头，允许5-16位，允许字母数字下划线)： 正则表达式
  accountRegexp: function accountRegexp(text) {
    return /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(text);
  },
  // rgb 颜色 正则表达式
  rgbRegexp: function rgbRegexp(text) {
    return /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(text);
  },
  // rgba 颜色 正则表达式
  rgbaRegexp: function rgbaRegexp(text) {
    return /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([01](\.\d+)?)\s*\)$/.test(text);
  },
  // 十六进制颜色代码 正则表达式
  numberRegexp: function numberRegexp(text) {
    return /^#(?:[0-9a-fa-f]{3}){1,2}$/.test(text);
  },
  // 匹配 hsl 值 正则表达式
  hslRegexp: function hslRegexp(text) {
    return /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/.test(text);
  },
  // 匹配 hsla 值 正则表达式
  hslaRegexp: function hslaRegexp(text) {
    return /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([01](\.\d+)?)\s*\)$/.test(text);
  }
};
export default regex;