/**
 * Ported from ruby gem:
 * https://github.com/rossmeissl/indefinite_article/
 */

module.exports = function indefiniteArticle(raw) {
  const word = `${raw}`;
  const A_REQUIRING_PATTERNS = /^(([bcdgjkpqtuvwyz]|onc?e|onearmed|onetime|ouija)$|e[uw]|uk|ubi|ubo|oaxaca|ufo|ur[aeiou]|use|ut([^t])|unani|uni(l[^l]|[a-ko-z]))/i;
  const AN_REQUIRING_PATTERNS = /^([aefhilmnorsx]$|hono|honest|hour|heir|[aeiou]|8|11)/i;
  const UPCASE_A_REQUIRING_PATTERNS = /^(UN$)/;
  const UPCASE_AN_REQUIRING_PATTERNS = /^$/;

  const first_word = word.split("-").shift();
  if (
    first_word &&
    (AN_REQUIRING_PATTERNS.test(first_word) ||
      UPCASE_AN_REQUIRING_PATTERNS.test(first_word)) &&
    !(
      A_REQUIRING_PATTERNS.test(first_word) ||
      UPCASE_A_REQUIRING_PATTERNS.test(first_word)
    )
  ) {
    return `an ${word}`;
  } else {
    return `a ${word}`;
  }
};
