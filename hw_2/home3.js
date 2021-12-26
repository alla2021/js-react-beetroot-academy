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
console.log(filteredArr); 


// const arr = [11, 66, 33, 44, 22, 55, 2];
// const filteredArr = arr.filter(item => item > 50);
// console.log(filteredArr); 

