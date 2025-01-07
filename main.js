let words = ["non", "banan", "mashina", "asal", "olma", "aziza", "Gul", "nok"];

let wordsWithN = words.filter(word => word.includes('n'));

let wordsWithoutN = words.filter(word => !word.includes('n'));

console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");
