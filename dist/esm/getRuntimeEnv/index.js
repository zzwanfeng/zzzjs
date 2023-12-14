/**
 * 获取当前运行环境,返回运行环境的集合判断
 * @returns
 */
function getRuntimeEnv() {
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof window.WXEnvironment !== 'undefined' && !!window.WXEnvironment.platform;
  var weexPlatform = inWeex && window.WXEnvironment.platform.toLowerCase();

  //浏览器 UA 判断
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  return {
    isWeex: inWeex,
    isIE: isIE,
    isIE9: isIE9,
    isEdge: isEdge,
    isAndroid: isAndroid,
    isIOS: isIOS,
    isChrome: isChrome
  };
}
export default getRuntimeEnv;