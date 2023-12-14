export default function floatMul(num1, num2) {
  if (!(isNumber(num1) || isNumber(num2))) {
    console.warn('Please pass in the number type');
    return NaN;
  }
  var m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (error) {}
  try {
    m += s2.split('.')[1].length;
  } catch (error) {}
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}
function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}