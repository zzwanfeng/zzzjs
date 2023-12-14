/**
 *
 * @param email
 * @returns
 */
var isEmail = function isEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};
export default isEmail;