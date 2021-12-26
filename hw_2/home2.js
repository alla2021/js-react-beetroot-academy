
function sum (a) {
  return function (b) {
      return a + b;
  };
}
console.log(sum(7)(-1));

/*
 * Написати функцію, яка отримуватиме в аргумент
 * масив votes та повертати масив унікальних значень
 * відсортованих за кількістю їх входження до масиву votes
 * Результат повинен вийти таким [react, vue, angular]
 * */
const votes = [
  "angular",
  "react",
  "vue",
  "react",
  "angular",
  "react",
  "vue",
  "react",
  "vue",
];

function getVotes() {
  const count = votes.reduce((acc, item) =>{
    if(!acc[item]) {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    } 
    return acc          
  },{})
  console.log(count)
  let arr = []
  for (var el in count) {
    arr.push([el, count[el]]);
  } console.log(arr)
  arr.sort(function(a,b){
    return a[1] - b[1]
  })
  console.log(arr)
}

console.log(getVotes())







