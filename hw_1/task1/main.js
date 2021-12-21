// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
 // [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');

function createList(arr) {
  arr.sort().map((element) => {
    let li = document.createElement("li");
    list.appendChild(li)
    li.textContent += element;
  }) 
}
console.log(list)

function map(list, fn){
  fn.forEach((element) => list.append(element));
 }
map(list, createList(arr));





