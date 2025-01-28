// Your code here
function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must contain only alphabetic characters');
    }

    const lowerCasedWord = word.toLowerCase();
    const reversedWord = lowerCasedWord.split('').reverse().join('');
    return lowerCasedWord === reversedWord;
}

module.exports = { isPalindrome };
