const palindromes = function (str) {
    const allowedString = "abcdefghijklmnopqrstuvwxyz0123456789";
    const trimmedString = str.toLowerCase().split("").filter((character) => allowedString.includes(character)).join("");
    const reversedString = trimmedString.split('').reverse().join('');
    return trimmedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
