// Написать функцию map, которая будет принимать в качестве
// аргумента массив arr и функцию, которая в свою очередь будет
// осуществлять преобразование массива arr  в вид
 // [ "<li class="list-group-item">Tom</li>", ....]
// и выводить элементы массива в ul с id="list"
// Вывод должен осуществляться в отсортированном по алфавиту виде

let arr = ["Tom", "Steve", "Bill", "Rita", "Pete", "Ashley"];
const list = document.getElementById('list');

function createList(arr) {
  arr = arr.sort()
  const newArr = []
  for(let i in arr){
    newArr[i]=`<li class="list-group-item">${arr[i]}</li>`
  } return newArr  
}
// console.log(createList(arr))

function map(list, fn){
  fn(arr).forEach((item) => {
    list.innerHTML += item;
});
}
map(list, createList);


