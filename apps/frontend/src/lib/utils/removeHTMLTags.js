/**
 * @param {string} str
 * @returns {string}
 */

export const removeHTMLTags = (str) => {
  return str.replace(/<[^>]*>?/gm, "");
};
