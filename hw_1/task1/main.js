// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
 // [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');

// Сигнатура map
function map(list, fn){
  arr = arr.sort()
  createList(arr)
  console.log(arr);
 }
map(list, createList);

function createList() {
  for(let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.classList.add('list-group-item');
		item.textContent = arr[i];
		list.appendChild(item);		
  } 
}
// console.log(createList());

