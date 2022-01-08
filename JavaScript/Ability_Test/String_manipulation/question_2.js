//Create a function that takes a word and returns the new word without including the first character.
function newWord(a){
    return a.substring(1);
}
let x = newWord("apple");
console.log(x);
let input = newWord("cherry");
console.log(input);
input = newWord("plum");
console.log(input);