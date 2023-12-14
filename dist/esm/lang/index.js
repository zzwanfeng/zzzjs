var lang = {
  /**
   *
   * @param str
   * @returns
   */
  isCn: function isCn(str) {
    var chineseRegex = /^[\u4e00-\u9fa5]+$/;
    return chineseRegex.test(str);
  },
  /**
   *
   * @param str
   * @returns
   */
  isEn: function isEn(str) {
    var englishRegex = /^[A-Za-z]+$/;
    return englishRegex.test(str);
  }
};
export default lang;