// 1 start

function setBackground(type, color) {
  var y = document.getElementsByTagName(type);

  for (let el of y) {
    el.style.backgroundColor = color;
  }
}

// 1 end

// 2 start

function getLinksAll() {
  var x = document.getElementsByTagName("a");

  if (x.length > 0) {
    console.log("Elements: ", x.length);
    console.log(x[0].innerText);
    if (x.length > 1) {
      console.log(x[x.length - 1].innerText);
    }
  }
}

// 2 end

// 3 start

// 1
function setSizeColor(array) {
  var c = document.getElementById("list");

  for (let i = 0; i < array.length; i++) {
    try {
      c.children[array[i] - 1].style.fontSize = "10px";
      c.children[array[i] - 1].style.color = "red";
    } catch {}
  }
}

// 2
function deleteTheLast() {
  var b = document.getElementById("list");
  b.lastElementChild.remove();
}
function addTheLast(text) {
  let li = document.createElement("li");
  li.innerText = text;
  var t = document.getElementById("list");
  t.append(li);
}
// 3 end

// 4 start

// 1

function createList() {
  let ol = document.createElement("ol");
  ol.id = "myList";
  books.map((el) => {
    let li = document.createElement("li");
    let p1 = document.createElement("p");
    p1.innerText = el.name;
    li.appendChild(p1);
    let p2 = document.createElement("p");
    p2.innerText = el.author;
    li.appendChild(p2);
    let p3 = document.createElement("p");
    p3.innerText = el.data;
    li.appendChild(p3);
    ol.append(li);
  });
  document.getElementById("books").after(ol);
}

// 2

function addLink(arr) {
  let x = document.getElementById("myList");
  let childrens = x.children;
  if (arr.length !== childrens.length) return;
  for (let i = 0; i < childrens.length; i++) {
    let a = document.createElement("a");
    a.href = arr[i];
    a.innerText = "Посилання";
    a.target = "_blank";
    childrens[i].appendChild(a);
  }
}

// 4 end

createList();
let links = [
  "https://ru.wikipedia.org/wiki/О_дивный_новый_мир",
  "https://ru.wikipedia.org/wiki/1984_(роман)",
  "https://ru.wikipedia.org/wiki/Автостопом_по_Галактике_(роман)",
  "https://ru.wikipedia.org/wiki/Краткая_история_времени",
  "https://ru.bookmate.com/books/xtiue4kB",
];
addLink(links);
deleteTheLast();
addTheLast("Алжир");
setSizeColor([1, 3, 10, 15]);
// setBackground("p", "red");
getLinksAll();
