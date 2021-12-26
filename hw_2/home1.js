/* 
 Завдання 1
1. За допомогою debugger проаналізувати чому виходить
так що при натисканні на будь-який елемент li ми в alert() отримуємо цифру 5
а за логікою повинні отримувати номер елемента, на який клікнули

2. За допомогою замикання зробити так, щоб при натисканні на елемент
    li отримували його номер (let НЕ ВИКОРИСТОВУВАТИ)
   
3. Виконати задачу 2 але використовуючи оголошення
    ітераційної змінної через let
*/
const list = document.getElementById("list");
const els = list.getElementsByTagName("li");

for (var i = 0, len = els.length; i < len; i++) {
  (function(counter){
    return els[i].onclick = function () {
      console.log(counter+1);
    }
  })(i)
}
//3
// const list = document.getElementById("list");
// const els = list.getElementsByTagName("li");
// for (let i = 0, len = els.length; i < len; i++) {
//   els[i].onclick = function () {
//     alert(i+1);
//   };
// }

//task3
//Написати функцію sum (a), яка повинна викликатися як sum (a) (b) і повертати суму двох чисел.
// Наприклад, sum (3) (1) -> 4, sum (7) (- 1) -> 6
function sum (a) {
  return function (b) {
      return a + b;
  };
}
console.log('task3 sum----->',sum(7)(-1));


//task4
/*
  * Створити функцію filter(arr, fn), яка
  * - приймає як аргументи масив arr і функцію fn
  * - повертає новий масив, який містить ті елементи arr, котрим fn повертає true.
  */
const arr = [11, 66, 33, 44, 22, 55, 2];

function filter(arr, f) {
  let result = [];
  for (let el of arr) {
    if(f(el) === true) {
      result.push(f(el));
    }} return result;
}
// Перевірка - повернути масив з елементами значення яких більше 50
const filteredArr = arr.filter(item => item > 50);
console.log('task4 filter------>',filteredArr); 

// const arr = [11, 66, 33, 44, 22, 55, 2];
// const filteredArr = arr.filter(item => item > 50);
// console.log(filteredArr); 

/*
 * Написати функцію, яка отримуватиме в аргумент
 * масив votes та повертати масив унікальних значень
 * відсортованих за кількістю їх входження до масиву votes
 * Результат повинен вийти таким [react, vue, angular]
 * */
// const votes = [
//   "angular",
//   "react",
//   "vue",
//   "react",
//   "angular",
//   "react",
//   "vue",
//   "react",
//   "vue",
// ];

// function getVotes() {
//   const count = votes.reduce((acc, item) =>{
//     if(!acc[item]) {
//       acc[item] = 1;
//     } else {
//       acc[item] += 1;
//     } 
//     return acc          
//   },{})
//   console.log(count)
//   let arr = []
//   for (var el in count) {
//     arr.push([el, count[el]]);
//   } console.log(arr)
//   arr.sort(function(a,b){
//     return a[1] - b[1]
//   })
//   console.log(arr)
// }

// console.log(getVotes())


