import { formatDate } from "../index";
var dateTypeMap = {
  year: function year(date, num) {
    return date.setFullYear(date.getFullYear() + num);
  },
  month: function month(date, num) {
    return date.setMonth(date.getMonth() + num);
  },
  day: function day(date, num) {
    return date.setDate(date.getDate() + num);
  },
  hour: function hour(date, num) {
    return date.setHours(date.getHours() + num);
  },
  minute: function minute(date, num) {
    return date.setMinutes(date.getMinutes() + num);
  },
  second: function second(date, num) {
    return date.setSeconds(date.getSeconds() + num);
  },
  milliseconds: function milliseconds(date, num) {
    return date.setMilliseconds(date.getMilliseconds() + num);
  }
};

/**
 * 对日期进行计算，比如计算前一天，前一个月，后一天，后一个月等等
 * @param dateStr: 需要计算的日期字符串或者 Date
 * @param num：需要加上或者减去的天数（小时，月，年，分钟，秒等）
 * @param flag：对 年月日时分秒 那个进行计算
 * @param format：对 计算后的日期进行格式化的格式，默认使用 YY-MM-DD hh:mm:ss。比如：2020-01-02 08:00:00
 */
var dateCalculate = function dateCalculate(dateStr, num, flag, format) {
  if (dateTypeMap[flag]) {
    var date = new Date(dateStr);
    var result = dateTypeMap[flag](date, num);
    return formatDate(result, format);
  } else {
    throw Error('请输入正确的计算参数(仅支持 年、月、日、时、分、秒、毫秒)');
  }
};
export default dateCalculate;