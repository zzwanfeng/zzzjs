export default function floatAdd(num1, num2) {
  if (!(isNumber(num1) || isNumber(num2))) {
    console.warn('Please pass in the number type');
    return NaN;
  }
  var r1, r2, m;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (error) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (error) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (num1 * m + num2 * m) / m;
}
function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}