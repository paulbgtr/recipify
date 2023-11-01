/**
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};
