function read_sentence(str) {
  var NumVowels = 0;
  var NumWords = 1;
  var length = 0;
  for (var i = 0; i < str.length; i++) {
    length++;
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      NumVowels++;
    } else if (str[i] == ' ') {
      NumWords++;
    }
  }

  return length + ' ' + NumVowels + ' ' + NumWords;
}
