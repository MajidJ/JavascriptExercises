'use strict';

const palindromeChecker = function(sentence) {
  const input = sentence.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
  const result = sentence.split('').reverse().join('')
    .replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .toLowerCase();
  console.log(input);
  console.log(result);
  console.log(result === input);
};

palindromeChecker('wow');
palindromeChecker('Was it a car or a cat I saw');
palindromeChecker('A man, a plan, a canal, Panama!');
palindromeChecker('Yo test');
