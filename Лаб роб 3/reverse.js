var reverseText = (string) => {
  return string.split("").reverse().join("");
};

console.log(reverseText("Петренко Ярослав"));
module.exports.reverse = reverseText;
