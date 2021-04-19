console.log("My second project");
var fs = require("fs");

fs.readFile("file.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});

fs.writeFile("web.txt", "JavaScript", function (err) {
  if (err) {
    return console.error(err);
  }
});
