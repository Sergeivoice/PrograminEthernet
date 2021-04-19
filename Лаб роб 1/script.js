let word = prompt("Введіть слово", "");
alert("Довжина слова " + word.length);
let rev = revers(word);
console.log(rev);

function revers(str) {
  return str.split("").reverse().join("");
}
