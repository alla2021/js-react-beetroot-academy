// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
 // [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');
arr.sort();

function map(arr, f) {
  let result = [];
  for (let el of arr) {
      result.push(f(el));
  } return result;
} 

function createList(arr) {
  let item = document.createElement('li');
  list.appendChild(item);	
  item.textContent = `${arr}`;
  return list;
}
map(arr, createList);

function f() {
  console.log(this)
}
new f()

const obj = {
  name: "Alla",
  sayHello: `Hello ${this.name}`
}

console.log(obj.sayHello)