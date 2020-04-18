/**
 * Base on Perl port:
 * https://github.com/rigoneri/indefinite-article.js
 */

module.exports = function indefiniteArticle(phrase) {
  // Getting the first word
  var match = /\w+/.exec(phrase);
  if (match) var word = match[0];
  else return `an ${phrase}`;

  var l_word = word.toLowerCase();
  // Specific start of words that should be preceeded by 'an'
  var alt_cases = ["honest", "hour", "hono"];
  for (var i in alt_cases) {
    if (l_word.indexOf(alt_cases[i]) == 0) return `an ${phrase}`;
  }

  // Single letter word which should be preceeded by 'an'
  if (l_word.length == 1) {
    if ("aedhilmnorsx".indexOf(l_word) >= 0) return `an ${phrase}`;
    else return `a ${phrase}`;
  }

  // Capital words which should likely be preceeded by 'an'
  if (
    word.match(
      /(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/
    )
  ) {
    return `an ${phrase}`;
  }

  // Special cases where a word that begins with a vowel should be preceeded by 'a'
  regexes = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
  for (var i in regexes) {
    if (l_word.match(regexes[i])) return `a ${phrase}`;
  }

  // Special capital words (UK, UN)
  if (word.match(/^U[NK][AIEO]/)) {
    return `a ${phrase}`;
  } else if (word == word.toUpperCase()) {
    if ("aedhilmnorsx".indexOf(l_word[0]) >= 0) return `an ${phrase}`;
    else return `a ${phrase}`;
  }

  // Basic method of words that begin with a vowel being preceeded by 'an'
  if ("aeiou".indexOf(l_word[0]) >= 0) return `an ${phrase}`;

  // Instances where y follwed by specific letters is preceeded by 'an'
  if (l_word.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/))
    return `an ${phrase}`;

  return `a ${phrase}`;
};
