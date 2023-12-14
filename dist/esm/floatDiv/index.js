import floatMul from "../floatMul";
export default function floatDiv(num1, num2) {
  if (!(isNumber(num1) || isNumber(num2))) {
    console.warn('Please pass in the number type');
    return NaN;
  }
  var m1 = 0,
    m2 = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m1 += s1.split('.')[1].length;
  } catch (error) {}
  try {
    m2 += s2.split('.')[1].length;
  } catch (error) {}
  return floatMul(Number(s1.replace('.', '')) / Number(s2.replace('.', '')), Math.pow(10, m2 - m1));
}
function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}